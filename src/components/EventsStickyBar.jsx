import { useEffect, useState } from "react";

const endDate = "2024-10-30T23:59:59";

const EventsStickyBar = ({ togglePopup }) => {
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
              Wednesday, Oct 30, 2024
            </div>
            <div className="text-[20px] text-[#120D26] font-semibold">
              Product Management Hackathon 2024
            </div>
          </div>

          <div className="flex md:hidden flex-col gap-0">
            <div className="text-[12px] text-[#969696]">
              {timeRemaining.isPast ? "STARTED ON" : "STARTS IN"}
            </div>
            <div className="text-[16px] text-[#120D26] font-semibold">
              {timeRemaining.isPast
                ? "Wednesday, Oct 30, 2024"
                : `${timeRemaining.days}d: ${timeRemaining.hours}h: ${timeRemaining.minutes}m`}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center">FREE</div>

            <div className="flex items-center">
              <button
                onClick={togglePopup}
                disabled={timeRemaining.isPast}
                className={`shimmer bg-[#FFA000] text-white py-2 px-4 2xl:px-8 rounded-lg ${
                  timeRemaining.isPast ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Register Now
              </button>
            </div>

            <div className="hidden md:flex flex-col gap-0">
              <div className="text-[16px] text-[#969696]">
                {timeRemaining.isPast ? "STARTED ON" : "STARTS IN"}
              </div>
              <div className="text-[20px] text-[#120D26] font-semibold">
                {timeRemaining.isPast
                  ? "Oct 30, 2024"
                  : `${timeRemaining.days}d: ${timeRemaining.hours}h: ${timeRemaining.minutes}m`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsStickyBar;