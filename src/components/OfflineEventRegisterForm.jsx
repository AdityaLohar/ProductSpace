import axios from "axios";
import arrowIcon from "../assets/right-arrow.svg";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import upiImage from "../assets/upi-akhil.jpg";

const airtableBaseUrl = import.meta.env.VITE_AIRTABLE_BASE_OFFLINE_EVENT_URL;
const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

const OfflineEventRegisterForm = ({ setShowSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyCollege: "",
    designation: "",
    paymentScreenshot: "",
    linkedin: "",
    // status: "Select an option",
  });

  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const saveUserData = async (
    name,
    email,
    phoneNumber,
    companyCollege,
    designation,
    linkedin,
    paymentScreenshot,
    currentTimestamp,
    formattedTimestamp
  ) => {
    try {
      const response = await axios.post(
        airtableBaseUrl,
        {
          fields: {
            Name: name,
            "Email Id": email, // Make sure this matches exactly
            "Mobile Number": phoneNumber, // Make sure this matches exactly
            "Unique Id": currentTimestamp.toString(),
            "Company/College": companyCollege,
            "Designation": designation,
            "Linkedin": linkedin,
            Timestamp: formattedTimestamp,
            "Payment Screenshot": paymentScreenshot,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Use the personal access token here
            "Content-Type": "application/json",
          },
        }
      );

      setShowSuccess(true);
      setPopupVisible(false);
      // alert("You are registered successfully!");
    } catch (error) {
      setNotification({
        type: "error",
        title: "Error",
        description: "Error in saving you data in air table",
      });

      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      console.error("Error saving data:", error);

      return;
    }
  };

  const handleSubmit = async () => {
    // Regular expressions for validation
    const phoneNumberRegex = /^\d{10}$/; // 10 digits only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;

    if (formData.name === "") {
      setNotification({
        type: "error",
        title: "Error",
        description: "Name cannot be empty",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return;
    } else if (!emailRegex.test(formData.email)) {
      setNotification({
        type: "error",
        title: "Error",
        description: "Enter correct email",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return;
    } 
    else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setNotification({
        type: "error",
        title: "Error",
        description: "Enter correct phone number",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return;
    }
    else if (formData.companyCollege === "" || formData.designation === "" || formData.linkedin === "") {
      setNotification({
        type: "error",
        title: "Error",
        description: "Fill in all details",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return;
    }
    
    // else if (formData.status == "Select an option") {
    //   setNotification({
    //     type: "error",
    //     title: "Error",
    //     description: "Enter all required fields",
    //   });
    //   setShowNotification(true);
    //   setTimeout(() => {
    //     setShowNotification(false);
    //   }, 5000);
    //   return;
    // }

    setPopupVisible(true);
  };

  const handlePopupSubmit = async () => {
    if (!paymentScreenshot) {
      alert("Please attach a screenshot.");
      return;
    }

    const cloudData = new FormData();
    cloudData.append("file", paymentScreenshot);
    cloudData.append("upload_preset", "psofflineevent");
    cloudData.append("cloud_name", "dvhebnqvp");

    const cloudinaryApi =
      "https://api.cloudinary.com/v1_1/dvhebnqvp/image/upload";
    const cloudRes = await axios.post(cloudinaryApi, cloudData);
    const cloudUrl = cloudRes.data.url;
    
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phone);
    formDataToSend.append("companyCollege", formData.companyCollege);
    formDataToSend.append("linkedin", formData.linkedin);
    formDataToSend.append("paymentScreenshot", cloudUrl);

    // console.log("Form Data:", formData);
    // console.log("Payment Screenshot:", paymentScreenshot);
    // console.log(formDataToSend);

    const currentTimestamp = Date.now();
    const formattedTimestamp = new Date().toLocaleString(); // e.g., "10/7/2024, 12:34:56 PM"
    const res = await saveUserData(
      formData.name,
      formData.email,
      formData.phoneNumber,
      formData.companyCollege,
      formData.designation,
      formData.linkedin,
      cloudUrl,
      currentTimestamp,
      formattedTimestamp
    );
    setLoading(false);
  };

  const handleFileChange = (e) => {
    setPaymentScreenshot(e.target.files[0]);
  };

  // Update form data on change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" bg-white rounded-xl">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="text-[20px] lg:text-[28px] font-semibold">
          <h2>Registration Form</h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#525966]">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              className="border border-[#C1C1C1] rounded-md px-3 py-3 w-full md:w-[80%] outline-none"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#525966]">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              className="border border-[#C1C1C1] rounded-md px-3 py-3 w-full md:w-[80%] outline-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            <div className="relative w-full md:w-[44%]">
              <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#525966]">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder=""
                className="border border-[#C1C1C1] rounded-md px-3 py-3 w-full md:w-[80%] outline-none"
              />
            </div>
            <div className="relative w-full md:w-[44%]">
              <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#525966]">
                Designation<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder=""
                className="border border-[#C1C1C1] rounded-md px-3 py-3 w-full md:w-[80%] outline-none"
              />
            </div>

          </div>


          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#525966]">
              Company/College<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyCollege"
              value={formData.companyCollege}
              onChange={handleChange}
              placeholder=""
              className="border border-[#C1C1C1] rounded-md px-3 py-3 w-full md:w-[80%] outline-none"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#525966]">
              LinkedIn Profile<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder=""
              className="border border-[#C1C1C1] rounded-md px-3 py-3 w-full md:w-[80%] outline-none"
            />
          </div>

          {/* <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#525966]">
              Status of Education / Employment
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-[#C1C1C1] rounded-md px-3 py-3 w-full md:w-[80%] outline-none bg-white"
              required
            >
              <option value="">Select an option</option>
              <option value="Students">Students</option>
              <option value="PMs (0 to 3 Yr exp.)">PMs (0 to 3 Yr exp.)</option>
              <option value="PMs (3+ Yrs exp.)">PMs (3+ Yrs exp.)</option>
              <option value="Non Product Professional">
                Non Product Professional
              </option>
              <option value="Others">Others</option>
            </select>
          </div> */}

          <div>
            <button
              onClick={handleSubmit}
              className="flex w-full md:w-[300px] gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white"
            >
              <p className="text-[18px] md:text-[20px] font-medium">
                {loading ? "Loading..." : "Register Now"}
              </p>
              <img src={arrowIcon} alt="icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Notification Section */}
      {notification && (
        <div
          className={`z-10 fixed left-1/2 transform -translate-x-1/2 ${
            showNotification ? "bottom-4 opacity-100" : "-bottom-20 opacity-0"
          } transition-all duration-500 ease-in-out z-80 max-w-[340px] md:max-w-[400px] w-full`}
        >
          <div
            className={`flex items-center justify-between gap-3 p-4 rounded-lg shadow-lg ${
              notification.type === "success"
                ? "bg-gradient-to-r from-green-400 to-green-600"
                : "bg-gradient-to-r from-red-400 to-red-600"
            } text-white`}
          >
            {/* Icon */}
            <div className="text-2xl">
              {notification.type === "success" ? (
                <FaCheckCircle />
              ) : (
                <FaExclamationCircle />
              )}
            </div>

            {/* Notification Content */}
            <div className="flex flex-col">
              <span className="font-bold text-lg">{notification.title}</span>
              <span className="text-sm">{notification.description}</span>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowNotification(false)}
              className="text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {popupVisible && (
        <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">Payment Details</h3>
            <p className="mb-4">Scan the QR code below to make a payment.</p>
            <div className="flex justify-center mb-4">
              <img src={upiImage} alt="QR Code" className="w-60 h-60" />
            </div>
            <div className="mb-4">
              <label
                htmlFor="paymentScreenshot"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Payment Screenshot
              </label>
              <input
                type="file"
                accept="image/*"
                id="paymentScreenshot"
                onChange={handleFileChange}
                className="mt-1 block w-full"
              />
            </div>
            <button
              onClick={handlePopupSubmit}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfflineEventRegisterForm;
