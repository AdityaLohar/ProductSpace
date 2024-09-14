import AlumniCard from "./AlumniCard";
import alum from "../assets/AlumFace.svg";

const alumni = [
  {
    id: 1,
    profile: "https://media.licdn.com/dms/image/v2/D5603AQGGLNTiBlHcrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710504658899?e=1731542400&v=beta&t=Bc1TFPzuuo0uEN4fuf-1tdXKDwYl3OF2yW31-PwAQIo",
    name: "Aditya Mandothia",
    prevCompany: "Bharti AXA Life Insurance",
    prevPost: "Digital Product Management Intern",
    curCompany: "Cinestox",
    curPost: "Product Management Intern",
    testimonial: "Grateful to Product Space for the in-depth knowledge and skills in product management. The practical experience and 1:1 support were exceptional",
  },
  {
    id: 2,
    profile: "https://media.licdn.com/dms/image/v2/D5603AQFuaisZpsSTjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705161505684?e=1731542400&v=beta&t=aThtTNNdBqxkVgYOfBP394wH95SeA8T1ZANwJZ1s_18",
    name: "Nishant Sinja",
    prevCompany: "Thermax Limited",
    prevPost: "Marketing Research Intern",
    curCompany: "CreditAccess Grameen Limited",
    curPost: "Product Manager",
    testimonial: "The mentors at Product Space went above and beyond to help me achieve my goals. Their guidance was crucial to my success.",
  },
  {
    id: 3,
    profile: "https://media.licdn.com/dms/image/v2/D5603AQELarrUuOd4sA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704697376037?e=1731542400&v=beta&t=x2tbb1gSOBhVhdXO_qZgpjR0TZ3M2N-u9yHW53JV_S4",
    name: "Arpita",
    prevCompany: "Salarpuria Sattva",
    prevPost: "Project Manager",
    curCompany: "Magicbricks",
    curPost: "APM",
    testimonial: "I'm grateful to Product Space & Akhil Yash Tiwari for the support & guidance 🙌 and the incredible support of my fellow cohort 8 members it’s been a smooth ride a huge thanks to them all! ☺️🤝. Product Space's mentorship was the key to my successful career transition. I couldn’t have done it without them!",
  },
  {
    id: 4,
    profile: "https://media.licdn.com/dms/image/v2/D4D03AQFb1RR6l5Nufg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694013700834?e=1731542400&v=beta&t=X4wG_7rX198PAeNMDMT8Gjrgb-GvWMf8NkzosVLVbZw",
    name: "Prerit Bhatnagar",
    prevCompany: "Accops",
    prevPost: "Associate Product Manager",
    curCompany: "SarvaGram",
    curPost: "Product Manager",
    testimonial: "Over the past few months, I've upskilled through Product Space, gaining insights into Product Management, tools, and interview strategies. If you're passionate about products or looking to enhance your skills, I highly recommend this course.",
  },
  {
    id: 5,
    profile: "https://media.licdn.com/dms/image/v2/D5603AQHrZaIw4qYSYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698746437560?e=1731542400&v=beta&t=j7-M5QvihfgnJlzQ4PLK2zei8slmh5Wyp70uKQrwrPg",
    name: "Alankrat Nigam",
    prevCompany: "Justdial",
    prevPost: "Product Operation",
    curCompany: "Cimpress",
    curPost: "Product Ops Specialist",
    testimonial: "Thank you, Product Space and my mentor Akhil Yash Tiwari, for providing the guidance and support that helped me excel. The journey was challenging yet thrilling. Today, I take pride in identifying as an 👷‍♂️ engineer by chance 😋 , a business developer by knowledge 😎 , and a product manager by heart ❤️ ."
  },
  {
    id: 6,
    profile: "https://media.licdn.com/dms/image/v2/D4D03AQG_XhVWVr-pqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725585006683?e=1731542400&v=beta&t=2Fjqbbyh9lINGj4rhKcdLpe2srt6lYuM_uInTnpTQco",
    name: "Amara Venkata Sai Srujan",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Nabe Eats",
    curPost: "Product Manager",
    testimonial: "Grateful to Product Space for kickstarting my Product Management journey. Made great friends, found study partners, and had amazing mentors to rely on. A fantastic 2.5 months! Thanks, Akhil Yash Tiwari, for the experience! Proud to be have been part of 'PS_C7'."
  },
  // Add more alumni data here
];

const Alumni = () => {

  return (
    // <div className="flex flex-col bg-[#D7F5FF] pb-10">
    <div className="flex flex-col bg-[#F1E6FF] pb-10">
      <div className="py-5 lg:py-10">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Our Successful Alumni
        </div>

        <div className="text-[14px] lg:text-[16px] text-center text-gray-700 font-medium px-4 xl:px-60 py-1">
          <p className="lg:hidden">
          A sneak peak into what you will learn in our 10-week curriculum. You will have to commit to investing 6 to 8 hours of dedicated time
          to this program every week.
          </p>

          <p className="hidden lg:block">
            A sneak peak into what you will learn in our 10-week curriculum.{" "}
          </p>
          <p className="hidden lg:block">
            {" "}
            You will have to commit to investing 6 to 8 hours of dedicated time
            to this program every week.{" "}
          </p>
        </div>

      </div>

      <div className="h-[600px] overflow-x-scroll md:overflow-x-hidden mentor-scrollbar md:scroll-container">
        <div
          className={`scroll-wrapper ml-6 animate`}
        >
          {[...alumni, ...alumni].map((alums, index) => (
            <div key={`${alums.id}-${index}`} className="scroll-item">
              <AlumniCard
                profile={alums.profile}
                name={alums.name}
                prevCompany={alums.prevCompany}
                prevPost={alums.prevPost}
                curCompany={alums.curCompany}
                curPost={alums.curPost}
                testimonial={alums.testimonial}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
