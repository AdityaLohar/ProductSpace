import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// import { Analytics } from '@vercel/analytics/react'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="242134073475-f31ebcc25dac0s6t9v3b99pvtuoumi1d.apps.googleusercontent.com">
      <Router>
        {/* <Analytics /> */}
        <App />
      </Router>
    </GoogleOAuthProvider>
    ;
  </StrictMode>
);
