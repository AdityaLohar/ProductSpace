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
import Events from "./pages/Events";
import Event1 from "./pages/Event1";
import Blog1 from "./pages/singleBlogs/Blog1";
import Blog2 from "./pages/singleBlogs/Blog2";
import Blog3 from "./pages/singleBlogs/Blog3";
import Blog4 from "./pages/singleBlogs/Blog4";
import Blog5 from "./pages/singleBlogs/Blog5";
import Blog6 from "./pages/singleBlogs/Blog6";
import Blog7 from "./pages/singleBlogs/Blog7";
import Blog8 from "./pages/singleBlogs/Blog8";
import Blog9 from "./pages/singleBlogs/Blog9";
import Blog10 from "./pages/singleBlogs/Blog10";
import Blog11 from "./pages/singleBlogs/Blog11";
import Blog12 from "./pages/singleBlogs/Blog12";
import Blog13 from "./pages/singleBlogs/Blog13";
import Blog14 from "./pages/singleBlogs/Blog14";
import Blog15 from "./pages/singleBlogs/Blog15";
import Blog16 from "./pages/singleBlogs/Blog16";
import Blog17 from "./pages/singleBlogs/Blog17";
import Blog18 from "./pages/singleBlogs/Blog18";
import Blog19 from "./pages/singleBlogs/Blog19";
import Blog20 from "./pages/singleBlogs/Blog20";
import Blog21 from "./pages/singleBlogs/Blog21";
import Blog23 from "./pages/singleBlogs/Blog23";
import Blog22 from "./pages/singleBlogs/Blog22";
import GenAi from "./pages/GenAi";
import Blog24 from "./pages/singleBlogs/Blog24";
import Blog25 from "./pages/singleBlogs/Blog25";
import GenAiContactUsForm from "./components/GenAiContactUs";
import BlogP1 from "./pages/PrivateBlogs/BlogP1";
import BlogP2 from "./pages/PrivateBlogs/BlogP2";
import OfflineEvent from "./pages/OfflineEvent";
import ProductAnalytics from "./pages/ProductAnalytics";
import Blog26 from "./pages/singleBlogs/Blog26";
import Blog27 from "./pages/singleBlogs/Blog27";
import Blog28 from "./pages/singleBlogs/Blog28";
import DemoBlog from "./pages/singleBlogs/DemoBlog";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-5MF7F8L6PB", {
      page_path: location.pathname,
    });
  }, [location]);

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/pm-fellowship" ||
    location.pathname === "/pm-workshop";

  return (
    <RecoilRoot>
      <HelmetProvider>
        <Navbar />
        <ContactUsForm />
        <GenAiContactUsForm />
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pm-hackathon" element={<Events />} />
          <Route path="/ai-for-pm" element={<Event1 />} />
          <Route path="/product-meetups-offline" element={<OfflineEvent />} />
          <Route path="/gen-ai-for-pm" element={<GenAi />} />
          <Route path="/pm-workshop" element={<ProductAnalytics />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/pm-fellowship" element={<PmFellowship />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route
            path="/blogs/how-technical-product-manager-needs-to-be"
            element={<Blog1 />}
          />
          <Route
            path="/blogs/how-perplexity-is-challenging-googles-dominance"
            element={<Blog2 />}
          />
          <Route
            path="/blogs/what-are-prds-and-how-to-create-them"
            element={<Blog3 />}
          />
          <Route
            path="/blogs/north-star-metric-a-guide-for-product-managers"
            element={<Blog4 />}
          />
          <Route
            path="/blogs/what-is-lean-product-management-and-how-to-apply-it"
            element={<Blog5 />}
          />
          <Route
            path="/blogs/competitor-analysis-frameworks-to-master-for-product-managers"
            element={<Blog6 />}
          />
          <Route
            path="/blogs/the-ultimate-no-code-guide-for-product-managers"
            element={<Blog7 />}
          />
          <Route
            path="/blogs/7-ui-design-principles-a-product-manager-should-know"
            element={<Blog8 />}
          />
          <Route
            path="/blogs/5-whys-framework-for-product-managers"
            element={<Blog9 />}
          />
          <Route
            path="/blogs/your-ultimate-guide-to-crack-product-management-interviews"
            element={<Blog10 />}
          />
          <Route
            path="/blogs/ace-your-first-product-manager-interview"
            element={<Blog11 />}
          />
          <Route
            path="/blogs/linktree-a-billion-dollar-lesson-in-product-led-growth"
            element={<Blog12 />}
          />
          <Route
            path="/blogs/prototyping-for-product-managers"
            element={<Blog13 />}
          />
          <Route
            path="/blogs/how-slack-became-the-fastest-growing-b2b-saas-business"
            element={<Blog14 />}
          />
          <Route
            path="/blogs/the-beginners-guide-to-product-roadmaps"
            element={<Blog15 />}
          />
          <Route
            path="/blogs/how-to-conduct-effective-user-interviews"
            element={<Blog16 />}
          />
          <Route
            path="/blogs/data-storytelling-for-product-managers"
            element={<Blog17 />}
          />
          <Route
            path="/blogs/how-to-build-strong-product-sense-the-ultimate-guide-for-product-managers"
            element={<Blog18 />}
          />
          <Route
            path="/blogs/what-is-time-to-value-metric-how-to-measure-and-achieve-it"
            element={<Blog19 />}
          />
          <Route
            path="/blogs/design-thinking-for-product-managers"
            element={<Blog20 />}
          />
          <Route
            path="/blogs/jobs-to-be-done-framework-a-practical-guide-for-product-managers"
            element={<Blog21 />}
          />
          <Route
            path="/blogs/how-to-conduct-a-b-testing-in-product-management"
            element={<Blog22 />}
          />
          <Route
            path="/blogs/case-study-decoding-flipkarts-big-billion-days-strategy"
            element={<Blog23 />}
          />
          <Route
            path="/blogs/how-drones-industry-found-product-market-fit-in-india-a-case-study"
            element={<Blog24 />}
          />
          <Route
            path="/blogs/understanding-first-principles-of-product-management"
            element={<Blog25 />}
          />
          {/* <Route
            path="/blogs/ultimate-question-bank-of-product-management-interview-questions"
            element={<Blog26 />}
            /> */}
          <Route
            path="/blogs/what-is-technical-debt-and-how-to-handle-it-as-a-product-manager"
            element={<Blog27 />}
          />
          <Route
            path="/blogs/product-analytics-fundamentals-for-product-managers"
            // element={<Blog28 />}
            element={<DemoBlog />}
          />
          <Route
            path="/blogs/large-language-models-llms-a-guide-for-product-managers"
            element={<BlogP1 />}
          />
          <Route
            path="/blogs/genai-101-a-guide-for-product-managers"
            element={<BlogP2 />}
          />
          <Route path="*" element={<Navigate to="/" />} />{" "}
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
