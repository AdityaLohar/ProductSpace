import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../../components/NewsLetter";

const DemoBlog = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCommentSidebar = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <div className="relative">
      <Helmet>
        <title>How technical a Product Manager needs to be?</title>
        <meta
          name="description"
          content="How technical does a product manager need to be? Discover the right balance of technical skills required to excel in product management and work effectively with engineering teams."
        />
        <link
          rel="canonical"
          href="https://theproductspace.in/blogs/how-technical-product-manager-needs-to-be"
        />
      </Helmet>

      <div className="p-4">
        {/* Blog Content */}
        <h1 className="text-3xl font-bold">
          How technical a Product Manager needs to be?
        </h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          sapien eget odio tristique consequat...
        </p>
        <NewsLetter />
      </div>

      {/* Comment Section */}
      <div
        className={`absolute top-0 right-0 h-full bg-gray-100 shadow-lg z-50 transition-transform duration-300 ${
          isCommentOpen ? "translate-x-0 w-64" : "translate-x-full w-0"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleCommentSidebar}
          className="absolute top-4 left-[-2.5rem] bg-blue-600 text-white rounded-full p-2 shadow-md focus:outline-none"
        >
          💬
        </button>

        {/* Comments Content */}
        {isCommentOpen && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Comments</h2>
            <div className="space-y-2">
              <p className="bg-white p-2 rounded shadow">
                This is a great blog!
              </p>
              <p className="bg-white p-2 rounded shadow">Very informative.</p>
              {/* Add a comment input */}
              <input
                type="text"
                placeholder="Add a comment..."
                className="mt-4 w-full p-2 border rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoBlog;
