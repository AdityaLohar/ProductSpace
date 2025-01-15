import axios from "axios";
import React, { useEffect, useState } from "react";
import greenTick from "../assets/tick-green.svg";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const RegisterationSuccess = ({ toggleSuccess }) => {
  return (
    <div className="bg-white p-6 pb-12 mx-4 md:mx-0 rounded-xl">
      <div className="flex justify-end">
        <button onClick={toggleSuccess}>✖</button>
      </div>

      <div className="text-[14px] text-center flex flex-col gap-8 items-center">
        <div className="flex justify-center">
          <img src={greenTick} alt="" className="h-10" />
        </div>

        <div className="flex flex-col gap-3 lg:w-3/4 justify-center">
          <div className="text-[20px] lg:text-[24px] font-semibold">
            You&apos;ve successfully registered for AI for PMs workshop
          </div>
          <div className="text-[14px] lg:text-[16px]">
            You will receive email on the next steps shortly
          </div>
        </div>

        <button className="bg-[#24304C] text-white p-4 text-[16px] lg:text-[18px] rounded-xl px-4 lg:px-12">
          <a
            href="https://chat.whatsapp.com/GyOBDk1JVJvArbj7wnVb3i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full h-full"
          >
            Join Our AI Community
          </a>
        </button>
      </div>
    </div>
  );
};

const FormField = ({ label, type, id, name, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-[12px] lg:text-[16px] font-medium mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`border rounded-md px-3 py-2 text-[12px] lg:text-[16px] focus:outline-none ${
          error ? "border-red-500 focus:ring-red-200" : "focus:ring-blue-200"
        }`}
        placeholder={`${id == "linkedin" ? "Optional" : ""}`}
      />
      {error && (
        <span className="text-red-500 text-[10px] lg:text-[12px]">
          {label} is required
        </span>
      )}
    </div>
  );
};

const Notification = ({
  setShowNotification,
  showNotification,
  notification,
}) => {
  if (!notification) {
    return null; // Don't render anything if there's no notification
  }

  return (
    <div
      className={`fixed left-1/2 top-1/3 transform -translate-x-1/2 ${
        showNotification
          ? "translate-y-1/3 opacity-100"
          : "translate-y-full opacity-0"
      } transition-all duration-500 ease-in-out z-50 max-w-[340px] md:max-w-[400px] w-full`}
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
          <span className="text-[12px] lg:text-[16px]">
            {notification.description}
          </span>
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
  );
};

const EventGenAiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    linkedin: "",
    userType: "",
    role: "",
    otherRole: "",
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const airtableBaseUrl = import.meta.env
    .VITE_AIRTABLE_BASE_AI_FOR_PM_REGISTER_URL;
  const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSuccess = () => {
    setShowSuccess(!showSuccess);
  };

  //   const getEntryCount = async () => {
  //     try {
  //       const response = await axios.get(airtableBaseUrl, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const totalEntries = response.data.records.length;
  //       return totalEntries;
  //     } catch (error) {
  //       console.error("Error fetching entries:", error);
  //       return 0;
  //     }
  //   };

  const saveUserData = async (
    name,
    email,
    phoneNumber,
    linkedin,
    userType,
    role,
    otherRole,
    currentTimestamp
  ) => {
    try {
      console.log("here");
      setLoading(true);
      const response = await axios.post(
        airtableBaseUrl,
        {
          fields: {
            Name: name,
            "Mobile Number": phoneNumber,
            "Email Id": email,
            Linkedin: linkedin,
            Timestamp: currentTimestamp,
            "Student/Working": userType,
            Role: role == "Other" ? otherRole : role,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("outside");

      setLoading(false);
      toggleSuccess();
      setTimeout(() => {
        window.location.href =
          "https://chat.whatsapp.com/GyOBDk1JVJvArbj7wnVb3i";
        setShowNotification(false);
      }, 6000);
    } catch (error) {
      console.log(error);
      setNotification({
        type: "error",
        title: "Error",
        description: "Error in saving you data",
      });

      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Clear 'otherRole' if a different role is selected
      ...(name === "role" && value !== "Other" ? { otherRole: "" } : {}),
    }));

    // Clear error if value is not empty
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields: name, email, contact
    const newErrors = {};
    ["name", "email", "contact"].forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });

    if (formData.contact.length < 5) {
      newErrors.contact = "Contact number must be at least 5 digits long";
    }

    if (formData.role === "Other" && !formData.otherRole) {
      newErrors.otherRole = "Please specify your role";
    }

    // Set errors and return if there are any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, log the form data
    setLoading(true);
    const currentTimestamp = new Date().toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Ensures 24-hour format
    });

    // const totalEntries = await getEntryCount();
    console.log(formData);
    // toggleSuccess();

    const res = await saveUserData(
      formData.name,
      formData.email,
      formData.contact,
      formData.linkedin,
      formData.userType,
      formData.role,
      formData.otherRole,
      currentTimestamp
    );

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center font-inter text-[#222] p-8">
      <div className="flex flex-col gap-4 w-full max-w-[700px] bg-white rounded-lg p-0 lg:p-6">
        <div className="text-[22px] lg:text-[32px] font-bold text-center">
          Complete your Application
        </div>

        <form
          className="flex flex-col gap-4 lg:gap-6 rounded-md p-4 border"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <FormField
              label="Full Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              disabled={loading}
            />
            <FormField
              label="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              disabled={loading}
            />
            <FormField
              label="Phone Number"
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              error={errors.contact}
              disabled={loading}
            />
            <FormField
              label="LinkedIn Profile"
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              error={errors.linkedin}
              disabled={loading}
            />
          </div>

          <div>
            <label
              htmlFor="userType"
              className="block text-[12px] lg:text-[16px] font-medium text-gray-700"
            >
              What best describes you?
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              disabled={loading}
              className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-200 focus:border-blue-200 text-[12px] lg:text-[16px]"
            >
              <option value="">Select an option</option>
              <option value="Student">Student/Fresher</option>
              <option value="Working Professional">Working Professional</option>
            </select>
            {errors.userType && (
              <p className="text-red-500 text-[12px] lg:text-[16px]">
                {errors.userType}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-[12px] lg:text-[16px] font-medium text-gray-700"
            >
              What best describes your role?
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled={loading || !formData.userType}
              className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black text-[12px] lg:text-[16px]"
            >
              <option value="">Select an option</option>
              {formData.userType === "Student" ? (
                <>
                  <option value="Final Year">Final Year</option>
                  <option value="Pre Final Year">Pre-Final Year</option>
                  <option value="Graduated">Graduated</option>
                </>
              ) : formData.userType === "Working Professional" ? (
                <>
                  <option value="Product">Product</option>
                  <option value="Tech">Technology</option>
                  <option value="Marketing">Marketing/Business</option>
                  <option value="Design">Design</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Other">Other</option>
                </>
              ) : null}
            </select>

            {formData.role === "Other" && (
              <div className="mt-4">
                <label
                  htmlFor="otherRole"
                  className="block text-[12px] lg:text-[16px] font-medium text-gray-700"
                >
                  Please specify your role:
                </label>
                <input
                  type="text"
                  id="otherRole"
                  name="otherRole"
                  value={formData.otherRole || ""}
                  onChange={handleChange}
                  disabled={loading}
                  className={`mt-2 p-2 block w-full rounded-md border ${
                    errors.otherRole
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  } shadow-sm focus:ring-black focus:border-black text-[12px] lg:text-[16px]`}
                  placeholder="Enter your role"
                />
                {errors.otherRole && (
                  <p className="mt-1 text-red-500 text-[12px]">
                    {errors.otherRole}
                  </p>
                )}
              </div>
            )}

            {errors.role && (
              <p className="text-red-500 text-[12px] lg:text-[16px]">
                {errors.role}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md text-[12px] lg:text-[16px] font-medium transition duration-300"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <RegisterationSuccess toggleSuccess={toggleSuccess} />
        </div>
      )}

      <Notification
        setShowNotification={setShowNotification}
        showNotification={showNotification}
        notification={notification}
      />
    </div>
  );
};

export default EventGenAiForm;
