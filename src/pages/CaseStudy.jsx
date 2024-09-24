import { motion } from "framer-motion";

import netflix from "../assets/netflix-logo.jpg";
import primeVideo from "../assets/prime-video.svg";
import miro from "../assets/miro-logo.png";
import canva from "../assets/canva.svg";
const magicBricks = "https://apps.odoo.com/web/image/loempia.module/143981/icon_image?unique=d4b6f04";

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

const CaseStudy = () => {

//   return (
//     <div
//       className="bg-gray-100 h-screen gap-2"
//       style={{
//         display: "grid",
//         placeContent: "center",
//       }}
//     >
//       <motion.button className="bg-blue-400 text-black p-4 rounded-lg" layout
//         whileHover={{
//             scale: 1.1,
//         }}
//       >
//         Click
//       </motion.button>

//       <motion.div
//         whileHover={{
//             scale: 0.5,
//         }}
//         className="bg-black"
//         initial={{
//           rotate: "0deg",
//           scale: 0,
//         }}
//         animate={{
//           rotate: "180deg",
//           scale: 1,
//           y: [0, -150, 150, 150, 0]
//         }}
//         transition={{
//           duration: 1,
//           ease: "backInOut",
//           times: [0, 0.2, 0.4, 0.7, 1]
//         }}
//         style={{
//           height: "200px",
//           width: "200px",
//         }}
//       ></motion.div>
//     </div>
//   );

    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <div className="flex flex-nowrap gap-4 bg-gray-100 h-[50vh] w-[70vw] items-center p-4">
                {boxes.map((box, index) => (
                    <motion.div
                        key={box.id}
                        className="text-white flex rounded-xl hover:cursor-pointer items-center shadow shadow-lg justify-center bg-black h-2/5 w-[15%] transition-all duration-300"
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
    )
};

export default CaseStudy;
