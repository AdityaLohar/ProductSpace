import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "@fontsource/montserrat";
import "@fontsource/hind-madurai";
import PmFellowship from "./pages/PmFellowship";
import FaqPage from "./pages/FaqPage";
import { useEffect } from "react";
import BlogPage from "./pages/BlogPage";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import ContactUsForm from "./components/ContactUsForm";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import Events from './pages/Events';
import Event1 from "./pages/Event1";
import Blog1 from "./pages/singleBlogs/Blog1";
import Blog2 from "./pages/singleBlogs/Blog2";
import Blog3 from "./pages/singleBlogs/Blog3";
import Blog4 from "./pages/singleBlogs/Blog4";
import Blog5 from "./pages/singleBlogs/Blog5";
import Blog6 from "./pages/singleBlogs/Blog6";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-5MF7F8L6PB", {
      page_path: location.pathname,
    });
  }, [location]);

  const isHomePage =
    location.pathname === "/" || location.pathname === "/pm-fellowship";

  return (
    <RecoilRoot>
      <HelmetProvider>
        <Navbar />
        <ContactUsForm />
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pm-hackathon" element={<Events />} />
          <Route path="/ai-for-pm" element={<Event1 />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/pm-fellowship" element={<PmFellowship />} />

          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<Blog />} />

          <Route path="/blogs/how-technical-product-manager-needs-to-be" element={<Blog1 />} />
          <Route path="/blogs/how-perplexity-is-challenging-googles-dominance" element={<Blog2 />} />
          <Route path="/blogs/what-are-prds-and-how-to-create-them" element={<Blog3 />} />
          <Route path="/blogs/north-star-metric-a-guide-for-product-managers" element={<Blog4 />} />
          <Route path="/blogs/what-is-lean-product-management-and-how-to-apply-it" element={<Blog5 />} />
          <Route path="/blogs/competitor-analysis-frameworks-to-master-for-product-managers" element={<Blog6 />} />

          <Route path="*" element={<Navigate to="/" />} />    {/* all routes not present will redirect to home route */}
        </Routes>
        {/* </Router> */}
        <div className={`w-full bg-black ${isHomePage ? "pb-6 lg:pb-16" : ""}`}>
          <Footer />
        </div>
      </HelmetProvider>
    </RecoilRoot>
    // strata scratch
  );
}

export default App;
