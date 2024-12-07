import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  authAtom,
  emailAtom,
  isOpenLogin,
  isOpenSignin,
  isVisibleLogin,
  isVisibleSignin,
} from "../atoms/modalState";
import { useNavigate } from "react-router-dom";

const LoginWithGoogle = () => {
  const setEmailAtom = useSetRecoilState(emailAtom);
  const setAuth = useSetRecoilState(authAtom);
  const navigate = useNavigate();

  const setIsVisible = useSetRecoilState(isVisibleSignin);
  const setIsOpen = useSetRecoilState(isOpenSignin);
  const setIsVisibleLogin = useSetRecoilState(isVisibleLogin); // Recoil for visibility
  const setIsOpenLogin = useSetRecoilState(isOpenLogin);

  const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
  const PRODUCT_SPACE_API = `${PRODUCT_SPACE_API_HOST}/v1/api/auth/google`;

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);

      const response = await axios.post(
        PRODUCT_SPACE_API,
        credentialResponse.credential,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // when success
      console.log(decoded.email);
      setEmailAtom(decoded.email);

      console.log("Backend Response:", response.data);

      const token = response.data.object;
      localStorage.setItem("token", token);
      localStorage.setItem("email", decoded.email);
      setAuth(true);
      setIsOpen(false);
      setIsOpenLogin(false);
      setIsVisible(false);
      setIsVisibleLogin(false);

      setTimeout(() => navigate("/user/profile"), 300);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );

      alert("Login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.log("Login Failed")}
    />
  );
};

export default LoginWithGoogle;
