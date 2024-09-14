import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/ps-logo.svg";

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between text-white bg-black px-4 md:px-32 pb-20 pt-16">
            <div>
                <div className="text-2xl font-bold pb-2">
                    <img src={logo} alt="ps-logo" />
                </div>
                <div className="font-semibold pb-2 text-[22px]">
                    <p>PRODUCT SPACE</p>
                </div>
                <div className="text-gray-400 text-[16px] pb-2 md:pb-2">
                    <p>A Great Place to Upskill</p>
                </div>

                <div className="text-gray-400 text-[16px] pb-12 md:py-6">
                    <p>Copyright ©️ 2024 Propel Learnings. All Rights Reserved</p>
                </div>
            </div>

            <div className="flex justify-between md:gap-32">
                <div>
                    <p className="mb-3 font-semibold">RESOURCES</p>
                    <div className="flex flex-col gap-4 text-gray-400">
                        <a href="https://theproductspace.notion.site/Terms-and-Conditions-3a424120bc6a4b51a681e48b471da06c" target="_blank">Terms and Conditions</a>
                        <a href="https://theproductspace.notion.site/Privacy-Policy-Terms-3aa9b55d3e1f4bafb12dd6d00ff60c68" target="_blank">Privacy policy</a>
                        <a href="https://theproductspace.notion.site/Refund-Deferral-Discount-and-Cancellation-330088def6144266aa1e68d8a8c4b058" target="_blank">Refund policy</a>
                        <a href="https://theproductspace.notion.site/Contact-Us-9b3ba23c447a41bebc35e9a2b6b359e3" target="_blank">Contact us</a>
                    </div>
                </div>

                <div>
                    <p className="mb-3 font-semibold">FOLLOW US</p>
                    <div className="flex flex-col gap-4 text-gray-400">
                        <div>
                            <a href="https://www.linkedin.com/company/theproductspace/" target="_blank" className="flex items-center gap-2">
                                <FaLinkedinIn/> LinkedIn
                            </a>
                        </div>
                        <div>
                            <a href="https://discord.com/invite/2ytvQhDBS8" target="_blank" className="flex items-center gap-2"><FaDiscord /> Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer