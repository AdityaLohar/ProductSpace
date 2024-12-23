import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../components/NewsLetter";
import CommentSection from "../components/CommentSection";

const BlogStructure = ({ id, slug, title, description, content }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [topbar, setShowTopbar] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <div className="relative">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://theproductspace.in/blogs/${slug}`}
        />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: content }} />

      <NewsLetter />

      {/* Comment Section */}
      <CommentSection
        id={2}
        title={title}
        isCommentOpen={isCommentOpen}
        toggleCommentSidebar={toggleCommentSidebar}
        topbar={topbar}
      />
    </div>
  );
};

export default BlogStructure;
