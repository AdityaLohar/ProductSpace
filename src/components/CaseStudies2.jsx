import { useState } from "react";
import { motion } from "framer-motion";
import netflix from "../assets/netflix-logo.jpg";
import primeVideo from "../assets/prime-video.svg";
import miro from "../assets/miro-logo.png";
import canva from "../assets/canva.svg";

const magicBricks =
  "https://apps.odoo.com/web/image/loempia.module/143981/icon_image?unique=d4b6f04";

const CaseStudies2 = () => {
  const [selectedBox, setSelectedBox] = useState(0);

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
    <div className="flex flex-col bg-[#F7F0FF] md:pt-8 md:pb-20 px-4 md:px-10 xl:px-20">
      <div className="py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans">
          Product Tear-down & Case Studies
        </div>
        <div className="text-[14px] lg:text-[16px] text-center text-gray-700 font-medium py-2">
          Dive into Case Studies that Drive Product Innovation
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="flex flex-nowrap gap-4 bg-gray-100 h-[45vh] w-[70vw] max-w-screen-xl items-center p-0">
                {boxes.map((box, index) => (
                    <motion.div
                        key={box.id}
                        className="text-white flex rounded-xl hover:cursor-pointer items-center shadow shadow-lg justify-center bg-black h-2/5 transition-all duration-300"
                        style={{
                            backgroundImage: `url(${box.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        whileHover={{
                            width: "50%",   // Box grows horizontally on hover
                            height: "70%",
                        }}
                        initial={{
                            width: "24%",   // Initial width of the box
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                    </motion.div>
                ))}
            </div>
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

export default CaseStudies2;