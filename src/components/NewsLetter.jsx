const NewsLetter = () => {
  return (
    <div className="flex flex-col bg-[#AEECFF] mb-10 lg:mb-20 rounded-3xl pb-5 lg:pb-10">
      <div className="py-5 lg:py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans">
          Subscribe to our Newsletter
        </div>
        <div className="text-[14px] lg:text-[16px] text-center text-gray-700 font-medium px-2 md:px-20 lg:px-60">
          <p>Subscribe to our Newsletter to stay up-to-date on last courses, news and discounts from us.</p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-0 lg:mt-10">
        <div className="flex justify-between items-center bg-white rounded-full p-1 lg:p-2 mx-2 lg:mx-0 w-full lg:w-3/5">
          <input type="text" placeholder="Enter your Email Id" className="px-3 rounded-full text-gray-800 w-1/2 lg:w-2/3 placeholder-gray-300" />
          <button className="bg-[#21C1F3] text-white py-2 px-3 lg:px-3 rounded-full text-[16px] lg:text-base">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
