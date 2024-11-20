import { useRecoilState } from "recoil";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import google from "../assets/google-square.svg";
import microsoft from "../assets/microsoft-square.svg";
import { isOpenSignin, isVisibleSignin } from "../atoms/modalState";

const SignupPopUp = () => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleSignin); // Recoil for visibility
  const [isOpen, setIsOpen] = useRecoilState(isOpenSignin);

  const toggleModal = () => {
    setIsVisible(false);
    setIsOpen(false);
  };

  const toggle2 = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={toggle2}>Click</button>
      {isOpen && (
        <div>
          {/* Modal overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-[12px] z-50"
            onClick={toggleModal}
          ></div>

          <div
            className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-300 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <div className="rounded-xl bg-white flex flex-col gap-4 lg:gap-8 w-[300px] sm:w-[400px] lg:w-[600px] mx-auto items-center py-12 px-8 lg:px-20 font-inter transform transition-transform duration-300 ease-out">
              <button
                onClick={toggleModal}
                className="absolute top-4 right-5 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>

              <div className="text-[24px] lg:text-[32px]">Sign In to continue</div>

              <button className="text-[16px] lg:text-[18px] py-0 lg:py-1 rounded-xl text-[#737373] border border-[#D4D4D4] bg-white w-full flex items-center justify-center">
                <img src={google} alt="" className="h-10 lg:h-12" />
                <p>Sign in with Google</p>
              </button>

              <button className="text-[16px] lg:text-[18px] py-3 lg:py-4 rounded-xl text-[#737373] border border-[#D4D4D4] bg-white w-full flex gap-3 items-center justify-center">
                <img src={microsoft} alt="" className="h-4 lg:h-6"/>
                <p>Sign in with Microsoft</p>
              </button>

              <div className="flex gap-2 w-full items-center">
                <div className="w-full text-transparent">
                  <div className="border-b-2 border-[#D4D4D4]">a</div>
                  <div>a</div>
                </div>
                <div>or</div>
                <div className="w-full text-transparent">
                  <div className="border-b-2 border-[#D4D4D4]">a</div>
                  <div>a</div>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full text-[#737373] text-[14px] lg:text-[16px]">
                <div className="flex flex-col gap-1">
                  <p>Email</p>
                  <input
                    type="email"
                    placeholder="abc@yourdomain.com"
                    className="p-3 lg:p-4 rounded-xl border border-[#D4D4D4] outline-none"
                  />
                </div>
                <button className="w-full text-center text-white bg-[#4F90F0] p-3 lg:p-4 rounded-xl">
                  <p>Verify Mail</p>
                </button>
              </div>

              <div className="w-full text-start text-[14px] lg:text-[16px]">
                Already have an account?{" "}
                <button className="underline">Log in</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPopUp;
