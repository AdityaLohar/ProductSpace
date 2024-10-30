import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import he from "he";

const Blog = () => {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [canonicalUrl, setCanonicalUrl] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://public-api.wordpress.com/wp/v2/sites/productspaceorgin.wordpress.com/posts?slug=${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setPost(data[0]);
        // console.log(data[0])
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPost();

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!loading) {
      setCanonicalUrl(`https://aspareo.dcms.site/blogs/${post.slug}`);

      const fetchTags = async () => {
        try {
          // Fetch tags for the specific post using post.id
          const response = await fetch(
            `https://public-api.wordpress.com/wp/v2/sites/productspaceorgin.wordpress.com/categories?post=${post.id}`
          );
      
          const data = await response.json();
      
          // Extract tag names from the response (assuming it's an array)
          const tagData = data.map((entry) => he.decode(entry?.name)); // Get tag names
      
          // Update state with the tags for this specific post
          setTags(tagData);
      
        } catch (error) {
          console.error('Error fetching tags:', error);
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

  if (loading) {
    return (
      <div className="flex items-center bg-white justify-center h-[80vh]">
        <p className="text-xl font-semibold text-gray-500 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="px-4 flex flex-col items-center pt-4 lg:pt-16 pb-8 lg:pb-16 font-inter bg-white">
        {post && (
          <Helmet>
            <title>{post.title.rendered}</title>
            <meta name="description" content={post.excerpt.rendered} />
            <link rel="canonical" href={canonicalUrl} />
          </Helmet>
        )}

        {post && tags && (
          <div className="max-w-4xl w-full flex flex-col gap-8">
            {" "}
            {/* Adjust the max-width as needed */}
            <div className="flex flex-col gap-3">
              <h1
                className="text-[24px] lg:text-[36px] font-sans font-bold"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h1>

              <div className="text-[16px] text-[#667085]">
                {formatDate(post.date)}
              </div>

              <div className="flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg"
                  >
                    {tag}  {/* Render the tag content instead of "hello" */}
                  </p>
                ))}
              </div>

            </div>
            
            <div
              className="prose prose-lg text-[16px] lg:text-[18px] max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }} // This renders the HTML content including subheadings
            />
          
          </div>
        )}
      </div>

      <NewsLetter />
    </div>
  );
};

export default Blog;
