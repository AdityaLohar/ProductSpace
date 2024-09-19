// src/pages/BlogPostPage.js

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://productspaceorgin.wpcomstaging.com/wp-json/wp/v2/posts/${id}?_embed`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setPost(data);
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

  if (loading) {
    return (
      <div className="flex items-center bg-white justify-center h-[80vh]">
        <p className="text-xl font-semibold text-gray-500 animate-pulse">Loading...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="px-4 sm:px-20 lg:px-60 bg-white">
      {post && (
        <div className="max-w-3xl mx-auto py-6">
        {/* Render the post title */}
        <h1 className="text-[24px] lg:text-[36px] font-bold mb-4">{post.title.rendered}</h1>
  
        {/* Render the post content (headings, paragraphs, etc.) */}
        <div
          className="prose prose-lg text-[16px] lg:text-[18px] font-sans"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}  // This renders the HTML content including subheadings
        />
      </div>
      )}
    </div>
  );
};

export default Blog;