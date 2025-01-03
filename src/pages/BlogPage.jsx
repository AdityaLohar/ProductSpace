import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import he from "he";
import NewsLetter from "../components/NewsLetter";
import sortIcon from "../assets/sort.svg";
import spotlight from "../assets/spotlight.svg";
import trending from "../assets/trending.svg";
import filterIcon from "../assets/filter_alt.svg";
import recentPosts from "../assets/recent-posts.svg";
import arrowDark from "../assets/right-arrow-dark.svg";
import shareIcon from "../assets/share.svg";
import likeIcon from "../assets/like-outline.svg";
import likeFilledIcon from "../assets/like-filled-red.svg";
import bookmarkIcon from "../assets/bookmark-outline.svg";
import bookmarkFilledIcon from "../assets/bookmark-filled.svg";
import copyIcon from "../assets/copy.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import emailIcon from "../assets/email.svg";
import facebookIcon from "../assets/facebook.svg";
import bgBlue from "../assets/blue-bg.png";
import { Helmet } from "react-helmet-async";

let missingImg =
  "https://substackcdn.com/image/fetch/w_848,h_565,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcb250a4e-ba34-4f22-ade7-4b6babb20c05_1280x861.png";

const BlogCard = ({
  post,
  formatDate,
  tag,
  likes,
  bookmarks,
  toggleLike,
  likesStatus,
  toggleBookmark,
  bookmarkStatus,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const togglePopup = () => {
    setCopied(false);
    setIsOpen(!isOpen);
  };

  const currentUrl = `theproductspace.in/blogs/${post.slug}`;

  const handleShare = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "instagram":
        // Instagram doesn't allow direct sharing via URL; users have to share manually on their app
        alert("Please share this link manually on Instagram.");
        return;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        break;
      case "email":
        shareUrl = `mailto:?subject=Check this out&body=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  return (
    <div className="relative w-full rounded-xl p-4 border-2 border-[#E8E8EA] font-inter">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-2 lg:gap-12">
        <div className="flex flex-col py-4 gap-4 lg:gap-8 w-full lg:w-3/4">
          <Link to={`/blogs/${post.slug}`} className="flex flex-col gap-6">
            <h2
              className="text-[20px] lg:text-[28px] font-bold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h2>
            <p
              className="hidden lg:flex text-[18px] text-[#232E52]"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered.slice(0, 300) + "...",
              }}
            ></p>
            <p
              className="lg:hidden text-[18px] text-[#232E52]"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered.slice(0, 100) + "...",
              }}
            ></p>
          </Link>

          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center text-[13px]">
              <div className="flex flex-wrap lg:flex-row gap-3">
                {tag &&
                  tag.map((entry, index) => (
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
            
            <div className="flex justify-end gap-4">
              <button
                onClick={togglePopup}
                className="flex items-center gap-2 text-[16px] border border-[#013B4D3D] lg:border-0 py-3 px-5 lg:px-2 lg:py-0 rounded-xl justify-center"
              >
                <img src={shareIcon} alt="" />
              </button>

              {/* Popup for sharing options */}
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                  <div className="w-[80%] lg:w-[20%] bg-white border border-gray-300 shadow-lg rounded-lg py-4 z-30">
                    <div className="text-center font-semibold text-[20px] pb-6">
                      Share with friends
                    </div>

                    <div className="flex flex-col gap-2 px-4">
                      <button
                        onClick={() => handleShare("copy")}
                        className="flex items-center justify-start gap-5 pl-3 pb-2"
                      >
                        <img src={copyIcon} alt="Copy Link" />
                        <p>{copied ? "Link Copied" : "Copy Link"}</p>
                      </button>

                      <button
                        onClick={() => handleShare("facebook")}
                        className="flex items-center justify-start gap-2"
                      >
                        <img src={facebookIcon} alt="Facebook" />
                        <p>Share to Facebook</p>
                      </button>
                      <button
                        onClick={() => handleShare("email")}
                        className="flex items-center justify-start gap-2"
                      >
                        <img src={emailIcon} alt="Email" />
                        <p>Share via Email</p>
                      </button>

                      <button
                        onClick={() => handleShare("whatsapp")}
                        className="flex items-center justify-start gap-2"
                      >
                        <img src={whatsappIcon} alt="WhatsApp" />
                        <p>Share to WhatsApp</p>
                      </button>
                    </div>

                    <div className="mx-3">
                      <button
                        onClick={togglePopup}
                        className="w-full rounded-xl text-center p-3 bg-[#EEEEEF]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Link to={`/blogs/${post.slug}`} className="w-full lg:w-1/2 xl:w-1/4">
          <img
            src={post.jetpack_featured_media_url || missingImg}
            alt={post.title.rendered}
            className="w-full h-[200px] sm:h-[400px] lg:h-[250px] object-cover rounded-xl"
          />
        </Link>
      </div>
    </div>
  );
};

const BlogCardSmall = ({ post, formatDate, tag }) => {
  return (
    <div className="w-full overflow-hidden font-inter border-b border-[#24304C1A] py-6 lg:py-4">
      <Link to={`/blogs/${post.slug}`} className="flex lg:justify-between gap-4">
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

  const [postLikes, setPostLikes] = useState({});
  const [postBookmarks, setPostBookmarks] = useState({});

  const [likesStatus, setLikesStatus] = useState({}); // Stores like status per post
  const [bookmarkStatus, setBookmarkStatus] = useState({}); // Stores like status per post

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(0);

  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [activeSort, setActiveSort] = useState("Newest To Oldest");

  const isFetched = useRef(false);

  const [isSortDropdownVisible, setSortDropdownVisible] = useState(false);
  const [isCategoriesDropdownVisible, setCategoriesDropdownVisible] =
    useState(false);

  const sortList = [
    "Alphabetically",
    "Newest To Oldest",
    "Most Popular",
    "Featured Articles",
  ];

  const toggleSortDropdown = () => {
    setSortDropdownVisible(!isSortDropdownVisible);
    setCategoriesDropdownVisible(false); // Close other dropdown when this one is open
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdownVisible(!isCategoriesDropdownVisible);
    setSortDropdownVisible(false); // Close other dropdown when this one is open
  };

  // Function to handle like toggle
  const toggleLike = (postId) => {
    setLikesStatus((prevLikedPosts) => ({
      ...prevLikedPosts,
      [postId]: !prevLikedPosts[postId],
    }));

    setPostLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: prevLikes[postId] + (likesStatus[postId] ? -1 : 1),
    }));
  };

  const toggleBookmark = (postId) => {
    setBookmarkStatus((prevBookmarkStatus) => ({
      ...prevBookmarkStatus,
      [postId]: !prevBookmarkStatus[postId],
    }));

    setPostBookmarks((prevLikes) => ({
      ...prevLikes,
      [postId]: prevLikes[postId] + (bookmarkStatus[postId] ? -1 : 1),
    }));
  };

  useEffect(() => {
    if (isFetched.current) return;

    const fetchPosts = async () => {
      let page = 1;
      let allPosts = []; // Temporary array to collect all posts

      const initialLikes = {};
      const initialLikesStatus = {};

      const initialBookmarks = {};
      const initialBookmarkStatus = {};

      try {
        while (true) {
          const response = await fetch(
            `https://public-api.wordpress.com/wp/v2/sites/productspaceorgin.wordpress.com/posts?page=${page}`
          );

          if (!response.ok) {
            break;
          }

          const data = await response.json();
          if (data.length === 0) break;

          // Assign a random likes count to each post
          data.forEach((post) => {
            initialLikes[post.id] =
              Math.floor(Math.random() * (300 - 200 + 1)) + 200;

            initialBookmarks[post.id] =
              Math.floor(Math.random() * (300 - 200 + 1)) + 200;

            initialLikesStatus[post.id] = false;
            initialBookmarkStatus[post.id] = false;
          });

          page++;
          allPosts = [...allPosts, ...data]; // Add new posts to allPosts
        }

        setPosts(allPosts); // Update posts with collected data
        setFilteredPosts(allPosts); // Initialize filteredPosts once all posts are fetched
        setPostLikes(initialLikes);
        setPostBookmarks(initialBookmarks);
        setLikesStatus(initialLikesStatus);
        setBookmarkStatus(initialBookmarkStatus);

        setLoading(false);
        isFetched.current = true;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      // Depend on posts.length instead of loading
      const fetchTags = async () => {
        try {
          const tagsObject = {}; // Tags by post ID
          const uniqueTagsSet = new Set(); // Unique tags Set

          await Promise.all(
            posts.map(async (post) => {
              const response = await fetch(
                `https://public-api.wordpress.com/wp/v2/sites/productspaceorgin.wordpress.com/categories?post=${post.id}`
              );

              const data = await response.json();
              const tagData = data.map((entry) => he.decode(entry?.name)); // Get tag names

              tagsObject[post.id] = tagData; // Store tags by post ID
              tagData.forEach((tag) => uniqueTagsSet.add(tag)); // Add tags to unique Set
            })
          );

          setTags(tagsObject); // Update state with tags
          const sortedUniqueTags = Array.from(uniqueTagsSet).sort();
          setUniqueTags(["All Posts", ...sortedUniqueTags]);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchTags();
    }
  }, [posts]); // Depend on posts, ensuring tags load after posts are fully fetched

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

    handleCategoryClick(activeCategory);

    let sortedPosts = [...filteredPosts]; // Create a copy of filteredPosts to avoid direct mutation

    if (sortOption === "Alphabetically") {
      sortedPosts.sort((a, b) => {
        return a.title.rendered.localeCompare(b.title.rendered);
      });
    } else if (sortOption === "Newest To Oldest") {
      sortedPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date); // Sort by date in descending order (latest first)
      });
    } else if (sortOption === "Featured Articles") {
      // First, sort all posts by date added (newest first)
      sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Now take the top 5 posts based on likes from this sorted list
      const top5Featured = sortedPosts
        .slice(0, 5) // Get the top 5 most recent posts
        .sort((a, b) => (postLikes[b.id] || 0) - (postLikes[a.id] || 0)); // Sort them by likes

      sortedPosts = top5Featured;
    } else if (sortOption === "Most Popular") {
      sortedPosts.sort((a, b) => {
        const likesA = postLikes[a.id] || 0;
        const likesB = postLikes[b.id] || 0;
        const bookmarksA = bookmarkStatus[a.id] ? 1 : 0;
        const bookmarksB = bookmarkStatus[b.id] ? 1 : 0;

        return likesB + bookmarksB - (likesA + bookmarksA); // Sort by (likes + bookmarks)
      });
      sortedPosts = sortedPosts.slice(0, 5); // Take top 5 by popularity
    }

    setFilteredPosts(sortedPosts); // Update the state with the sorted array
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className="font-inter max-w-screen-2xl mx-auto space-y-4 lg:space-y-8 bg-white"
      style={{
        backgroundImage: `url(${bgBlue})`,
        backgroundSize: "contain", // Specify sizes for each background
        backgroundPosition: "top", // Specify positions for each background
        backgroundRepeat: "no-repeat", // Specify repeat behavior for each background
      }}
    >
      <Helmet>
        <title>Blogs Page - Product Space</title>
        <meta
          name="description"
          content="Join our Gen AI for PM Fellowship course and excel in your Product Management Career with practical AI skills and 1:1 mentorship from industry experts."
        />
        <link rel="canonical" href="https://theproductspace.in/blogs" />
      </Helmet>


      <div className="px-4 lg:px-28 pt-2 lg:pt-12">
        <div className="py-8 text-start md:text-center space-y-4">
          <h1 className="text-[28px] lg:text-[40px] font-sans font-bold">
          The Best Product Management Resources for You
          </h1>
          <p className="text-[17px]">
            Here is your go to resource curated by Product Leaders.
          </p>
        </div>
      </div>

      {!loading && (
        <div
          className="flex flex-col lg:flex-row gap-16 px-4 lg:px-28 flex items-start rounded-xl"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 5%, white 30%, white 60%, transparent 95%, transparent 100%)`,
          }}
        >
          <div className="flex flex-col gap-4 lg:gap-6 w-full">
            <div className="flex gap-2 items-center text-[20px] font-semibold">
              <img src={spotlight} alt="" />
              <p>Spotlight</p>
            </div>
            <Link to={`/blogs/${posts[0].slug}`}>
              <img
                src={posts[0].jetpack_featured_media_url || missingImg}
                alt={posts[0].title.rendered}
                className="w-full h-[200px] sm:h-[400px] lg:h-[400px] object-cover rounded-xl"
              />
            </Link>

            <Link
              to={`/blogs/${posts[0].slug}`}
              className="flex justify-between gap-12 text-[25px] lg:text-[25px] w-full font-bold"
            >
              <h2
                dangerouslySetInnerHTML={{
                  __html: posts[0].title.rendered,
                }}
                className="w-[80%]"
              />
            </Link>

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

              <div className="font-semibold bg-white">
                {formatDate(posts[0].date)}
              </div>
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
                likes={postLikes[post.id]}
                bookmarks={postBookmarks[post.id]}
                toggleLike={toggleLike}
                likesStatus={likesStatus}
                bookmarkStatus={bookmarkStatus}
                toggleBookmark={toggleBookmark}
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
