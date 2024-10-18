import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import sortIcon from "../assets/sort.svg";
import spotlight from "../assets/spotlight.svg";
import trending from "../assets/trending.svg";
import filterIcon from "../assets/filter_alt.svg";
import recentPosts from "../assets/recent-posts.svg";
import arrowDark from "../assets/right-arrow-dark.svg";

let missingImg =
  "https://substackcdn.com/image/fetch/w_848,h_565,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcb250a4e-ba34-4f22-ade7-4b6babb20c05_1280x861.png";

const BlogCard = ({ post, formatDate, tag }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden p-4 border border-[#E8E8EA] font-inter">
      <Link
        to={`/blogs/${post.slug}`}
        className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-12"
      >
        <div className="flex flex-col py-4 gap-4 lg:gap-8 w-full lg:w-3/4">
          <div className="flex flex-col gap-6">
            <h2
              className="text-[20px] lg:text-[28px] font-bold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h2>
            <p
              className="text-[18px] text-[#232E52]"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:items-center text-[13px]">
            <div className="flex flex-wrap lg:flex-row gap-3">
              {tag &&
                tag.slice(0, 2).map((entry, index) => (
                  <p
                    key={index}
                    className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg"
                  >
                    {entry}
                  </p>
                ))}
            </div>

            <div className="text-black font-semibold">
              {formatDate(post.date)}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <img
            src={post.jetpack_featured_media_url || missingImg}
            alt={post.title.rendered}
            className="w-full lg:h-[250px] object-cover rounded-xl"
          />
        </div>
      </Link>
    </div>
  );
};

