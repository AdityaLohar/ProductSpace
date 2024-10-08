import { useState } from "react";
import netflix from "../assets/netflix-logo.jpg";
import primeVideo from "../assets/prime-video.svg";
import miro from "../assets/miro-logo.png";
import canva from "../assets/canva.svg";

const magicBricks =
  "https://apps.odoo.com/web/image/loempia.module/143981/icon_image?unique=d4b6f04";

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
    <div className="flex flex-col bg-white lg:pt-6 md:pb-16 px-4 md:px-10 xl:px-20">
      <div className="pb-8 lg:py-8">
        <div className="text-[24px] lg:text-[40px] font-bold text-center font-sans">
          Product Tear-down & Case Studies
        </div>
        <div className="text-[14px] lg:text-[16px] text-center text-gray-700 font-medium py-2">
          Dive into Case Studies that Drive Product Innovation
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-5 grid-rows-2 gap-4 lg:gap-7 w-full p-4 relative hover:cursor-pointer overflow-hidden">
        {/* First Box: Always shows the selected one */}
        <div
          key="selected"
          className="col-span-2 row-span-2 h-full w-full rounded-2xl shadow-[0px_4px_17px_rgba(0,0,0,0.4)] flex flex-col justify-between font-semibold bg-white overflow-hidden items-start"
          style={{
            backgroundImage: `url(${boxes[selectedBox]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            flexShrink: 0,
            boxSizing: "border-box",
            transition:
              "background-image 0.4s ease-in-out, opacity 0.4s ease-in-out",
          }}
        >
          <div className="m-2 p-1 px-2 bg-[#FFF1D4] rounded-2xl text-[12px] xl:text-sm w-contain">
            {boxes[selectedBox]?.title}
          </div>

          {/* Display additional content for the selected box */}
          <div
            className="w-full h-1/2 flex items-end justify-center"
            style={{
              opacity: 1,
              transition:
                "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            <a href={boxes[selectedBox]?.url} target="_blank">
              <div className="bg-[rgba(0,0,0,0.7)] border border-2 border-white rounded-2xl text-white p-3 m-3 font-hind space-y-4">
                <div className="text-[24px] md:text-[18px] xl:text-[24px] pr-4">
                  {boxes[selectedBox]?.desc}
                </div>
                <div className="text-[16px] md:text-[14px] xl:text-[16px] font-normal pr-4">
                  A sneak peek into what you will learn in our 10-week
                  curriculum.
                </div>
                <div className="flex justify-end">
                  <div className="text-[12px] md:text-[10px] xl:text-[12px] font-normal">
                    Published on: 25th May 24
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Other boxes */}
        {boxes.map((box, index) => {
          if (index === selectedBox) return null;

          return (
            <div
              key={index}
              onClick={() => {
                const newBoxes = [...boxes];
                [newBoxes[selectedBox], newBoxes[index]] = [
                  newBoxes[index],
                  newBoxes[selectedBox],
                ];
                setSelectedBox(index);
                
                window.open(boxes[index].url, '_blank', 'noopener, noreferrer');
              }}
              className="col-span-1 row-span-1 hover:shadow-[1px_5px_10px_rgba(0,0,0,0.4)] 
                custom-5:h-[170px] custom-5:w-[170px] 
                custom-6:h-[180px] custom-6:w-[180px] 
                custom-8:h-[200px] custom-8:w-[200px] 
                2xl:h-[245px] 2xl:w-[245px] 
                rounded-lg flex flex-col font-semibold bg-white 
                overflow-hidden items-start justify-end 
                transition-transform duration-300 ease-in-out 
                transform hover:scale-105"
              style={{
                backgroundImage: `url(${box.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                flexShrink: 0,
                boxSizing: "border-box",
                transition:
                  "transform 0.3s ease-in-out, background-image 0.5s ease-in-out, opacity 0.5s ease-in-out",
              }}
            >
              <div className="m-2 p-1 px-2 bg-[#FFF1D4] rounded-2xl text-[12px] xl:text-sm w-contain">
                {box.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="hidden lg:flex justify-center text-[16px] text-[#FF559E] font-semibold underline my-3 mt-6">
        <button>Check out more Case Studies</button>
      </div> */}

      <div className="lg:hidden">
        {/* Display the Selected Box */}
        {selectedBox !== null && (
          <div
            className="mx-auto w-full h-[300px] custom-1:h-[300px] custom-2:h-[450px] custom-3:h-[510px] custom-3:w-[520px] mb-4 bg-white rounded-2xl flex flex-col items-start justify-between overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${boxes[selectedBox].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <div className="bg-[#FFF1D4] rounded-2xl text-[10px] md:text-sm px-2 py-1 m-2">
                {boxes[selectedBox].title}
              </div>
            </div>
            <a href={boxes[selectedBox]?.url} target="_blank">
              <div className="bg-[rgba(0,0,0,0.7)] border border-2 border-white rounded-2xl text-white p-3 m-3 font-hind space-y-2">
                <div className="text-[20px] md:text-[24px] font-semibold pr-4">
                  Improving {boxes[selectedBox].title} Viewing Experience
                </div>
                <div className="text-[14px] md:text-[16px] font-normal pr-4">
                  A sneak peek into what you will learn in our 10-week curriculum.
                </div>
                <div className="flex justify-end">
                  <div className="text-[10px] md:text-[12px] font-normal">
                    Published on: 25th May 24
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Non-Selected Boxes */}
        <div className="flex overflow-x-auto space-x-3 py-2 pb-8 pl-2 items-center h-[150px]">
          {boxes.map((box, index) => (
            <div
              key={index}
              onClick={() => setSelectedBox(index)}
              className={`flex-shrink-0 transition-all duration-500 ease-in-out h-[100px] w-[100px] md:h-[120px] md:w-[120px] bg-white rounded-xl flex items-end justify-start ${
                index === selectedBox
                  ? "border-2 border-white h-[110px] w-[110px] scale-110 shadow-[0_6px_1px_rgba(0,0,0,0.7)]"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${box.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-[#FFF1D4] rounded-2xl text-[10px] md:text-[12px] px-2 py-1 m-2">
                {box.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="lg:hidden flex justify-center text-[16px] text-[#FF559E] font-semibold underline my-3 mt-12">
        <button>Check out more Case Studies</button>
      </div> */}
    </div>
  );
};

export default CaseStudies1;
