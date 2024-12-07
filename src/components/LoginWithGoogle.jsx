import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import {
  authAtom,
  emailAtom,
} from "../atoms/modalState";
import { useNavigate } from "react-router-dom";

const LoginWithGoogle = () => {
  const setEmailAtom = useSetRecoilState(emailAtom);
  const setAuth = useSetRecoilState(authAtom);
  const navigate = useNavigate();

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);

      const response = await axios.post(
        // "http://34.233.178.37:8081/swagger-ui/index.html#/auth-controller/authenticateWithGoogle",
        "http://localhost:8081/v1/api/auth/google",
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
