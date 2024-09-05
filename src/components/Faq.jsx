
import DropdownList from './DropdownList';
const Faq = () => {
  return (
    <div className="flex flex-col bg-[#F1E6FF] mb-20 rounded-3xl pb-10">
      <div className="py-5 lg:py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans">
          Frequently Asked Questions
        </div>
      </div>

      <div className="flex justify-between px-4 lg:px-20 gap-4">
        <DropdownList />
      </div>
    </div>
  );
};

export default Faq;
