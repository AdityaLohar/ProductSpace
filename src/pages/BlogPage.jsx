// src/pages/BlogListPage.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";

const BlogCard = ({ post, formatDate }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden p-4 border border-[#E8E8EA] font-inter">
      <Link to={`/blogs/${post.slug}`} className="flex flex-col gap-4">
        <div className="">
          <img
            src={post.jetpack_featured_media_url}
            alt={post.title.rendered}
            className="w-full lg:h-[250px] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col py-4 gap-4 pr-6 h-1/2 md:mb-4 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h2
              className="text-[20px] lg:text-[24px] font-bold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h2>
            <p
              className="text-[16px] text-[#667085]"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></p>
          </div>
          <div className="text-[16px] text-[#667085]">{formatDate(post.date)}</div>
        </div>
      </Link>
    </div>
  );
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setPosts(data);
        setLoading(false);

        console.log(data);
        console.log(posts[0].date);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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

  return (
    <div className="bg-white font-inter max-w-screen-2xl mx-auto space-y-4 lg:space-y-8">
      <div className="px-4 xl:px-60">
        <div className="py-8 md:pb-16 md:px-20 text-center space-y-4 md:space-y-8">
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
        <div
          className="relative px-2 mx-4 xl:mx-28 custom-12:mx-0 h-[450px] bg-no-repeat bg-cover flex items-end rounded-xl"
          style={{
            backgroundImage: `url(${posts[0].jetpack_featured_media_url})`,
          }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <div className="z-10 relative text-white flex flex-col gap-4 py-6 lg:py-12 px-2 lg:px-6">
            <div className="text-[14px] font-medium flex">
              <a href={`/blogs/${posts[0].slug}`} target="_blank" className="bg-[#21C1F3] p-2 rounded-lg">Latest Post</a>
            </div>

            <div className="text-[24px] lg:text-[36px] w-full lg:w-2/3 font-bold">
              <h2
                dangerouslySetInnerHTML={{
                  __html: posts[0].title.rendered,
                }}
              />
            </div>

            <div className="text-[16px]">{formatDate(posts[0].date)}</div>
          </div>
        </div>
      )}

      <div className="px-4 lg:px-28 custom-12:px-0 py-16 font-hind">
        <div className="text-[24px] lg:text-[28px] font-bold font-sans pb-12">
          <h1>All Posts</h1>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} formatDate={formatDate} />
            ))}
          </div>
        )}
      </div>

      <NewsLetter />
    </div>
  );
};

export default BlogPage;
