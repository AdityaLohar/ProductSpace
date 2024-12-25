import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../components/NewsLetter";
import CommentSection from "../components/CommentSection";
import axios from "axios";

const BlogStructure = ({ slug, title, description, content }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(true);
  const [topbar, setShowTopbar] = useState(true);
  const [id, setId] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const getId = async () => {
      try {
        // Encode the title to handle spaces and special characters
        // const encodedTitle = encodeURIComponent(title);

        // Construct the URL with the encoded title
        const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
        const url = `${PRODUCT_SPACE_API_HOST}/v1/blog/search?title=${slug}&isPaged=false&page=0&size=1&sort=ASC&matchingAny=true`;

        // Make the API call using axios
        const response = await axios.get(url);
        console.log(response.data);

        // Assuming the response contains an `id` field
        setId(response.data.pageData.content[0].id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getId();
  }, []);

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      const buffer = 20; // Adjust the buffer size if needed

      if (scrollPosition < screenHeight - buffer) {
        setShowTopbar(true);
      } else if (scrollPosition > screenHeight + buffer) {
        setShowTopbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCommentSidebar = () => {
    setIsCommentOpen(isCommentOpen);
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://theproductspace.in/blogs/${slug}`}
        />
      </Helmet>

      <div className="flex flex-col lg:flex-row relative justify-between">
        <div className="flex-1">
          {/* Blogs */}
          <div dangerouslySetInnerHTML={{ __html: content }} />

        </div>

        <div className={`w-full lg:w-[340px] ${id ? "mt-8 md:mt-0" : ""}`}>
          {/* Comment Section */}
          {id && (
            <div
              className={`${
                topbar ? "md:sticky md:top-[96px]" : "md:sticky md:top-[64px]"
              } h-[calc(100vh-2rem)] md:overflow-y-hidden`}
            >
              <CommentSection
                id={id}
                title={title}
                isCommentOpen={isCommentOpen}
                toggleCommentSidebar={toggleCommentSidebar}
                topbar={topbar}
              />
            </div>
          )}
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default BlogStructure;
