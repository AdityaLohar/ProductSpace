import React, { useState } from "react";
import authBg from "../assets/auth-bg.png";
import eyeSlash from "../assets/eye-slash.svg";
import google from "../assets/google-square.svg";
import microsoft from "../assets/microsoft-square.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [type, setType] = useState("password");
  const [eye, setEye] = useState(eyeSlash);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="flex lg:grid lg:grid-cols-2 h-[90vh] lg:h-full auth-bg-custom">
      <div className="hidden lg:flex lg:flex-col h-screen w-full overflow-hidden">
        <img src={authBg} alt="" className="w-full" />
      </div>

      <div className="mx-auto rounded-xl flex flex-col gap-4 lg:gap-6 w-[330px] sm:w-[430px] lg:w-[600px] mx-auto items-center my-auto bg-white px-8 lg:px-20 font-inter transform transition-transform duration-300 ease-out py-8">
        <div className="text-[24px] text-[#333]">Log in to your account</div>

        <button className="lg:text-[14px] py-0 lg:py-1 rounded-xl text-[#737373] border border-[#D4D4D4] bg-white w-full flex items-center justify-center">
          <img src={google} alt="" className="h-10" />
          <p>Sign in with Google</p>
        </button>

        <button className="lg:text-[14px] py-3 lg:py-4 rounded-xl text-[#737373] border border-[#D4D4D4] bg-white w-full flex gap-3 items-center justify-center">
          <img src={microsoft} alt="" className="h-4" />
          <p>Continue with Microsoft</p>
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

        <div className="flex flex-col gap-3 w-full text-[#737373] text-[14px] lg:text-[16px]">
          <div className="flex flex-col gap-1">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="abc@yourdomain.com"
              className="p-3 lg:p-4 rounded-xl border border-[#D4D4D4] placeholder-[#DEDEDE] text-[#333] outline-none"
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
          <Link to={"/signup"} className="underline text-[#333]">Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
