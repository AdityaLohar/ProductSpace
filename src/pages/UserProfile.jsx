import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { emailAtom } from "../atoms/modalState";

const UserProfile = () => {
  const [users, setUsers] = useState();

  
  useEffect(() => {
    const getEmail = localStorage.getItem("email");
    const encodedEmail = encodeURIComponent(getEmail);

    const url = `http://18.234.212.47:8081/v1/user/search?email=${encodedEmail}&isPaged=false&page=0&size=1&sort=string&matchingAny=true`;
    // const url = `http://18.234.212.47:8081/v1/user/search?email=lohar%40gmail.com&isPaged=false&page=0&size=1&sort=string&matchingAny=true`;
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Backend Response:", response);
        const data = response.data.pageData.content;
        console.log(data[0]);
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
    <div className="h-screen font-inter">
      {users && (
        <div className="flex flex-col gap-4 bg-gray-100 md:w-[600px] px-6 md:px-20 py-12">
          <div className="flex w-full justify-between border-b-2 border-gray-300 pb-2">
            <div className="font-semibold">User Id</div>
            <div>{users.id}</div>
          </div>

          <div className="flex w-full justify-between border-b-2 border-gray-300 pb-2">
            <div className="font-semibold">Username</div>
            <div>{users.username || "username not set"}</div>
          </div>

          <div className="flex w-full justify-between border-b-2 border-gray-300 pb-2">
            <div className="font-semibold">Email</div>
            <div>{users.email}</div>
          </div>

          <div className="flex w-full justify-between border-b-2 border-gray-300 pb-2">
            <div className="font-semibold">Phone Number</div>
            <div>{users.mobile}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
