import tick from "../assets/tick-green.svg";
import logo from "../assets/netflix.svg";


const LearningWithPace = () => {
  return (
    <div className="bg-[#FFF1D4] pb-16 px-1 md:px-10 xl:px-32 pt-16 font-hind">
      <div className="flex py-5 px-20 lg:py-12 justify-between gap-12 bg-white rounded-3xl">

        <div className="flex flex-col gap-6">
            <div className="w-3/4">
                <div className="text-[28px] lg:text-[40px] font-bold text-start font-sans">
                    Learning with a pace
                </div>
                <div className="text-[14px] text-start">
                    A sneak peak into what you will learn in our 10-week curriculum. 
                    You will have to commit to investing 6 to 8 hours of dedicated time to this program every week.
                </div>
            </div>

          <div className="space-y-7 my-8 text-[18px]">
            <div>
                <h2 className="font-sans text-[24px] font-semibold">
                    01 Fundamentals of Product Management 
                </h2>
            </div>
            <div className="space-y-4">
                <div className="text-[15px] flex gap-2 items-center"> <img src={tick} alt="" /> Up-to-date Syllabus with Generative AI Modules</div>
                <div className="text-[15px] flex gap-2 items-center"> <img src={tick} alt="" /> Complimentary Python Programming Bootcamp</div>
                <div className="text-[15px] flex gap-2 items-center"> <img src={tick} alt="" /> 60+ Case studies & 14+ Industry Projects</div>
            </div>
           </div>

           <div className="space-y-3 border border-2 rounded-2xl p-6 max-w-max">
            <div className="font-medium">Case Studies</div>
            <div className="flex gap-2">
                <img src={logo} alt="" className="w-24 rounded-md bg-red-200" />
                <img src={logo} alt="" className="w-24 rounded-md bg-red-200" />
                <img src={logo} alt="" className="w-24 rounded-md bg-red-200" />
            </div>
            </div>
        </div>

        <div className="flex items-center w-1/2 items-start gap-6 px-16 items-center">
          <div className="w-full h-auto aspect-square rounded-full bg-red-200">
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningWithPace
