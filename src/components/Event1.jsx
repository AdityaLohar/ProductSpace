import React from 'react'
import hackathonImg from "../assets/prime-video.svg";
import arrowIcon from "../assets/right-arrow.svg";
import locationIcon from "../assets/location.svg";
import locationDarkIcon from "../assets/location-dark.svg";
import timeIcon from "../assets/access-time.svg";
import shareIcon from "../assets/share.svg";
import calendarIcon from "../assets/calendar.svg";
import demoImg from "../assets/demo-image.svg";
import linkedInIcon from "../assets/linkedin-circle.svg";
import substackIcon from "../assets/substack-logo.svg";
import slackIcon from "../assets/slack.svg";
import bookmarkIcon from "../assets/bookmark-icon.svg";
import FaqEvents from './FaqEvents';

const slackInviteLink = "https://productspacecommunity.slack.com/join/shared_invite/zt-2l4itbe2r-fiAdPz5jEW8pPn6wacYrIw#/shared-invite/email";

// change component name
// hackathon name + img + tags dynamic
// register now redirection ?
// where does it go in small screens ?

const EventInfo = ({icon, title, desc}) => {
    return (
        <div className='flex gap-3'>
            <div className='bg-[#E7E8EB] p-2 rounded-xl'>
                <img src={icon} alt="" className='h-8 lg:h-12' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-[12px] lg:text-[18px] text-[#969696]'>
                    {title}
                </div>
                <div className='text-[16px] lg:text-[20px] text-[#120D26] font-semibold'>
                    {desc}
                </div>
            </div>
        </div>
    )
}

const EventBenefit = ({title, desc}) => {
    return (
        <div className='text-[16px] lg:text-[20px] font-semibold'>
            <div>
                {title}: <span className='text-[#969696] font-normal'>{desc}</span>
            </div>
        </div>
    )
}

const Event1 = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col gap-4 lg:gap-10 font-inter bg-transparent py-8 lg:py-16 text-[#120D26] bg-[radial-gradient(circle,_#E6E7E7_1px,_transparent_2px)] bg-[length:115px_10px]">
        <div className='text-[20px] lg:text-[48px] text-center font-bold'>
            <h1 className='flex justify-center items-center gap-4'>
                <img src={bookmarkIcon} alt="" className='w-10 lg:w-14' />
                <p>PS Live PM Project #1</p>    
            </h1>
        </div>

        <div className='flex px-0 lg:px-28 custom-12:px-[0px] lg:gap-8 2xl:gap-12'>
            <div className='w-full lg:w-[70%] flex flex-col gap-8 rounded-xl shadow-xl bg-white p-4 lg:p-8'>
                <div className='flex flex-col gap-8'>
                    <div>
                        <img src={demoImg} alt="" className='h-[200px] sm:h-[300px] lg:h-[457px] w-full object-cover rounded-xl' />
                    </div>

                    <div className='text-[16px] lg:text-[20px] text-[#969696]'>
                        Dont just learn product management - experience it!
                        {/* Dont just learn product management - experience it! 🚀 */}
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between gap-3'>
                        <EventInfo icon={calendarIcon} title={"RUNS FROM"} desc={"Aug 13-15, 2024"} />
                        <EventInfo icon={locationDarkIcon} title={"HAPPENING AT"} desc={"Delhi University, New Delhi"} />
                    </div>

                    <div className='text-[16px] lg:text-[20px] text-[#969696]'>
                        Lorem ipsum dolor sit amet consectetur. Pharetra vehicula lacus faucibus duis integer. Purus consectetur sit egestas sit. Purus neque odio interdum tempus sagittis sem egestas. Et quam massa cursus quisque senectus. Facilisis vitae erat tortor at fusce quisque. Eget massa massa viverra ut. Phasellus morbi eu elit non risus. Urna tempor hac leo et elementum tortor semper ridiculus vitae. Porta pellentesque in eget vitae. Sit gravida volutpat at id gravida. Et amet eu magna ante phasellus cras et euismod aliquam.
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='text-[20px] lg:text-[28px] font-semibold'>Find us on</div>
                    <div className='flex gap-2 lg:gap-5'>
                        <div className='shadow shadow-xl rounded-xl p-2'>
                            <img src={linkedInIcon} alt="" className='h-8 lg:h-12' />
                        </div>
                        <div className='shadow shadow-xl rounded-xl p-2'>
                            <img src={substackIcon} alt="" className='h-8 lg:h-12' />
                        </div>
                        <div className='shadow shadow-xl rounded-xl p-2'>
                            <img src={slackIcon} alt="" className='h-8 lg:h-12' />
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-6'>
                    <div className='text-[20px] lg:text-[28px] font-semibold'>Exclusive Benefits:</div>
                    <div className='flex flex-col gap-3'>
                        <EventBenefit title={"💼 Practical Experience"} desc={"Work on real-world projects across various domains and industries."} />
                        <EventBenefit title={"📂 Portfolio Building"} desc={"Finish with a strong, experience-backed portfolio that will impress recruiters."} />
                        <EventBenefit title={"🤝 Community Support"} desc={"Receive feedback and assistance from peers and our product community."} />
                        <EventBenefit title={"📈 Skill Mastery"} desc={"Develop and refine over 15 critical PM skills throughout comprehensive projects."} />
                        <EventBenefit title={"🎓 Certified by Product Space"} desc={"Earn a verified certificate showcasing your expertise and dedication."} />
                        <EventBenefit title={"🌐 Networking Opportunities"} desc={"Connect with peers and industry professionals."} />
                    </div>
                </div>
                
                <div className='flex flex-col gap-6 text-[16px] lg:text-[20px]'>
                    <div className='text-[20px] lg:text-[28px] font-semibold'>Who Is It For:</div>
                    <ul className='flex flex-col gap-8 font-semibold list-disc ml-8'>
                        <li>
                            Current PMs & APMs <span className='font-normal text-[#969696]'>seeking to upskill and tackle new challenges.</span>
                        </li>
                        <li>
                            Aspiring PMs <span className='font-normal text-[#969696]'>looking to break into PM role with practical experience.</span>
                        </li>
                        <li>
                            Recent Graduates & MBA Students <span className='font-normal text-[#969696]'>seeking to upskill and tackle new challenges.</span>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-6 text-[16px] lg:text-[20px]'>
                    <div className='text-[20px] lg:text-[28px] font-semibold'>How It Works:</div>
                    <div className='flex flex-col gap-4 text-[#969696]'>
                        <div>
                            1. Register for the Live PM Project.
                        </div>
                        <div>
                            2. Start your project. Join our Slack community for support and collaboration.
                        </div>
                        <div>
                            3. Submit your project and get it evaluated by mentors.
                        </div>
                        <div>
                            4. Earn your certificate of project completion and achievement.
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 text-[16px] lg:text-[20px]'>
                    <div className='text-[20px] lg:text-[28px] font-semibold'>Prizes</div>
                    <div className='flex flex-col gap-4 text-[#969696]'>
                        <div>
                            ✨ Amazon voucher of worth Rs. 1000
                        </div>
                        <div>
                            🤝 1-1 call with Product Space Mentors
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 text-[18px] lg:text-[20px] font-semibold'>
                    <div>
                        💁🏻 Have questions? Reach out to us on Slack, and we&apos;ll be happy to assist you!
                    </div>
                    <a href={slackInviteLink} target='_blank' className='underline text-[#FFA600]'>
                        Join Slack Community
                    </a>
                </div>

                <FaqEvents />
            </div>

            <div className='hidden lg:flex w-[30%] flex-col'>
                <div className='flex flex-col gap-4 bg-white shadow shadow-lg rounded-xl p-8'>
                    <div className='flex items-start justify-between'>
                        <img src={hackathonImg} alt="img" className='rounded-xl h-[84px] w-[84px]' />
                        <div className='shadow-xl p-3 rounded-xl'>
                            <img src={shareIcon} alt="share option" />
                        </div>
                    </div>

                    <div className='text-[28px] font-bold'>
                        Product Hackathon
                    </div>

                    <div className='flex flex-col gap-2 text-[#969696] font-semibold'>
                        <div className='flex gap-2 items-center'>
                            <img src={timeIcon} alt="" className='h-5'/>
                            <p>7 PM . Aug 13, 2024</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={locationIcon} alt="" className='h-5'/>
                            <p>Delhi University, New Delhi</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        <div className='bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg'>Interview Session</div>
                        <div className='bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg'>Open</div>
                        <div className='bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg'>Live</div>
                    </div>

                    <div className=''>
                        <button className='flex w-full gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white '>
                            <p className='text-[20px] font-medium'>Register Now</p>
                            <img src={arrowIcon} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event1
