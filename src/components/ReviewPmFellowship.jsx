import comma from "../assets/inverted-comma.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import linkedinLogo from "../assets/linkedin-circle.svg";
import fullStar from "../assets/star.svg";
import halfStar from "../assets/star-half.svg";


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
      {half && (
        <img key="half" src={halfStar} className="h-5 w-5" />
      )}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className="text-gray-300" />
      ))}
    </div>
  );
};

const ReviewCard = ({ rating, title, desc, username, img, company, post, linkedin }) => {
  return (
    <div className="break-inside-avoid text-[16px]">
      <div className="flex flex-col relative gap-2 bg-white hover:cursor-default border border-2 border-transparent hover:border-[#C3C3C3] shadow shadow-lg rounded-lg p-4">
        
        <div className="flex items-center justify-between">
          <div>
            <div>
              <img src={comma} alt="" />
            </div>
            <div className="text-yellow-500">
              <StarRating rating={rating} />
            </div>
          </div>

          <a href={linkedin} target="_blank">
            <img src={linkedinLogo} alt="linkedin-profile" className="h-6 w-6 hover:cursor-pointer" />
          </a>
        </div>

        <div className="font-bold">{title}</div>
        <div className="pb-6">{desc}</div>
        
        <div className="absolute bottom-[-36px] left-[40%]">
          <img src={img} alt="" className="w-[72px] h-[72px] rounded-full border border-[3px] border-white" />
        </div>
      </div>

      <div className="flex flex-col items-center pt-10 pb-8">
        <div className="text-center">
          <p className="text-[16px]">
            {post} at {company}
          </p>
          <p className="font-bold">{username}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewCardSmall = ({ rating, title, desc, username, img, company, post, linkedin }) => {
  const [expand, setExpand] = useState(desc.length <= 340);

  return (
    <div className="text-[16px] w-[80vw] md:w-[50vw]"> {/* Set width to 100vw */}
      <div className="flex flex-col relative gap-2 bg-white border border-2 border-transparent hover:border-[#C3C3C3] shadow-lg rounded-lg p-4 py-6">
      <div className="flex items-center justify-between">
          <div>
            <div>
              <img src={comma} alt="" />
            </div>
            <div className="text-yellow-500">
              <StarRating rating={rating} />
            </div>
          </div>

          <a href={linkedin} target="_blank">
            <img src={linkedinLogo} alt="linkedin-profile" className="h-6 w-6 hover:cursor-pointer" />
          </a>
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
        <div className="absolute bottom-[-25px] left-[43%]">
          <img src={img} alt="" className="w-14 h-14 rounded-full border border-[3px] border-white" />
        </div>
      </div>

      <div className="flex flex-col items-center pt-8 pb-6">
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
    title: "You HAVE to do this. The insights are 🔥",
    desc: "Thank you, Product Space and mentor Akhil Yash Tiwari, for the incredible support and upskilling. From day one, the hands-on approach and focus on fundamentals helped me apply my knowledge to real-life scenarios. The dedication and encouragement from Akhil were truly inspiring, pushing us to continuously improve!",
    username: "Aditya Pant",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGYmAzuGoncIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718714447992?e=1731542400&v=beta&t=7INAN9eGo7UEPiQj3HOmCAfrD9CySxe8113oD-AZL3Y",
    company: "Samaro",
    post: "Product Management Intern",
    linkedin: "https://www.linkedin.com/in/adityapant--",
  },
  {
    rating: 4.5,
    title: "Great Quality",
    desc: "Grateful to Product Space for the in-depth knowledge and skills in product management. The practical experience and 1:1 support were exceptional",
    username: "Aditya Mandothia",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGGLNTiBlHcrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710504658899?e=1731542400&v=beta&t=Bc1TFPzuuo0uEN4fuf-1tdXKDwYl3OF2yW31-PwAQIo",
    company: "Cinestox",
    post: "Product Management Intern",
    linkedin: "https://www.linkedin.com/in/aditya-mandothia-84882520a/",
  },
  {
    rating: 4.5,
    title: "Amazing Experience",
    desc: "The mentors at Product Space went above and beyond to help me achieve my goals. Their guidance was crucial to my success.",
    username: "Nishant Sinja",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFuaisZpsSTjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705161505684?e=1731542400&v=beta&t=aThtTNNdBqxkVgYOfBP394wH95SeA8T1ZANwJZ1s_18",
    company: "CreditAccess Grameen Limited",
    post: "Product Manager",
    linkedin: "https://www.linkedin.com/in/nishant-sinha-134701134",
  },
  {
    rating: 4.5,
    title: "Good Support",
    desc: "The mentorship at Product Space has been key to my growth as a Product Manager. The sessions, feedback, and mock interviews greatly enhanced my skills and confidence. I'm truly grateful for the unwavering support and belief in my potential. Special thanks to Akhil Yash Tiwari for his consistent guidance throughout our journey. Here's to ongoing growth and success! I highly recommend Product Space for anyone looking to refine their skills as a Product Manager.",
    username: "Mrigaj Nirvan Goradia",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGk2o03hDHZJg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700811766381?e=1731542400&v=beta&t=Tzw0dFdaveqGVCDC0J59IkxdCtpAntGombGD0so5dxA",
    company: "Kaam",
    post: "Product Manager",
    linkedin: "https://www.linkedin.com/in/mrigaj-goradia-b93408107",
  },
  {
    rating: 5,
    title: "Highly Recommend",
    desc: "Grateful to Product Space and their mentors for upskilling me in Product Management and interview strategies. Highly recommend it for anyone looking to elevate their skills!",
    username: "Anshul Agarwal",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQFb1RR6l5Nufg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694013700834?e=1731542400&v=beta&t=X4wG_7rX198PAeNMDMT8Gjrgb-GvWMf8NkzosVLVbZw",
    company: "My Sivi",
    post: "Product Manager",
    linkedin: "https://www.linkedin.com/in/a4sh",
  },
  {
    rating: 4.5,
    title: "Very Satisfied",
    desc: "I'm incredibly grateful to Product Space for their 1:1 mentorship. The personalized guidance and support I received truly transformed my career journey. The mentors at Product Space provided me with the skills and confidence I needed to succeed. I couldn’t have achieved this transition without their invaluable assistance!",
    username: "Aryan Jaiswal",
    img: "https://media.licdn.com/dms/image/v2/C4E03AQG_j9Ls8iygIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1626771255085?e=1731542400&v=beta&t=jMNNAPrrttnDHspafglJ2JHJMA1g0RG4B2qRK9mp5Oc",
    company: "Ind Money",
    post: "Product Management Trainee",
    linkedin: "https://www.linkedin.com/in/aryanjaiswal2401/",
  },
  {
    rating: 5,
    title: "Transformative Experience",
    desc: "Product Space made learning truly worthwhile, starting from basics and building up to Tech for PM with hands-on tools and peer engagement. The live projects were a great experience, and the 1-on-1 mentorship was invaluable. Special thanks to Akhil Yash Tiwari for being the go-to person for all my doubts!",
    username: "Jaydeep Prajapati",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFDFdylPDq9Cw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719207899519?e=1731542400&v=beta&t=lDyr4Or3LiSEBLtIuI9ptYt6PvOZ7tMViqLs4gkTLIU",
    company: "WiJungle",
    post: "Product Manager Internship",
    linkedin: "https://www.linkedin.com/in/jaydeep-prajapati-26ab3a210/",
  },
  {
    rating: 5,
    title: "Amazing ",
    desc: "I would like to express my heartfelt gratitude to Akhil Yash Tiwari and the entire Product Space team. The exceptional learning resources and guidance I received were truly transformative. Your mentorship played a crucial role in upskilling me and helping me grow both personally and professionally. Thank you for the unwavering support and dedication.",
    username: "Medhya Budhwar",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQH_pXGG_9D_kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693849888611?e=1731542400&v=beta&t=B710fpF3oSVoLYtGPBG3C6NeEgwneupn60Sa75vphMo",
    company: "Swiggy",
    post: "Product Management Consultant",
    linkedin: "https://www.linkedin.com/in/medhya-budhwar-27715420a",
  },
  {
    rating: 5,
    title: "Fantastic Journey",
    desc: "Reflecting on my journey, it feels like just yesterday I started with uncertainty and doubt. I'm deeply grateful to my mentor, Akhil Yash Tiwari, and Product Space for their support and guidance, which were key to my growth and success.",
    username: "Prashant Kumar",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEFgVh9-d586A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693849733017?e=1731542400&v=beta&t=KebkYAScNXHaDiKUEW0-EOQ8P7P9XmeXK9Pxz2wCRvA",
    company: "Bento Labs",
    post: "Product Management Intern",
    linkedin: "https://www.linkedin.com/in/prashant-kumar-5440b421b/",
  }
];

const ReviewPmFellowship = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5] pb-5 pt-3 lg:pt-0 px-4 md:px-10 xl:px-32">
      <div className="py-5 lg:py-12">
        <div className="text-[24px] lg:text-[40px] font-bold px-2 text-center md:text-start font-sans px-4">
          We have placed 400+ cohort members
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
              linkedin={review.linkedin}
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
                linkedin={review.linkedin}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center font-semibold">
          <a href="https://topmate.io/propel/1232054 " target="_blank" className="flex justify-center w-full md:w-2/5 lg:w-1/3">
            <button className="w-[300px] text-[18px] bg-[#FFC303] hover:bg-yellow-500 text-black p-2 py-3 px-6 md:p-3 rounded-full mt-6">
                Meet with Alums
            </button>
          </a>
        </div>


          {/* <div className="hidden lg:flex flex-col gap-2 justify-center items-center">
            <div className="flex justify-center text-[16px] font-semibold text-[#FF559E] underline my-3 w-fit">
              <button>Load More Success Stories</button>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default ReviewPmFellowship;
