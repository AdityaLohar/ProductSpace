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
        // console.log(response.data);

        setId(response.data.pageData.content[0].id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getId();
  }, []);

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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsCommentOpen(true);
      } else {
        setIsCommentOpen(false);
      }
    };

    handleScroll();
    handleResize();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScrollLock = () => {
      const isSmallScreen = window.innerWidth < 1024; // Tailwind's "lg" breakpoint is 1024px
      if (isCommentOpen && isSmallScreen) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = ""; // Enable scrolling
      }
    };

    handleScrollLock();

    window.addEventListener("resize", handleScrollLock);

    return () => {
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [isCommentOpen]);

  const toggleCommentSidebar = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <div
      className={`relative flex flex-col gap-8 transition-all duration-700 ${
        isCommentOpen ? "lg:pl-20 lg:pr-[350px]" : "lg:pl-0 pr-0"
      }`}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://theproductspace.in/blogs/${slug}`}
        />
      </Helmet>

      {/* Full-screen Background Overlay */}
      {isCommentOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-30"
          onClick={() => setIsCommentOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="transition-all duration-500"
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
      <>
        {/* For smaller screens (below lg) */}
        <div
          className={`w-full flex lg:hidden justify-center font-inter fixed bottom-0 bg-white shadow-[0px_3px_6px_6px_rgba(0,0,0,0.1)] transition-opacity duration-1000 ${
            isCommentOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <button
            className="flex gap-1 h-[40px] items-center text-black px-2 py-6 rounded-lg"
            onClick={toggleCommentSidebar}
          >
            <img src={commentIcon} alt="comment icon" />
            <p>
              {totalComments || ""} {totalComments > 1 ? "comments" : "comment"}
            </p>
          </button>
        </div>
        <div className="hidden lg:flex font-inter fixed bottom-6 right-0 mr-7">
          <button
            className="flex gap-1 h-[40px] items-center text-black px-3 py-2 rounded-lg shadow-[0px_3px_6px_6px_rgba(0,0,0,0.1)] bg-white"
            onClick={toggleCommentSidebar}
          >
            <img src={commentIcon} alt="comment icon" />
            <p>
              {totalComments || ""} {totalComments > 1 ? "comments" : "comment"}
            </p>
          </button>
        </div>
      </>
      {/* )} */}
      {/* </div> */}

      <NewsLetter />
    </div>
  );
};

export default BlogStructure;
