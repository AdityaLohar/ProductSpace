import flash from "../assets/flash.svg";

const BottomBar = () => {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-40 bg-white flex gap-20 justify-between px-[120px] py-4 font-hind text-[17px] shadow-[0_-15px_28px_-10px_rgba(0,0,0,0.2)]">
        <div className="flex gap-12">
            <div>
                <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">Course Duration</div>
                <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">10 Weeks</div>
            </div>
            <div>
                <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">Time commitment</div>
                <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">6-8 hrs/weeks</div>
            </div>
            <div>
                <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">Next cohort starts on</div>
                <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">12th September</div>
            </div>
            <div>
                <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">Mode of delivery</div>
                <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">Online</div>
            </div>
        </div>

        <div className="flex items-center">
            <div className="bg-[#FFF7D9] flex gap-3 items-center py-1 px-5">
                <div>
                    Seats filling fast
                </div>
                <div>
                    <img src={flash} alt="" />
                </div>
            </div>
        </div>

        <div className="flex items-center">
            <div className="bg-[#FF559E] text-white py-2 px-10 rounded-full">
                Enroll Now
            </div>
        </div>
    </div>
  )
}

export default BottomBar
