import React from 'react'

const ResultsPmFellowship = () => {
    return (
        <div className="mx-4 md:mx-10 lg:mx-20 py-4 lg:py-8 px-2 lg:px-10 mt-6 lg:mt-12 mb-10 lg:mb-12 border-2 border-[#00B5CE] bg-[#D7F5FF] rounded-xl">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16 justify-between py-4 items-center">
            <div className="text-[28px] lg:text-[32px] font-semibold w-full lg:w-1/4 text-center lg:text-start font-sans">
              Results you can count on
            </div>

            <div className='flex gap-4 justify-between w-full lg:w-auto lg:justify-around xl:gap-0 text-[#00B5CE] text-center'>
              <div className='flex flex-col md:flex-row gap-4 w-full lg:w-auto'>
                <div className='border-r-2 border-[#00B5CE] px-4 xl:px-12'>
                    <div>₹ <span className='text-[28px] md:text-[40px] font-semibold'>48</span> LPA</div>
                    <div className='text-[14px] font-medium text-black'>Highest Salary</div>
                </div>
                <div className='border-r-2 border-[#00B5CE] px-4 xl:px-12'>
                    <div><span className='text-[28px] md:text-[40px] font-semibold'>174</span></div>
                    <div className='text-[14px] font-medium text-black'>Placed Last 60 Days</div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row gap-4 w-full lg:w-auto'>
                <div className='md:border-r-2 md:border-[#00B5CE] px-4 xl:px-12'>
                    <div>₹ <span className='text-[28px] md:text-[40px] font-semibold'>19.6</span> LPA</div>
                    <div className='text-[14px] font-medium text-black'>Average Salary</div>
                </div>
                <div className='px-4 xl:px-12'>
                    <div>Rs <span className='text-[28px] md:text-[40px] font-semibold'>51.2</span> %</div>
                    <div className='text-[14px] font-medium text-black'>Average Hike</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ResultsPmFellowship
