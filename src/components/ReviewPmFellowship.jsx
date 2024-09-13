import comma from "../assets/inverted-comma.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";

const StarRating = ({ rating }) => {
  // Ensure rating is a number and clamp it between 0 and 5
  const clampedRating = Math.min(5, Math.max(0, rating));

  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(clampedRating);
  const halfStar = clampedRating - filledStars > 0;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, i) => (
        <FontAwesomeIcon key={`filled-${i}`} icon={faStarSolid} className="text-yellow-500" />
      ))}
      {halfStar && (
        <FontAwesomeIcon icon={faStarSolid} className="text-yellow-500" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className="text-gray-300" />
      ))}
    </div>
  );
};

const ReviewCard = ({ rating, title, desc, username, img, company, post }) => {
  return (
    <div className="break-inside-avoid text-[16px]">
      <div className="flex flex-col relative gap-2 bg-white shadow shadow-lg rounded-lg p-4">
        <div>
          <img src={comma} alt="" />
        </div>
        <div className="text-yellow-500">
          <StarRating rating={rating} />
        </div>
        <div className="font-bold">{title}</div>
        <div className="">{desc}</div>
        
        <div className="absolute bottom-[-18px] left-[45%]">
          <img src={img} alt="" className="w-10 h-10 rounded-full border border-[3px] border-white" />
        </div>
      </div>

      <div className="flex flex-col items-center pt-6 pb-8">
        <div className="text-center">
          <p className="text-[14px]">
            {post} at {company}
          </p>
          <p className="font-bold">{username}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewCardSmall = ({ rating, title, desc, username, img, company, post }) => {
  const [expand, setExpand] = useState(desc.length <= 340);

  return (
    <div className="text-[16px] w-[80vw] md:w-[50vw]"> {/* Set width to 100vw */}
      <div className="flex flex-col relative gap-2 bg-white shadow-lg rounded-lg p-4 py-6 border border-1 border-[rgba(0,0,0,0)] hover:border-[#00B5CE]">
        <div>
          <img src={comma} alt="" />
        </div>
        <div className="text-yellow-500">
          <StarRating rating={rating} />
        </div>
        <div className="font-bold">{title}</div>
        <div>
          <p>
            {expand ? (desc) : (desc.slice(0, 340))}
          </p>
          <button 
            onClick={() => setExpand(!expand)} 
            className="text-blue-600 bg-none border-none cursor-pointer py-4"
          >
            {desc.length > 340 && (expand ? "Read less" : "Read more")}
          </button>
        </div>
        <div className="absolute bottom-[-18px] left-[45%]">
          <img src={img} alt="" className="w-10 h-10 rounded-full border border-[3px] border-white" />
        </div>
      </div>

      <div className="flex flex-col items-center pt-6 pb-6">
        <div className="text-center">
          <p className="text-[14px]">
            {post} at {company}
          </p>
          <p className="font-bold">{username}</p>
        </div>
      </div>
    </div>
  );
};


const reviews = [
  {
    rating: 5,
    title: "Excellent Service",
    desc: "I had an amazing experience with this service. The support team was incredibly helpful and responsive. Highly recommend to anyone looking for top-notch service.",
    username: "John Doe",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    company: "Tech Corp",
    post: "Software Engineer",
  },
  {
    rating: 4,
    title: "Great Quality",
    desc: "Product Space completely shifted my perspective about my career. The conversations with my coach inspired new ways of thinking and gave me the confidence to dream big.",
    username: "Jane Smith",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    company: "Creative Labs",
    post: "Product Designer",
  },
  {
    rating: 3.5,
    title: "Amazing Experience",
    desc: "A couple of years into my first job, I knew product management was the right fit for me. This program helped solidify that decision and gave me the tools I needed to succeed.",
    username: "Bob Brown",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    company: "FinTech",
    post: "Analyst",
  },
  {
    rating: 3,
    title: "Good Support",
    desc: "Decent service, but there’s room for improvement. The support was helpful, but I had some issues with response times.",
    username: "Alice Johnson",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    company: "XYZ Corp",
    post: "Consultant",
  },
  {
    rating: 5,
    title: "Highly Recommend",
    desc: "Would definitely recommend to friends! The experience was exceptional and provided great value for the money. Product Space completely shifted my perspective about my career. The conversations with my coach inspired new ways of thinking and gave me the confidence to dream big. Product Space completely shifted my perspective about my career. The conversations with my coach inspired new ways of thinking and gave me the confidence to dream big. Product Space completely shifted my perspective about my career. The conversations with my coach inspired new ways of thinking and gave me the confidence to dream big.",
    username: "Charlie Lee",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    company: "Media House",
    post: "Content Writer",
  },
  {
    rating: 4,
    title: "Very Satisfied",
    desc: "I'm happy with the service provided. The program was comprehensive and offered great insights into the industry.",
    username: "David Green",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    company: "StartUp",
    post: "Founder",
  },
  {
    rating: 5,
    title: "Transformative Experience",
    desc: "This program was a game-changer for me. It not only improved my skills but also boosted my confidence in my career path. Product Space completely shifted my perspective about my career. The conversations with my coach inspired new ways of thinking and gave me the confidence to dream big. Product Space completely shifted my perspective about my career. The conversations with my coach inspired new ways of thinking and gave me the confidence to dream big.",
    username: "Emma White",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    company: "Innovate Inc.",
    post: "Marketing Manager",
  },
  {
    rating: 2,
    title: "Needs Improvement",
    desc: "The program did not meet my expectations. While some aspects were useful, overall it felt lacking in depth and support.",
    username: "Oliver Black",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    company: "Business Solutions",
    post: "Sales Executive",
  },
  {
    rating: 5,
    title: "Fantastic Journey",
    desc: "The journey through this program was fantastic. It provided me with valuable skills and insights that have been beneficial in my career.",
    username: "Sophia Green",
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    company: "Tech Innovations",
    post: "Product Manager",
  }
];


const ReviewPmFellowship = () => {
  return (
    <div className="flex flex-col bg-[#D7F5FF] pb-10 pt-4 lg:pt-0 px-4 md:px-10 xl:px-32">
      <div className="py-5 lg:py-12">
        <div className="text-[16px] text-[#00B5CE] text-center md:text-start  font-medium px-4">
          <p>Product Space Reviews </p>
        </div>
        <div className="text-[28px] lg:text-[40px] font-bold px-2 text-center md:text-start font-sans px-4">
          We have placed 300+ students like you
        </div>
        
        <div className="hidden lg:block lg:columns-3 gap-6 space-y-6 pt-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              rating={review.rating}
              title={review.title}
              desc={review.desc}
              username={review.username}
              img={review.img}
              company={review.company}
              post={review.post}
            />
          ))}
        </div>

        <div className="pm-reviews-scrollbar flex overflow-x-scroll lg:hidden gap-6 pt-8">
          {reviews.map((review, index) => (
            <div className="min-w-[80vw] md:min-w-[50vw]" key={index}>
              <ReviewCardSmall
                rating={review.rating}
                title={review.title}
                desc={review.desc}
                username={review.username}
                img={review.img}
                company={review.company}
                post={review.post}
              />
            </div>
          ))}
        </div>


          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex justify-center text-[16px] font-semibold text-[#FF559E] underline my-3 w-fit">
              <button>Load More Success Stories</button>
          </div>
            <div className="flex justify-center text-[18px] font-semibold text-black bg-[#FEC923] w-fit px-12 py-3 rounded-full">
              <button>Submit Your Review</button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default ReviewPmFellowship;
