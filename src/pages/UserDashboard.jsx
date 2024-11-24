import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://18.234.212.47:8081/v1/user", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Backend Response:", response.data.objectList);
        setUsers(response.data.objectList);
      } 
      catch (error) {
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
    <div className="flex flex-col gap-4">
        {users.map((user, id) => (
            <div key={id} className="flex gap-12">
                <div>{id}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <div>{user.mobile}</div>
            </div>
        ))}
    </div>
  ) 
};

export default UserDashboard;
