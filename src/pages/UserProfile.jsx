import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const UserProfile = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getEmail = localStorage.getItem("email");
    const encodedEmail = encodeURIComponent(getEmail);

    const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
    const url = `${PRODUCT_SPACE_API_HOST}/v1/user/search?email=${encodedEmail}&isPaged=false&page=0&size=1&sort=string&matchingAny=true`;

    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Backend Response:", response);
        const data = response.data.pageData.content;
        setUsers(data[0]);
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );

        alert("Error in logging into account!");
      }
    };

    fetchUsers();
  }, []);

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
              <UserCircleIcon className="w-24 h-24 text-gray-400" />
            )}
          </div>

          {/* User Information */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {users.email ? users.email.split("@")[0] : "Username not set"}
            </h2>
            <p className="text-gray-500">{users.email}</p>
          </div>

          {/* Additional Details */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600 font-medium">User ID:</span>
              <span className="text-gray-800">{users.id}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600 font-medium">Phone:</span>
              <span className="text-gray-800">
                {users.mobile || "Not provided"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
