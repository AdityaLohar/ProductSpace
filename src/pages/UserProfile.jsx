import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import avatars from "../data/Avatars";

const UserProfile = () => {
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
  const profileBg = colors[localStorage.getItem("userId") % colors.length];

  useEffect(() => {
    const getEmail = localStorage.getItem("email");
    const encodedEmail = encodeURIComponent(getEmail);

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

        if (error.response?.status === 401) {
          navigate("/"); // Redirect if status is 401
        } else {
          alert("Error in logging into account!");
        }
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleEdit = () => {
    setNewPhone(users?.mobile || "");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async () => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(newPhone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
      const url = `${PRODUCT_SPACE_API_HOST}/v1/user`;

      const res = await axios.put(
        url,
        {
          email: users.email,
          mobile: newPhone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response:", res);

      setUsers((prev) => ({ ...prev, mobile: newPhone }));
      setIsEditing(false);
      alert("Phone number updated successfully!");
    } catch (error) {
      console.error("Error updating phone number:", error.response || error);
      alert("Failed to update phone number.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 font-inter p-4">
      {users && (
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg w-full md:w-[500px] px-8 py-12 gap-6">
          {/* Profile Icon */}
          <div className="relative">
            {users.profileImage ? (
              <img
                src={users.profileImage}
                alt="User Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div
                className={`flex items-center justify-center h-20 w-20 text-[32px] rounded-full text-white`}
                style={{ backgroundColor: profileBg }}
              >
                {pic}
              </div>
            )}
          </div>

          {/* User Information */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {users.username ? users.username : "Username not set"}
            </h2>
            <p className="text-gray-500">{users.email}</p>
          </div>

          {/* Additional Details */}
          <div className="w-full flex flex-col gap-4">
            {/* <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600 font-medium">User ID:</span>
              <span className="text-gray-800">{users.id}</span>
            </div> */}
            <div className="flex justify-between border-b pb-2 items-center">
              <span className="text-gray-600 font-medium">Mobile:</span>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="border px-2 py-1 rounded w-32"
                    placeholder="Enter phone"
                  />
                  <button
                    onClick={handleSave}
                    className="text-green-500 bg-green-200 rounded-md"
                  >
                    <CheckIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-red-500 bg-red-200 rounded-md"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">
                    {users.mobile || "Not provided"}
                  </span>
                  <button onClick={handleEdit} className="text-gray-500">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
