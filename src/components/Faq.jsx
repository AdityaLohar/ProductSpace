import DropdownList from './DropdownList';

const Faq = () => {
  return (
    <div className="flex flex-col bg-white pb-20 ">
      <div className="py-5 lg:py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Frequently Asked Questions
        </div>
      </div>

      <div className="flex justify-between px-4 lg:px-20 gap-4">
        <DropdownList len={5} flag={1} />
      </div>
    </div>
  );
};

export default Faq;
