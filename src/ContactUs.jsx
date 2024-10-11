import React, { useEffect } from 'react'

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full py-0 lg:py-24 bg-white lg:h-screen font-hind">
      <div className='flex flex-col gap-8 lg:gap-12 bg-gray-100 mx-auto max-w-screen-xl px-8 py-12'>
        <div className='text-[32px] lg:text-[40px] font-bold font-sans'>
          <h1>Contact Us</h1>
        </div>

        <div className='text-[18px]'>
          <p>For any queries or guidance, please reach out to us on below coordinates for immediate assistance.</p>
        </div>

        <div className='text-[18px] flex flex-col gap-3'>
          <p>Contact No - 9611232575</p>
          <p>Email - teams@theproductspace.in</p>
          <p>Address - 293, Sector 6 HSR Layout, Bangalore, 560102, Karnataka</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
