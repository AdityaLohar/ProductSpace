import alumni from "../data/AlumniData";
import AlumniCard from "./AlumniCard";

// const alumni = [
//   {
//     id: 1,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQGGLNTiBlHcrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710504658899?e=1731542400&v=beta&t=Bc1TFPzuuo0uEN4fuf-1tdXKDwYl3OF2yW31-PwAQIo",
//     name: "Aditya Mandothia",
//     prevCompany: "https://image4.owler.com/logo/bharti-axa_owler_20200630_223719_original.png",
//     prevPost: "Digital PM Intern",
//     curCompany: "Cinestox",
//     curPost: "PM Intern",
//     testimonial: "I'm incredibly grateful to the Product Space team for helping me develop the skills and knowledge I needed to succeed in product management. The practical experience and personalized 1:1 support were especially helpful.",
//   },
//   {
//     id: 2,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQFuaisZpsSTjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705161505684?e=1731542400&v=beta&t=aThtTNNdBqxkVgYOfBP394wH95SeA8T1ZANwJZ1s_18",
//     name: "Nishant Sinja",
//     prevCompany: "Thermax",
//     prevPost: "Marketing Research Intern",
//     curCompany: "CreditAccess Grameen",
//     curPost: "Product Manager",
//     testimonial: "The Product Space program was a game-changer for my career. The mentors were incredibly knowledgeable and supportive, providing me with the guidance and tools I needed to succeed. I especially appreciated the opportunity to work on real-world projects and gain hands-on experience. ",
//   },
//   {
//     id: 3,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQELarrUuOd4sA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704697376037?e=1731542400&v=beta&t=x2tbb1gSOBhVhdXO_qZgpjR0TZ3M2N-u9yHW53JV_S4",
//     name: "Arpita",
//     prevCompany: "Salarpuria Sattva",
//     prevPost: "Project Manager",
//     curCompany: "Magicbricks",
//     curPost: "APM",
//     testimonial: "I'm incredibly grateful to Product Space and Akhil Yash Tiwari for their mentorship and support, which played a crucial role in my successful career transition to product management. This experience has strengthened my passion for the field and equipped me with the necessary skills to excel.",
//   },
//   {
//     id: 4,
//     profile: "https://media.licdn.com/dms/image/v2/D4D03AQFb1RR6l5Nufg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694013700834?e=1731542400&v=beta&t=X4wG_7rX198PAeNMDMT8Gjrgb-GvWMf8NkzosVLVbZw",
//     name: "Anshul Agarwal",
//     prevCompany: "ICICI Bank",
//     prevPost: "Product Manager",
//     curCompany: "My Sivi",
//     curPost: "Product Manager",
//     testimonial: "I'm deeply thankful to Product Space for the invaluable mentorship and support I received. Their program was instrumental in improving my product management skills and interview preparation. I highly recommend it to anyone looking to enhance their career.",
//   },
//   {
//     id: 5,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQHrZaIw4qYSYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698746437560?e=1731542400&v=beta&t=j7-M5QvihfgnJlzQ4PLK2zei8slmh5Wyp70uKQrwrPg",
//     name: "Alankrat Nigam",
//     prevCompany: "Justdial",
//     prevPost: "Product Operation",
//     curCompany: "Cimpress",
//     curPost: "Product Ops Specialist",
//     testimonial: "Reflecting on my journey, I remember feeling a mix of uncertainty and confusion on the first day of the cohort. Thankfully, Akhil Yash Tiwari and Product Space provided the comfort and guidance I needed to excel. While the journey was challenging, it was also incredibly rewarding. Today, I'm proud to call myself an engineer by chance, a business developer by knowledge, and a product manager by heart."
//   },
//   {
//     id: 6,
//     profile: "https://media.licdn.com/dms/image/v2/D4D03AQG_XhVWVr-pqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725585006683?e=1731542400&v=beta&t=2Fjqbbyh9lINGj4rhKcdLpe2srt6lYuM_uInTnpTQco",
//     name: "Amara Venkata Sai Srujan",
//     prevCompany: "ISM Dhanbad",
//     prevPost: "Student",
//     curCompany: "Nabe Eats",
//     curPost: "Product Manager",
//     testimonial: "My 2.5 months at Product Space were a great way to start my product management journey. I made new friends, found study partners, and had an amazing mentor in Akhil Yash Tiwari. I'm thankful for the experience and glad to have been part of Cohort 7."
//   },
//   {
//     id: 7,
//     profile: "https://media.licdn.com/dms/image/v2/D4D03AQGk2o03hDHZJg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700811766381?e=1732147200&v=beta&t=Ot4UIoKvWOSSzEKcjffXnlJapsFI_gkp4aFYze3S1Rc",
//     name: "Mrigaj Nirvan Goradia",
//     prevCompany: "BSE Ebix InsurTech",
//     prevPost: "Junior Product Manager",
//     curCompany: "Kaam",
//     curPost: "Junior Product Manager",
//     testimonial: "I want to express my sincere gratitude to Product Space for the incredible mentorship and support I received. The sessions, feedback, and mock interviews were invaluable in my growth as a product manager. I'm especially thankful to Akhil Yash Tiwari for his guidance and belief in me. I highly recommend Product Space to anyone looking to advance their career in product management."
//   },
//   {
//     id: 8,
//     profile: "https://media.licdn.com/dms/image/v2/C4E03AQG_j9Ls8iygIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1626771255085?e=1732147200&v=beta&t=OIThNf16ZpQwlDChjUtUWc1l2pJBfth6ibmatHT9kZw",
//     name: "Aryan Jaiswal ",
//     prevCompany: "EY",
//     prevPost: "Financial Services",
//     curCompany: "Ind Money",
//     curPost: "Product Management Trainee",
//     testimonial: "I'm incredibly grateful to Product Space for their personalized mentorship. The guidance and support I received were essential in my career transformation. The mentors equipped me with the skills and confidence I needed to succeed. I couldn't have done it without their invaluable assistance!"
//   },
//   {
//     id: 9,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQFDFdylPDq9Cw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719207899519?e=1732147200&v=beta&t=_9_NmZOdZ-L3UB2vEHUMZaQnCGM1G-FMPLRUDI2dkCw",
//     name: "Jaydeep Prajapati",
//     prevCompany: "PharmEasy",
//     prevPost: "Finance Intern",
//     curCompany: "WiJungle",
//     curPost: "Product Manager Internship",
//     testimonial: "The time I invested in Product Space was definitely worth it. The program starts from the basics and progresses to tech for PMs, with hands-on tools and peer collaboration. We also had the opportunity to work on live projects. And the best part was the 1-on-1 support from the mentors, especially Akhil Yash Tiwari, who was always available to answer my questions."
//   },
//   {
//     id: 10,
//     profile: "https://media.licdn.com/dms/image/v2/D4D03AQH_pXGG_9D_kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693849888611?e=1732147200&v=beta&t=tbFwKgXP04GBJvlRer11HymoSE-y1B-t2PQsvCijR_s",
//     name: "Medhya Budhwar ",
//     prevCompany: "ThinkLink",
//     prevPost: "Associate Product Manager",
//     curCompany: "Swiggy",
//     curPost: "Product Management Consultant",
//     testimonial: "I'm incredibly grateful to Akhil Yash Tiwari and the Product Space team for the exceptional learning resources and guidance I received. Your mentorship was instrumental in my growth and development. Thank you for your unwavering support and dedication."
//   },
//   {
//     id: 12,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQFmDyzuOkIPFw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697454692392?e=1732147200&v=beta&t=UUYoGmsPu4qvfGg_5KOfWYqmrJAPv4Q6pqVNuUnU0iA",
//     name: "Vihal J Rotti",
//     prevCompany: "Folks",
//     prevPost: "Founder's Office",
//     curCompany: "Bento Labs",
//     curPost: "Product Management Intern",
//     testimonial: "Transitioning to a product role is a challenge, but with the right support, it's possible. I'm grateful for the mentors at Product Space who helped me succeed. I couldn't have done it without the incredible community of mentors, peers, and colleagues."
//   },
//   {
//     id: 13,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQFMbZpJ37CxTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714399013199?e=1732147200&v=beta&t=2hcf98hBsmMHNMao-jnRc5XkVdNhoxBzZtLLP1pqy9g",
//     name: "Gaddam Pranay",
//     prevCompany: "HealMeRight",
//     prevPost: "Product Management Intern",
//     curCompany: "TrulyMadly",
//     curPost: "Associate Product Manager",
//     testimonial: "Product Space was a valuable program that provided me with a comprehensive understanding of product management. The curriculum was well-designed, the mentors were experienced, and the projects were practical. I highly recommend it to anyone looking to advance their career in this field."
//   },
//   {
//     id: 14,
//     profile: "https://media.licdn.com/dms/image/v2/D4D03AQFZ6WfSYRuNog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689627342831?e=1732147200&v=beta&t=A78C6gPdiIOjmTLWXS-dOhCVqgwu7d6u6gZwAhi9q_8",
//     name: "Kriti Goel",
//     prevCompany: "United Airlines",
//     prevPost: "Associate Analyst",
//     curCompany: "Optiblack",
//     curPost: "Product Manager",
//     testimonial: "I'm deeply thankful to Product Space for their personalized program and mentorship. Their guidance and support were essential in my successful career transition. The tailored approach and resources they provided made all the difference. Thank you, Product Space!"
//   },
//   {
//     id: 15,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQG2DXHzv0QM9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712046223163?e=1732147200&v=beta&t=AIV4qzhETazw3W58wkQeQO65Kc6l5gXjy-spbIFeQAI",
//     name: "Nousheen Fahmedha",
//     prevCompany: "Tata Consultancy Services",
//     prevPost: "Associate System Engineer",
//     curCompany: "Tohands",
//     curPost: "Product Marketing Manager",
//     testimonial: "Looking to transition into product management? Product Space is the perfect program for you! In 10 weeks, you'll upskill with live projects, ace PM interviews with mentor mocks, and get 1-on-1 mentorship from seasoned PMs. Plus, our exclusive placement network will help you land a top job."
//   },
//   {
//     id: 16,
//     profile: "https://media.licdn.com/dms/image/v2/D5603AQHs8_elIpWiow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678550820751?e=1732147200&v=beta&t=tnktSvp-N_N93Kvn-F8DCCTpx_f22SIX3-80ZHFtTr8",
//     name: "Likesh Kumar Tangudu",
//     prevCompany: "Droame",
//     prevPost: "Product & Strategy Associate",
//     curCompany: "Magicbricks",
//     curPost: "Product Management Intern",
//     testimonial: "Product Space played a pivotal role in my career transition. Their personalized mentorship provided me with the confidence and skills I needed to excel in my new role. The tailored guidance and support I received were invaluable, and I am grateful for the resources they provided. Product Space's support to my success was evident in every aspect of the program."
//   },
//   {
//     id: 17,
//     profile: "https://media.licdn.com/dms/image/v2/D4D03AQH9KgQMIt5vkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680059572169?e=1732147200&v=beta&t=KHdx36G7QF1jmzDAyDiYvRl32EYrsecVrC4s280BPuA",
//     name: "Aditi Maheshwari",
//     prevCompany: "Cognizant",
//     prevPost: "Associate",
//     curCompany: "Magicbricks",
//     curPost: "Associate Product Manager",
//     testimonial: "Product Space is a fantastic community for aspiring and working product managers. The program offers a supportive and collaborative environment where you can learn, grow, and network with like-minded individuals. The mentorship I received from Akhil Yash Tiwari was invaluable, and the resources provided were top-notch. I highly recommend Product Space to anyone looking to advance their career in product management."
//   },
//   // Add more alumni data here
// ];

const Alumni = () => {

  return (
    <div className="flex flex-col bg-[#D7F5FF] pb-10">
      <div className="py-5 lg:py-10">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Our Successful Alumni
        </div>
      </div>

      <div className="h-[340px] overflow-y-hidden overflow-x-scroll mentor-scrollbar">
      {/* <div className="h-[600px] overflow-x-scroll md:overflow-x-hidden mentor-scrollbar md:scroll-container"> */}
        <div
          className={`scroll-wrapper animate hover:cursor-default`}
          onMouseEnter={() => document.documentElement.style.setProperty('--scroll-animation-play-state', 'paused')}
          onMouseLeave={() => document.documentElement.style.setProperty('--scroll-animation-play-state', 'running')}
        >
          {[...Array(5)].map((_, i) => (
            alumni.map((alums, index) => (
              <div
                key={`${alums.id}-${index}-${i}`}
                className="scroll-item"
              >
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
            ))
          ))}

        </div>
      </div>
    </div>
  );
};

export default Alumni;
