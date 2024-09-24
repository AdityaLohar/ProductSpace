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
    <div className="flex flex-col bg-white px-0 py-4 md:py-12">
      <div className="py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-3">
          Placed across 310+ Product Companies in India
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
