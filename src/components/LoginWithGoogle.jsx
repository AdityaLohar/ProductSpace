import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { emailAtom } from "../atoms/modalState";

const LoginWithGoogle = () => {
  const setEmailAtom = useSetRecoilState(emailAtom);

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);

      // Data to send to the backend
      // const data = {
      //   email: decoded.email,
      // };

      const response = await axios.post(
        "http://18.234.212.47:8081/v1/user/auth",
        credentialResponse.credential,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // when success
      console.log(decoded.email)
      setEmailAtom(decoded.email);

      console.log("Backend Response:", response.data);

      // if response from backend is a success show this
      alert("Logged in with google successfully");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
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
