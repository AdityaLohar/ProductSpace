import img1 from "../assets/companies-1.svg";
import img2 from "../assets/companies-2.svg";
import img3 from "../assets/companies-3.svg";

const Flowing = ({ img1 }) => {
  return (
    <div>
      <div className="companies-shadow flex relative overflow-hidden">
        <div className="flex animate-loop-scroll whitespace-nowrap gap-8 items-center">
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
        </div>
        <div
          className="flex animate-loop-scroll whitespace-nowrap gap-8 items-center"
          aria-hidden="true"
        >
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
          <img src={img1} alt="Image 5" className="max-w-none" />
        </div>
      </div>
    </div>
  );
};

const Companies = () => {
  return (
    <div className="flex flex-col bg-white py-8 lg:py-12">
      <div className="">
        <div className="text-[18px] text-center font-inter px-4">
          Alumni placed across 310+ Product Companies in India
        </div>

        <div className="w-full overflow-hidden py-10">
            <Flowing img1={img1} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
