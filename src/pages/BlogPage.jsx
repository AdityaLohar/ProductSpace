// src/pages/BlogListPage.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://productspaceorgin.wpcomstaging.com/wp-json/wp/v2/posts?_embed');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white font-hind">
        <div className='px-4 xl:px-60'>
            <div className='py-8 md:py-16 md:px-32 text-center space-y-4 md:space-y-8'>
                <h1 className='text-[28px] lg:text-[40px] font-sans font-bold'>Build a Stronger Foundation in Product Management</h1>
                <p className='text-[17px]'>Whether you&apos;re mastering the basics or advancing your skills, your go-to resource for delivering impactful products curated by product leaders.</p>
            </div>
        </div>

        <div className='relative bg-gray-200' style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/042/105/222/small_2x/inclusive-office-with-wheelchair-in-blurry-background-and-notebook-in-foreground-showing-marketing-report-workspace-offering-accessibility-for-workers-and-laptop-with-business-analytics-panning-shot-video.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black opacity-70"></div> {/* Black overlay with opacity */}
          
          <div className='relative text-center text-white space-y-8 py-16 px-4 md:px-40 xl:px-80'>
                <h1 className='text-[28px] lg:text-[40px] font-sans font-bold'>PM Hackathon</h1>
                <p className='text-[17px]'>Tired of theoretical concepts? Get hands-on with our live product management projects and experience firsthand what it&apos;s like to work as a PM in real-world scenarios.</p>
                <button className='bg-[#FEC923] text-[18px] text-black font-bold rounded-xl p-3 px-4 md:p-5 md:px-8'>Sign up now!</button>
            </div>
        </div>

        <div className='px-4 md:px-20 lg:px-32 xl:px-40 2xl:px-60 py-16 font-hind'>
  <div className='text-[24px] lg:text-[28px] font-bold font-sans'>
    <h1>Trending Posts</h1>
  </div>

  <div className='pt-3 pb-6'>
    <hr className="h-[2px] bg-gray-200" />
  </div>

  {loading ? (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="rounded-xl shadow shadow-lg overflow-hidden">
          <div className="h-[250px] bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="p-4">
            <div className="h-3 bg-gray-300 animate-pulse mb-2 rounded-md"></div>
            <div className="h-3 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
      {posts.map(post => (
        <div key={post.id} className="w-full rounded-xl shadow shadow-lg overflow-hidden">
          <Link to={`/blogs/${post.id}`}>
            <div className="">
              <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} className="w-full lg:h-[250px] object-cover rounded-t-xl" />
            </div>
            <div className="p-4">
              <h2 className="text-[18px] lg:text-[22px] font-bold mb-2">{post.title.rendered}</h2>
              <p className="text-[12px] lg:text-[17px] text-gray-600">{post.excerpt.rendered.replace(/<[^>]*>/g, '')}</p>
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