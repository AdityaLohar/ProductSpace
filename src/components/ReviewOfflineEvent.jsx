import comma from "../assets/inverted-comma.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import linkedinLogo from "../assets/linkedin-circle.svg";
import fullStar from "../assets/star.svg";
import halfStar from "../assets/star-half.svg";
import adityaPant from "../assets/aditya-pant.png";
import medhya from "../assets/medhya-budhwar.png";
import aryan from "../assets/aryan-jaiswal.png";
import mrigaj from "../assets/mrigaj.jpeg";
import jaydeep from "../assets/jaydeep.jpeg";
import adityaMandothia from "../assets/aditya-mandothia.jpeg";
import prashant from "../assets/prashant-kumar.jpeg";
import nishant from "../assets/nishant-sinha.jpeg";
import anshul from "../assets/anshul-agarwal.jpeg";

const StarRating = ({ rating }) => {
  // Ensure rating is a number and clamp it between 0 and 5
  const clampedRating = Math.min(5, Math.max(0, rating));

  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(clampedRating);
  const half = clampedRating - filledStars > 0;
  const emptyStars = 5 - filledStars - (half ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Render filled stars */}
      {[...Array(filledStars)].map((_, i) => (
        <img key={i} src={fullStar} className="h-5 w-5" />
      ))}
      {/* Render half star if applicable */}
      {half && <img key="half" src={halfStar} className="h-5 w-5" />}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStarRegular}
          className="text-gray-300"
        />
      ))}
    </div>
  );
};

const ReviewCardSmall = ({
  rating,
  title,
  desc,
  username,
  img,
  company,
  post,
  linkedin,
}) => {
  const [expand, setExpand] = useState(desc.length <= 340);

  return (
    <div className="text-[16px] w-[300px]">
      {" "}
      {/* Set width to 100vw */}
      <div className="flex flex-col relative gap-2 bg-white border border-2 border-transparent hover:border-[#C3C3C3] shadow-lg rounded-lg p-4 py-6">
        <div>
          <p>{expand ? desc : desc.slice(0, 340)}</p>
          <button
            onClick={() => setExpand(!expand)}
            className="text-blue-600 bg-none border-none cursor-pointer py-4"
          >
            {desc.length > 340 && (expand ? "Read less" : "Read more")}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-yellow-500">
            <StarRating rating={rating} />
          </div>
        </div>

        <div>
          <p className="font-bold">{username}</p>
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    rating: 5,
    username: "Sambit Kumar Das",
    desc: "Amazing experience, found it really helpful in connecting beautiful minds from Product domain.",
  },
  {
    rating: 5,
    username: "Neha",
    desc: "Awesome! I have been to couple of conferences and meetups before but this was unmatched. I was able to get answers to my specific questions and gained invaluable insights.",
  },
  {
    rating: 5,
    username: "Mitna",
    desc: "It was an amazing event and I got to know how enthusiastic PMs are out there with soo much energy and a great vibe.",
  },
  {
    rating: 5,
    username: "Poorva",
    desc: "It was amazing event. Got to learn a lot about fintech.",
  },
];

const ReviewOfflineEvent = () => {
  return (
    <div
      className="flex flex-col bg-[#F5F5F5] pb-5 pt-3 lg:pt-0"
      style={{
        background: "radial-gradient(circle, #00C1FD3A 30%, white 70%)",
      }}
    >
      <div className="py-5 lg:py-12">
        <div className="text-[20px] lg:text-[28px] font-semibold">
          Reviews from previous attendees
        </div>

        <div className="pm-reviews-scrollbar flex overflow-x-scroll gap-6 pt-8 pl-4 md:pl-8">
          {reviews.map((review, index) => (
            <div className="" key={index}>
              <ReviewCardSmall
                rating={review.rating}
                desc={review.desc}
                username={review.username}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewOfflineEvent;
