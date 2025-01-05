{/*
    1. email is hardcoded now, get email automatically when user clicks on link in email and comes to the page
    2. after submitting need to send api req to backend with new password    
*/}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [users, setUsers] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [newPhone, setNewPhone] = useState("");
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const colors = [
    "#0D49C3",
    "#1C99B8",
    "#1B7850",
    "#FB8B18",
    "#DE3112",
    "#4939A2",
    "#142546",
  ];
  const pic =
    username.split(" ").length > 1
      ? username.split(" ")[0][0] + username.split(" ")[1][0]
      : username.split(" ")[0][0] + username.split(" ")[0][1];
  //   const profileBg = colors[localStorage.getItem("userId") % colors.length];
  const profileBg = colors[3 % colors.length];

  useEffect(() => {
    // const getEmail = localStorage.getItem("email");
    // const encodedEmail = encodeURIComponent(getEmail);
    const encodedEmail = "adityalohar55@gmail.com";

    const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
    const url = `${PRODUCT_SPACE_API_HOST}/v1/user/search?email=${encodedEmail}&isPaged=false&page=0&size=1&sort=string&matchingAny=true`;
    const token = localStorage.getItem("token");

    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        });

        console.log("Backend Response from users profile:", response);
        const data = response.data.pageData.content;

        if (data && data.length > 0) {
          setUsers(data[0]);
        } else {
          alert("user not found");
          navigate("/"); // Redirect if no user data is found
        }
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }

    };

    fetchUsers();
  }, [navigate]);

  const validateForm = () => {
    const errors = {};
    if (!newPassword || newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters long.";
    }
    if (!confirmPassword || confirmPassword !== newPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Password updated successfully!");
      // Perform further actions like API calls here
    }
  };

  return (
    <div className="font-inter max-w-md mx-auto my-12 lg:my-20 bg-white rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Forget Password
      </h1>

      {users && <div className="flex flex-col gap-8 border p-6 mx-6 lg:mx-0 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div
              className={`flex items-center justify-center h-20 w-20 text-[32px] rounded-full text-white`}
              style={{ backgroundColor: profileBg }}
            >
              {pic}
            </div>
          </div>

          {/* User Information */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {users.username ? users.username : "Username not set"}
            </h2>
            <p className="text-gray-500">{users.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="text-[14px] lg:text-[16px]">
          {/* New Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                className={`w-full px-4 py-2 border ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm New Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={`w-full px-4 py-2 border ${
                  errors.confirmPassword ||
                  (confirmPassword && confirmPassword !== newPassword)
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {confirmPassword && confirmPassword !== newPassword && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-medium py-3 px-5 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>}
    </div>
  );
};

export default ForgetPassword;
