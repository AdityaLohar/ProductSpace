import aiimg from "../assets/image.svg";
import aiimg1 from "../assets/image(1).svg";
import aiimg2 from "../assets/image(2).svg";
import aiimg3 from "../assets/image(3).svg";
import arrow from "../assets/right-arrow.svg";
import download from "../assets/download.svg";

const Card = ({ id, title, desc, image }) => {
  return (
    <div className="flex gap-8 p-8 border border-[rgba(255,255,255,0.2)] rounded-xl items-center shadow-[0px_4px_24px_0px_rgba(6,28,61,0.12)]">
      {id % 2 == 0 && (
        <div className="w-1/3">
          <img src={image} alt="" className="rounded-lg" />
        </div>
      )}

      <div className="flex flex-col gap-2 w-2/3 text-[24px]">
        <div className="font-bold">{title}</div>

        <div className="text-[20px] text-[#969696]">
          <ul className="list-disc space-y-2 ml-4">
            {desc.map((entry, id) => (
              <li key={id}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>

      {id & 1 ? (
        <div className="w-1/3">
          <img src={image} alt="" className="rounded-lg" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const SmallCard = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col gap-8 p-4 border border-[rgba(255,255,255,0.2)] items-center rounded-xl shadow-[0px_4px_24px_0px_rgba(6,28,61,0.12)]">
      <div className="w-full flex justify-center">
        <img src={image} alt="" className="rounded-lg" />
      </div>

      <div className="flex flex-col gap-2 text-[20px]">
        <div className="font-bold">{title}</div>

        <div className="text-[16px] text-[#969696]">
          <ul className="list-disc space-y-2 ml-4">
            {desc.map((entry, id) => (
              <li key={id}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const outline = [
  {
    title: "Module 1: Foundations of AI",
    image: aiimg,
    desc: [
      "Introduction to AI: Key concepts and history",
      "Types of AI: Machine learning, deep learning, and beyond",
      "Essential AI terminology for PMs",
    ],
  },
  {
    title: "Module 2: Machine Learning Essentials",
    image: aiimg1,
    desc: [
      "Understanding supervised and unsupervised learning",
      "Overview of common algorithms: Decision trees, neural networks",
      "How to interpret ML model outputs in product decisions",
    ],
  },
  {
    title: "Module 3: AI in Product Roadmaps",
    image: aiimg2,
    desc: [
      "Identifying AI opportunities in the product lifecycle",
      "Integrating AI into product strategy and roadmap planning",
      "Prioritizing AI features based on user needs and business goals",
    ],
  },
  {
    title: "Module 4: Case Studies and Applications",
    image: aiimg3,
    desc: [
      "AI-driven product case studies from industry leaders",
      "Lessons from successful AI implementations in PM",
      "Workshop: Applying AI in hypothetical product scenarios",
    ],
  },
];

const GenAiCourseOutline = () => {
  return (
    <div className="flex flex-col gap-8 bg-white text-[#34304C] gap-5 px-4 md:px-10 xl:px-32 pb-4 lg:pb-16 font-inter">
      {/* title and subtitle */}
      <div className="flex flex-col gap-2 text-center">
        <div className="text-[24px] md:text-[32px] font-bold">
          <h2>Course Outline</h2>
        </div>
        <div className="text-[16px] md:text-[24px] text-[#969696]">
          <h4>
            Stand out as a product leader with skills that redefine what&apos;s
            possible in product management.
          </h4>
        </div>
      </div>

      <hr />

      {/* Cards */}
      <div className="hidden lg:flex flex-col gap-8">
        {outline.map((entry, id) => (
          <Card
            key={id}
            id={id}
            title={entry.title}
            desc={entry.desc}
            image={entry.image}
          />
        ))}
      </div>

      {/* Small Cards */}
      <div className="flex flex-col lg:hidden gap-8">
        {outline.map((entry, id) => (
          <SmallCard
            key={id}
            id={id}
            title={entry.title}
            desc={entry.desc}
            image={entry.image}
          />
        ))}
      </div>

      <div className="flex flex-col items-center lg:flex-row justify-center gap-4">
        <div className="flex justify-center bg-[#FFA000] w-[240px] py-[12px] px-[24px] text-white rounded-lg">
          <button className="flex items-center gap-3 justify-between">
            <p>Secure Your Spot</p>
            <img src={arrow} alt="" />
          </button>
        </div>
        <div className="flex justify-center py-[12px] w-[240px] px-[24px] border border-black text-black rounded-lg bg-white">
          <button className="flex items-center gap-2">
           <p>Download Curriculum</p>
           <img src={download} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenAiCourseOutline;
