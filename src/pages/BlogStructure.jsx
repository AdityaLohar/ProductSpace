import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../components/NewsLetter";

const BlogStructure = ({ slug, title, description, content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* <div className="relative flex justify-between"> */}
      <div dangerouslySetInnerHTML={{ __html: content }} className="lg:px-24" />

      <NewsLetter />
    </div>
  );
};

export default BlogStructure;
