import { useEffect, useState } from "react";

const endDate = "2024-12-21T23:59:59";

const AnalyticsSticky = ({ togglePopup }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    isPast: false,
  });

  useEffect(() => {
    let interval; // Declare the interval variable
    const calculateTimeRemaining = () => {
      const total = Date.parse(endDate) - Date.now();
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      setTimeRemaining({
        days,
        hours,
        minutes,
        isPast: total <= 0,
      });
    };

    calculateTimeRemaining(); // Run the function immediately
    interval = setInterval(calculateTimeRemaining, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <div className="flex fixed bottom-0 left-0 right-0 z-40 bg-white px-4 md:px-12 lg:px-[120px] py-3 shadow-[0_-15px_28px_-10px_rgba(0,0,0,0.2)]">
        <div className="flex gap-0 2xl:gap-20 justify-between w-full max-w-screen-2xl mx-auto font-hind text-[14px] xl:text-[17px]">
          <div className="hidden md:flex flex-col gap-1">
            <div className="text-[16px] text-[#969696]">
              Sat, Dec 21, 2024 • 11 am - 2 pm • Online
            </div>
            <div className="text-[20px] text-[#120D26] font-semibold">
              Master Product Analytics in Just 3 Hours
            </div>
          </div>

          {/* <div className="flex md:hidden flex-col gap-0">
            <div className="text-[12px] text-[#969696]">
              {timeRemaining.isPast ? "STARTED ON" : "STARTS IN"}
            </div>
            <div className="text-[16px] text-[#120D26] font-semibold">
              {timeRemaining.isPast
                ? "Thursday, Dec 5, 2024"
                : `${timeRemaining.days}d: ${timeRemaining.hours}h: ${timeRemaining.minutes}m`}
            </div>
          </div> */}

          <div className="flex justify-between w-full md:hidden items-center gap-6">
            <div className="flex flex-col items-start md:items-end">
              <div className="flex text-[18px] md:text-[20px] text-[#FFA000] font-bold line-through">
                1999
              </div>

              <div>
                <span className="font-bold">FREE</span> for first{" "}
                <span className="font-bold">50</span> seats only
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={togglePopup}
                disabled={timeRemaining.isPast}
                className={`shimmer bg-[#FFA000] text-white py-2 px-4 2xl:px-8 rounded-lg font-semibold ${
                  timeRemaining.isPast ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Join Waitlist Now
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-between items-center gap-6">
            <div className="flex flex-col items-end">
              <div className="hidden md:flex text-[20px] text-[#FFA000] font-bold line-through">
                1999
              </div>

              <div>
                <span className="font-bold">FREE</span> for first{" "}
                <span className="font-bold">50</span> seats only
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={togglePopup}
                disabled={timeRemaining.isPast}
                className={`shimmer bg-[#FFA000] text-white py-2 px-4 2xl:px-8 rounded-lg font-semibold ${
                  timeRemaining.isPast ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Join Waitlist Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSticky;