const BlogCardSmall = ({ post, formatDate, tag }) => {
  return (
    <div className="w-full overflow-hidden font-inter border-b border-[#24304C1A] py-6 lg:py-4">
      <Link to={`/blogs/${post.slug}`} className="flex justify-between gap-4">
        <div className="min-w-[100px] lg:w-1/4">
          <img
            src={post.jetpack_featured_media_url || missingImg}
            alt={post.title.rendered}
            className="w-[120px] h-[100px] lg:h-[120px] lg:w-auto object-cover rounded-xl" // fixed size for consistency
          />
        </div>

        <div className="flex lg:flex flex-col lg:py-4 gap-4 lg:w-[70%]">
          <div className="flex flex-col gap-6">
            <h2
              className="text-[18px] lg:text-[20px] font-semibold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <div className="flex flex-wrap lg:flex-row gap-2 text-[12px]">
              {tag &&
                tag.slice(0, 2).map((entry, index) => (
                  <p
                    key={index}
                    className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg"
                  >
                    {entry}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [tags, setTags] = useState({});
  const [uniqueTags, setUniqueTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [activeSort, setActiveSort] = useState("Descending");

  const [isSortDropdownVisible, setSortDropdownVisible] = useState(false);
  const [isCategoriesDropdownVisible, setCategoriesDropdownVisible] =
    useState(false);

  const sortList = ["Alphabetically", "Ascending", "Descending"];

  const toggleSortDropdown = () => {
    setSortDropdownVisible(!isSortDropdownVisible);
    setCategoriesDropdownVisible(false); // Close other dropdown when this one is open
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdownVisible(!isCategoriesDropdownVisible);
    setSortDropdownVisible(false); // Close other dropdown when this one is open
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://public-api.wordpress.com/wp/v2/sites/productspaceorgin.wordpress.com/posts"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!loading) {
      const fetchTags = async () => {
        try {
          // Create an object to store tags by post ID
          const tagsObject = {};

          const uniqueTagsSet = new Set(); // Create a Set for unique tags

          await Promise.all(
            posts.map(async (post) => {
              const response = await fetch(
                `https://public-api.wordpress.com/wp/v2/sites/productspaceorgin.wordpress.com/tags?post=${post.id}`
              );

              const data = await response.json();
              const tagData = data.map((entry) => entry?.name); // Get tag names

              // Store the tags in the object with post.id as the key
              tagsObject[post.id] = tagData;

              // Add each tag to the unique tags Set
              tagData.forEach((tag) => uniqueTagsSet.add(tag));
            })
          );

          // Update the state with the tags object
          setTags(tagsObject);

          // Convert the Set to an array and sort it
          const sortedUniqueTags = Array.from(uniqueTagsSet).sort();
          setUniqueTags(["All Posts", ...sortedUniqueTags]); // Update state with unique tags
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchTags();
    }
  }, [loading]);

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Convert the string to a Date object

    // Use Intl.DateTimeFormat to format the date
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long", // Full month name
      day: "2-digit", // 2-digit day
      year: "numeric", // 4-digit year
    }).format(date);

    return formattedDate;
  };

  const handleCategoryClick = (clickedTag) => {
    setActiveCategory(clickedTag);
    // console.log("filtered posts", filteredPosts);
    // console.log("Posts", posts);

    if (clickedTag == "All Posts") {
      setFilteredPosts(posts);
    } else {
      const newPosts = posts.filter((post) => {
        return tags[post.id]?.includes(clickedTag);
      });
      setFilteredPosts(newPosts);
    }
  };

  const handleSortClick = (sortOption) => {
    setActiveSort(sortOption);

    let sortedPosts = [...filteredPosts]; // Create a copy of filteredPosts to avoid direct mutation
  
    if (sortOption === "Alphabetically") {
      sortedPosts.sort((a, b) => {
        return a.title.rendered.localeCompare(b.title.rendered);
      });
    } else if (sortOption === "Ascending") {
      sortedPosts.sort((a, b) => {
        return new Date(a.date) - new Date(b.date); // Sort by date in ascending order (earliest first)
      });
    } else if (sortOption === "Descending") {
      sortedPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date); // Sort by date in descending order (latest first)
      });
    }
  
    setFilteredPosts(sortedPosts); // Update the state with the sorted array
  };


  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="font-inter max-w-screen-2xl mx-auto space-y-4 lg:space-y-8 bg-gradient-to-b from-[#26CBFF13] via-[#FFFFFF] to-[#26CBFF13]">
      <div className="px-4 lg:px-28 pt-2 lg:pt-12">
        <div className="py-8 text-start space-y-4">
          <h1 className="text-[28px] lg:text-[40px] font-sans font-bold">
            Build a Stronger Foundation in Product Management
          </h1>
          <p className="text-[17px]">
            Whether you&apos;re mastering the basics or advancing your skills,
            your go-to resource for delivering impactful products curated by
            product leaders.
          </p>
        </div>
      </div>

      {!loading && (
        <div className="flex flex-col lg:flex-row gap-16 px-4 lg:px-28 flex items-start rounded-xl">
          <div className="flex flex-col gap-4 lg:gap-6 w-full">
            <div className="flex gap-2 items-center text-[20px] font-semibold">
              <img src={spotlight} alt="" />
              <p>Splotlight</p>
            </div>
            <div>
              <img
                src={posts[0].jetpack_featured_media_url || missingImg}
                alt={posts[0].title.rendered}
                className="w-full h-[200px] lg:h-[400px] object-cover rounded-xl"
              />
            </div>

            <div className="flex justify-between gap-12 text-[25px] lg:text-[25px] w-full font-bold">
              <h2
                dangerouslySetInnerHTML={{
                  __html: posts[0].title.rendered,
                }}
                className="w-[80%]"
              />
              <div className="flex items-center">
                <Link to={`/blogs/${posts[0].slug}`} className="">
                  <img
                    src={arrowDark}
                    alt=""
                    style={{ transform: "rotate(-45deg)" }}
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-3 justify-between lg:items-center">
              <div className="flex items-center gap-2 text-[13px]">
                {tags &&
                  tags[posts[0].id]?.slice(0, 2).map((entry, index) => (
                    <p
                      key={index}
                      className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg"
                    >
                      {entry}
                    </p>
                  ))}
              </div>

              <div className="font-semibold">{formatDate(posts[0].date)}</div>
            </div>
          </div>

          <div className="pt-1">
            <div className="flex flex-col">
              <div className="flex gap-2 items-center text-[20px] font-semibold">
                <img src={trending} alt="" />
                <p>Trending</p>
              </div>
              {posts.slice(1, 4).map((post, index) => (
                <BlogCardSmall
                  key={index}
                  post={post}
                  formatDate={formatDate}
                  tag={tags[post.id]}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="px-4 lg:px-28 custom-12:px-0 py-8 font-hind">
        <div className="flex text-[14px] lg:text-[16px] text-[#2E3749] py-6 lg:px-12">
          <div className="">
            <button
              onClick={toggleSortDropdown}
              className="flex gap-2 items-center justify-center border border-[#013B4D3D] p-2 lg:p-3 rounded-lg"
            >
              <p>Sort By</p>
              <img src={sortIcon} alt="sort" className="h-5 w-auto" />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out  ${
                isSortDropdownVisible
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ maxHeight: isSortDropdownVisible ? "1000px" : "0" }}
            >
              <div className="flex flex-col items-start gap-2 mt-2 border border-[#013B4D3D] rounded-lg p-3">
                {sortList.map((data, index) => (
                  <button
                    key={index}
                    onClick={() => handleSortClick(data)}
                    className={`p-2 rounded-lg text-start ${
                      activeSort == data ? "bg-[#21C1F35F]" : ""
                    } `}
                  >
                    {data}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={toggleCategoriesDropdown}
              className="flex gap-2 items-center justify-center border border-[#013B4D3D] p-2 lg:p-3 rounded-lg"
            >
              <p>Categories</p>
              <img src={filterIcon} alt="filter" className="w-5 h-auto" />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                isCategoriesDropdownVisible
                  ? "max-h-[250px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="flex flex-col mt-2 border border-[#013B4D3D] rounded-lg p-3 overflow-y-scroll category-scroll max-h-[200px]">
                {uniqueTags.map((data, index) => (
                  <button
                    onClick={() => handleCategoryClick(data)}
                    key={index}
                    className={`${
                      activeCategory == data ? "bg-[#21C1F35F]" : ""
                    } p-2 rounded-lg text-start`}
                  >
                    <p>{data}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-between lg:px-12 py-6">
          <div className="flex gap-1 text-[16px] items-center">
            <img src={recentPosts} alt="" />
            <p>Recent Posts</p>
          </div>

          <div>
            <Link
              to={"/blogs"}
              className="flex gap-2 border rounded-lg p-2 lg:p-3 text-[14px] lg:text-[16px] transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <p>Read more</p>
              <img src={arrowDark} alt="" />
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-xl shadow shadow-lg overflow-hidden"
              >
                <div className="h-[250px] bg-gray-300 animate-pulse rounded-xl"></div>
                <div className="p-4">
                  <div className="h-3 bg-gray-300 animate-pulse mb-2 rounded-md"></div>
                  <div className="h-3 bg-gray-300 animate-pulse rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:px-12">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                post={post}
                formatDate={formatDate}
                tag={tags[post.id]}
              />
            ))}
          </div>
        )}
      </div>

      <NewsLetter />
    </div>
  );
};

export default BlogPage;
