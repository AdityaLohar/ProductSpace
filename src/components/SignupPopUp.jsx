import { useRecoilState, useSetRecoilState } from "recoil";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import eyeSlash from "../assets/eye-slash.svg";
import {
  isOpenLogin,
  isOpenSignin,
  isVisibleLogin,
  isVisibleSignin,
} from "../atoms/modalState";
import axios from "axios";
import LoginWithGoogle from "./LoginWithGoogle";

// const SignupWithGoogle = memo(() => {
//   const handleGoogleLogin = async (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log("decoded :: ", decoded);
//       console.log("credentialResponse.credential :: ", credentialResponse.credential);
//       // Data to send to the backend
//       const data = {
//         email: decoded.email, // Decoded email
//       };

//       const response = await axios.post(
//         "http://localhost:8081/v1/api/auth/google",
//         credentialResponse.credential,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       // if backend response is success show alert of signin

//       console.log("Backend Response:", response.data);
//     } catch (error) {
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleGoogleLogin}
//       onError={() => console.log("Login Failed")}
//     />
//   );
// });

// // Set display name for memoized component
// SignupWithGoogle.displayName = "SignupWithGoogle";

const SignupPopUp = () => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleSignin);
  const [isOpen, setIsOpen] = useRecoilState(isOpenSignin);

  const [type1, setType1] = useState("password");
  const [eye1, setEye1] = useState(eyeSlash);

  const [type2, setType2] = useState("password");
  const [eye2, setEye2] = useState(eyeSlash);

  const setIsLoginVisible = useSetRecoilState(isVisibleLogin);
  const setIsLoginOpen = useSetRecoilState(isOpenLogin);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);
  const [matchPassword, setIsMatchPassword] = useState(true);

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const toggleLogin = () => {
    setIsOpen(false);
    setIsVisible(false);
    setIsLoginOpen(true);
    setIsLoginVisible(true);
  };

  const toggleShowPassword = () => {
    setType1(type1 === "password" ? "text" : "password");
  };

  const toggleShowConfirmPassword = () => {
    setType2(type2 === "password" ? "text" : "password");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsMatchPassword(value === confirmPassword || !confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsMatchPassword(password === value || !password);
  };

  /* 
    1. validate email
    2. check empty fields
    3. send backend req
  */
  const handleSubmit = async () => {
    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate email
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate Phone number
    if (phone.length < 10) {
      alert("Enter Valid Phone Number");
      return;
    }

    // Check if password is empty
    if (password.length < 6) {
      alert("Password must be of atleast 6 letter");
      return;
    }

    // Check if passwords match
    if (!matchPassword) {
      alert("Passwords do not match.");
      return;
    }

    const data = {
      email: email,
      password: password,
      mobile: phone,
    };
    const PRODUCT_SPACE_API = 'http://18.234.212.47:8081/v1/user';
    // const PRODUCT_SPACE_API = 'http://localhost:8081/v1/user';

    try {
      const response = await axios.post(PRODUCT_SPACE_API, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Backend Response:", response.data);

      // if success redirect to login pop up
      alert("Account created successfully!");
      toggleLogin();

      // else show error
    } 
    catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );

      alert("Error in creating account!");
    }
  };

  return (
    <div>
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
            <div className="rounded-xl bg-white flex flex-col gap-4 w-[300px] sm:w-[400px] md:w-[600px] mx-auto items-center py-8 px-8 lg:px-20 font-inter transform transition-transform duration-300 ease-out">
              <button
                onClick={toggleModal}
                className="absolute top-4 right-5 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>

              <div className="text-[24px]">Sign In to continue</div>

              <div className="flex flex-col md:flex-row justify-between gap-4">
                <LoginWithGoogle />
                {/* <SignupWithGoogle /> */}
              </div>

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
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc@yourdomain.com"
                    className="p-3 lg:p-4 rounded-xl border border-[#D4D4D4] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p>Phone Number</p>
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=""
                    className="p-3 lg:p-4 rounded-xl border border-[#D4D4D4] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p>Password</p>
                  <div className="flex justify-between p-2 lg:p-3 rounded-xl border border-[#D4D4D4]">
                    <input
                      onChange={handlePasswordChange}
                      type={type1}
                      className="outline-none"
                    />
                    <img
                      onClick={toggleShowPassword}
                      src={eye1}
                      alt=""
                      className="h-6 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p>Confirm Password</p>
                  <div className="flex justify-between p-2 lg:p-3 rounded-xl border border-[#D4D4D4]">
                    <input
                      onChange={handleConfirmPasswordChange}
                      type={type2}
                      className="outline-none"
                    />
                    <img
                      onClick={toggleShowConfirmPassword}
                      src={eye2}
                      alt=""
                      className="h-6 cursor-pointer"
                    />
                  </div>
                  <p
                    className={`${
                      matchPassword ? "hidden" : "flex"
                    } text-red-400`}
                  >
                    Both passwords didn&apos;t match
                  </p>
                </div>

                <div className="flex justify-between text-[#333] text-[12px] lg:text-[14px]">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="cursor-pointer"
                      checked={isRemembered}
                      // onChange={handleCheckboxChange}
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
                  <p>Create Account</p>
                </button>
              </div>

              <div className="w-full text-start text-[12px] lg:text-[14px] text-[#737373]">
                Already have an account?{" "}
                <button onClick={toggleLogin} className="underline text-black">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPopUp;
