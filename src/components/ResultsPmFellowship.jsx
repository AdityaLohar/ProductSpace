import React from 'react'

const ResultsPmFellowship = () => {
    return (
        <div className="mx-4 md:mx-10 lg:mx-20 py-8 border-2 border-[#00B5CE] bg-[#D7F5FF] rounded-xl px-10 mt-12 mb-24">
          <div className="flex justify-between py-4 items-center">
            <div className="text-[28px] lg:text-[32px] font-semibold w-1/4 text-start font-sans">
              Results you can count on
            </div>

            <div className='flex gap-4 xl:gap-0 text-[#00B5CE]'>
                <div className='border-r-2 border-black px-4 lg:px-12'>
                    <div>Rs <span className='text-[40px] font-semibold'>48</span> LPA</div>
                    <div className='font-medium text-black'>Highest Salary</div>
                </div>
                <div className='border-r-2 border-black px-4 lg:px-12'>
                    <div>Rs <span className='text-[40px] font-semibold'>48</span> LPA</div>
                    <div className='font-medium text-black'>Highest Salary</div>
                </div>
                <div className='border-r-2 border-black px-4 lg:px-12'>
                    <div>Rs <span className='text-[40px] font-semibold'>48</span> LPA</div>
                    <div className='font-medium text-black'>Highest Salary</div>
                </div>
                <div className='px-4 lg:px-12'>
                    <div>Rs <span className='text-[40px] font-semibold'>48</span> LPA</div>
                    <div className='font-medium text-black'>Highest Salary</div>
                </div>
            </div>
          </div>
        </div>
      );
}

export default ResultsPmFellowship
