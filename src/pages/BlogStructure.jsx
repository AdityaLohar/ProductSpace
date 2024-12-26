import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../components/NewsLetter";
import CommentSection from "../components/CommentSection";
import axios from "axios";
import commentIcon from "../assets/comment.svg";
import { useRecoilValue } from "recoil";
import { totalCommentsAtom } from "../atoms/modalState";

const BlogStructure = ({ slug, title, description, content }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(true);
  const totalComments = useRecoilValue(totalCommentsAtom);
  const [topbar, setShowTopbar] = useState(true);
  const [id, setId] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const getId = async () => {
      try {
        const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
        const url = `${PRODUCT_SPACE_API_HOST}/v1/blog/search?title=${slug}&isPaged=false&page=0&size=1&sort=ASC&matchingAny=true`;

        const response = await axios.get(url);
        console.log(response.data);

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

      const buffer = 20;

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
    <div className="relative flex flex-col gap-8">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://theproductspace.in/blogs/${slug}`}
        />
      </Helmet>

      {/* Main content */}
      <div className="relative flex justify-between">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="lg:px-24"
        />

        {/* Comment Section */}
        {id && (
          <div>
            <CommentSection
              id={id}
              title={title}
              isCommentOpen={isCommentOpen}
              toggleCommentSidebar={toggleCommentSidebar}
              topbar={topbar}
            />
          </div>
        )}

        {/* Button */}
        {!isCommentOpen && (
          <>
            {/* For smaller screens (below lg) */}
            <div className="font-inter fixed bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                className="flex gap-1 h-[40px] items-center text-black px-2 py-2 rounded-lg shadow-xl bg-white"
                onClick={toggleCommentSidebar}
              >
                <img src={commentIcon} alt="comment icon" />
                <p>{totalComments} comments</p>
              </button>
            </div>
          </>
        )}
      </div>

      <NewsLetter />
    </div>
  );
};

export default BlogStructure;
