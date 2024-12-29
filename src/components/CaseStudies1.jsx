import { useState } from "react";
import miro from "../assets/miro-logo.png";
import shareIcon from "../assets/share.svg";
import arrowIcon from "../assets/right-arrow-dark.svg";
import ShareOptions from "../components/ShareOptions";

const magicBricks =
  "https://apps.odoo.com/web/image/loempia.module/143981/icon_image?unique=d4b6f04";

const Card = ({ image, desc, url, tags }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleSharePopup = () => {
    setCopied(false);
    setIsShareOpen(!isShareOpen);
  };

  const currentUrl = url;

  const handleShare = (platform) => {
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "instagram":
        // Instagram doesn't allow direct sharing via URL; users have to share manually on their app
        alert("Please share this link manually on Instagram.");
        return;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=${encodeURIComponent("Check this out!")}`;
        break;
      case "slack":
        url = `https://slack.com/intl/en-in/share?text=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        return;
      case "email":
        url = `mailto:?subject=Check this out&body=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      default:
        alert("Unsupported platform.");
        return;
    }

    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex flex-col gap-5 min-w-[345px] lg:min-w-[446px]">
      <div className="relative shadow-md rounded-2xl">
        <img
          src={image}
          alt="case-study"
          className=" rounded-2xl w-full h-[334px] lg:h-[438px]"
        />

        <a
          href={url}
          target="_blank"
          className="flex gap-1 bg-white rounded-lg text-black text-[10px] items-center absolute bottom-4 right-4 p-2"
        >
          <p>Read more</p>
          <img src={arrowIcon} alt="" className="h-3" />
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start text-[18px] font-semibold">
          <div>{desc}</div>
          <a href={url} target="_blank">
            <img src={arrowIcon} alt="btn" className="h-4" />
          </a>
        </div>

        <div className="text-[12px] text-[#667085]">
          A sneak peek into what you will learn in our 10-week curriculum.
        </div>

        <div className="flex justify-between items-start">
          <div className="flex gap-2 text-[9px]">
            <div className="bg-[#E7F7FC] border border-[#013B4D3D] p-1 rounded-md">
              Prototype Testing
            </div>
            <div className="bg-[#E7F7FC] border border-[#013B4D3D] p-1 rounded-md">
              News
            </div>
          </div>

          <button
            className="bg-[#FCFCFC] rounded-md p-1"
            onClick={toggleSharePopup}
          >
            <img src={shareIcon} alt="share" className="h-4" />
          </button>
        </div>
      </div>

      {isShareOpen && (
        <ShareOptions
          handleShare={handleShare}
          toggleSharePopup={toggleSharePopup}
          copied={copied}
        />
      )}
    </div>
  );
};

const CaseStudies1 = () => {
  const [selectedBox, setSelectedBox] = useState(0); // Change to null initially

  const boxes = [
    {
      id: 1,
      title: "Amazon Prime",
      image:
        "https://i.pinimg.com/736x/c5/77/34/c577341955150f3ec00e999d69f21851.jpg",
      desc: "Improving Amazon Prime Viewing Experience",
      url: "https://pitch.com/public/ccb8b2d8-642c-4563-9abd-f8a48285b25b/143ca6f4-1750-4744-b325-57d899174ad5 ",
    },
    {
      id: 2,
      title: "MagicBricks",
      image: magicBricks,
      desc: "Improving MagicBricks Viewing Experience",
      url: "https://pitch.com/v/magicbricks-gigy4i",
    },
    {
      id: 3,
      title: "Miro",
      image: miro,
      desc: "Improving Miro Viewing Experience",
      url: "https://www.canva.com/design/DAF2UQKOlDM/swJsZRgnzolKZKLpe0ehFQ/edit#20",
    },
    {
      id: 4,
      title: "Choice Connect",
      image:
        "https://content.jdmagicbox.com/v2/comp/mumbai/b3/022pxx22.xx22.190312091956.y7b3/catalogue/choice-connect-andheri-east-mumbai-swnlzhd4zt.jpg",
      desc: "Improving post registration sign-in-rate of Choice Connect App",
      url: "https://www.canva.com/design/DAFwZ6hl2l8/3GWwC_zwMWc4vpUHICYsVA/edit",
    },
    {
      id: 5,
      title: "Spring Money",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CPJaorfvXDYCYzcDnWFbI65Chmwcbx5gQg&s",
      desc: "Design loan assist tool for SpringMoney",
      url: "https://pitch.com/v/welcome-to-pitch-asepfu",
    },
    {
      id: 6,
      title: "Zerodha",
      image: "https://logowik.com/content/uploads/images/zerodha6662.jpg",
      desc: "How can Zerodha attract new user segments, such as first-time investors or those with smaller investment portfolios?",
      url: "https://road-frown-76d.notion.site/Zerodha-d69c79aefe6142f686391b65a6855f3c",
    },
    {
      id: 7,
      title: "Meesho",
      image:
        "https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg?impolicy=website&width=1600&height=900",
      desc: "Improve user experience on Meesho to increase the order volume by 15% in 2 months",
      url: "https://www.canva.com/design/DAF87cmuzWk/SSCUOthx5U4Ja4lMu23-jQ/view?utm_content=DAF87cmuzWk&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
    },
  ];

  return (
    <div className="flex flex-col gap-6 lg:gap-12 font-inter pt-16 pb-12 lg:pt-20 lg:pb-16 px-4 md:px-10 xl:px-20">
      <div className="flex flex-col gap-2">
        <div className="text-[20px] lg:text-[40px] font-bold text-[#1D1F3D]">
          Student case studies
        </div>
        <div className="text-[14px] lg:text-[24px] text-[#A3A7B6] w-full xl:w-1/2">
          Explore the innovative AI projects our students have crafted,
          showcasing their creativity and technical skills.
        </div>
      </div>

      <div className="flex gap-8 overflow-x-scroll mentor-scrollbar">
        {boxes.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            desc={item.desc}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies1;
