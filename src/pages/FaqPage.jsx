import DropdownList from "../components/DropdownList";

const FaqPage = () => {
  return (
    <div className="flex flex-col bg-white pb-40 ">
      <div className="py-5 lg:py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Frequently Asked Questions
        </div>
      </div>

      <div className="flex justify-between px-4 lg:px-20 gap-4">
        <DropdownList len={13} flag={0} />
      </div>
    </div>
  );
};

export default FaqPage;
