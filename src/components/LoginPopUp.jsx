import { useRecoilState, useSetRecoilState } from "recoil";
import { FaTimes } from "react-icons/fa";
import google from "../assets/google-square.svg";
import microsoft from "../assets/microsoft-square.svg";
import eyeSlash from "../assets/eye-slash.svg";
import {
  isOpenLogin,
  isOpenSignin,
  isVisibleLogin,
  isVisibleSignin,
} from "../atoms/modalState";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginPopUp = () => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleLogin); // Recoil for visibility
  const [isOpen, setIsOpen] = useRecoilState(isOpenLogin);

  const [type, setType] = useState("password");
  const [eye, setEye] = useState(eyeSlash);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setIsLoginVisible = useSetRecoilState(isVisibleSignin);
  const setIsLoginOpen = useSetRecoilState(isOpenSignin);

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const toggleSignup = () => {
    setIsOpen(false);
    setIsVisible(false);

    setIsLoginOpen(true);
    setIsLoginVisible(true);
  };

  const [isRemembered, setIsRemembered] = useState(false);

  const handleCheckboxChange = () => {
    setIsRemembered(!isRemembered);
  };

  const toggleShowPassword = () => {
    if (type === "password") {
      setType("text");
      setEye(eyeSlash);
    } else {
      setType("password");
      setEye(eyeSlash);
    }
  };

  const handleSubmit = () => {
    alert("success");
  };  


  // Once successful login happens, store the data somewhere and do the logic part
  // then close the modal
  const LoginWithGoogle = () => {
    return (
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log(decoded);
          const fname = decoded.given_name;
          const lname = decoded.family_name;
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    );
  };

  return (
    <div>
      <button onClick={toggleModal}>Click Me</button>
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
            <div className="rounded-xl bg-white flex flex-col gap-4 lg:gap-4 w-[300px] sm:w-[400px] lg:w-[600px] mx-auto items-center py-12 px-8 lg:px-20 font-inter transform transition-transform duration-300 ease-out">
              <button
                onClick={toggleModal}
                className="absolute top-4 right-5 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>

              <div className="text-[24px]">Log In to continue</div>

              {/* <button className="text-[14px] lg:text-[16px] py-1 lg:py-1 rounded-xl text-[#737373] border border-[#D4D4D4] bg-white w-full flex items-center justify-center">
                <img src={google} alt="" className="h-8 lg:h-10" />
                <p>Sign in with Google</p>
              </button> */}
              <LoginWithGoogle />

              {/* <button className="text-[14px] lg:text-[16px] py-3 lg:py-4 rounded-xl text-[#737373] border border-[#D4D4D4] bg-white w-full flex gap-2 lg:gap-3 items-center justify-center">
                <img src={microsoft} alt="" className="h-3 lg:h-4" />
                <p>Continue with Microsoft</p>
              </button> */}

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

              <div className="flex flex-col gap-3 w-full text-[#737373] text-[14px] lg:text-[16px]">
                <div className="flex flex-col gap-1">
                  <p>Email</p>
                  <input
                    type="email"
                    placeholder="abc@yourdomain.com"
                    className="p-3 lg:p-4 rounded-xl border border-[#D4D4D4] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Password</p>
                  <div className="flex justify-between p-2 lg:p-3 rounded-xl border border-[#D4D4D4]">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type={type}
                      className="outline-none"
                    />
                    <img
                      onClick={toggleShowPassword}
                      src={eye}
                      alt=""
                      className="h-6 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex justify-between text-[#333] text-[12px] lg:text-[14px]">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="cursor-pointer"
                      checked={isRemembered}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="rememberMe" className="cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <div className="cursor-pointer">Forgot password?</div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full text-center text-white bg-[#4F90F0] p-3 lg:p-4 rounded-xl"
                >
                  <p>Login</p>
                </button>
              </div>

              <div className="w-full text-start text-[12px] lg:text-[14px] text-[#737373]">
                Don&apos;t have an account?{" "}
                <button onClick={toggleSignup} className="underline text-black">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopUp;
