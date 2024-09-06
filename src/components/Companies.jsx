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
    <div className="flex flex-col bg-[#F1E6FF] mb-10 lg:mb-20 rounded-3xl pb-10 px-4 md:px-10 lg:px-20">
      <div className="py-8">
        <div className="text-[28px] lg:text-[44px] font-bold text-center">
          Trusted by 350+ Product Companies in India
        </div>

        <div className="flex flex-col gap-12 w-full overflow-hidden pt-10 lg:pt-20">
          <div>
            <Flowing img1={img1} />
          </div>
          <div>
            <Flowing img1={img2} />
          </div>
          <div>
            <Flowing img1={img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;