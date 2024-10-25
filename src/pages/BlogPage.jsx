// src/pages/BlogListPage.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let missingImg =
  "https://substackcdn.com/image/fetch/w_848,h_565,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcb250a4e-ba34-4f22-ade7-4b6babb20c05_1280x861.png";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      let page = 1;
      setPosts([]);

      while(true) {
        try {
          const response = await fetch(
            `https://public-api.wordpress.com/wp/v2/sites/productspaceorgin.wordpress.com/posts?page=${page}`
          );
  
          if (!response.ok) {
            break;
          }
          const data = await response.json();
          setPosts((prevPosts) => [...prevPosts, ...data]);
          setLoading(false);
          
          page++;

        } catch (error) {
          setError(error);
          setLoading(false);
          break;
        }
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white font-hind">
      <div className="px-4 xl:px-60">
        <div className="py-8 md:py-16 md:px-32 text-center space-y-4 md:space-y-8">
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

      <div className="px-4 md:px-20 lg:px-32 xl:px-40 2xl:px-60 py-16 font-hind">
        <div className="text-[24px] lg:text-[28px] font-bold font-sans">
          <h1>Blog Posts</h1>
        </div>

        <div className="pt-3 pb-6">
          <hr className="h-[2px] bg-gray-200" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="w-full rounded-xl shadow shadow-lg overflow-hidden"
              >
                <Link to={`/blogs/${post.slug}`}>
                  <div className="">
                    <img
                      src={post.jetpack_featured_media_url || missingImg}
                      alt={post.title.rendered}
                      className="w-full lg:h-[250px] object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-4">
                    <h2
                      className="text-[18px] lg:text-[22px] font-bold mb-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></h2>
                    <p
                      className="text-[12px] lg:text-[17px] text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered.slice(0,120) + ". . .",
                      }}
                    ></p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
