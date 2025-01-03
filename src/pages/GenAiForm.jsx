import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

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
    // <div
    //   className={`fixed left-1/2 transform -translate-x-1/2 ${
    //     showNotification ? "bottom-4 opacity-100" : "-bottom-20 opacity-0"
    //   } transition-all duration-500 ease-in-out z-50 max-w-[340px] md:max-w-[400px] w-full`}
    // >
    <div
      className={`fixed top-12 transform translate-y-12 ${
        showNotification ? "right-4 opacity-100" : "-right-20 opacity-0"
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
  );
};

const GenAiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    linkedin: "",
    reason: "",
    productExperience: "",
    yearsExperience: "",
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const airtableBaseUrl = import.meta.env.VITE_AIRTABLE_GEN_AI_ENROLLMENT_URL;
  const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getEntryCount = async () => {
    try {
      const response = await axios.get(airtableBaseUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const totalEntries = response.data.records.length;
      return totalEntries;
    } catch (error) {
      console.error("Error fetching entries:", error);
      return 0;
    }
  };

  const saveUserData = async (
    name,
    email,
    phoneNumber,
    linkedin,
    currentTimestamp,
    totalEntries
  ) => {
    try {
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
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setNotification({
        type: "success",
        title: "Application Submitted!",
        description: `You are in waitlist ${
          80 + 2 * Math.abs(totalEntries - 70)
        }`,
      });
      setLoading(false);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
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

    // Update the field value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error if value is not empty
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleProductExperienceChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      productExperience: value,
      yearsExperience: value === "no" ? "" : prev.yearsExperience,
    }));
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

    // Validate yearsExperience if productExperience is "yes"
    if (
      formData.productExperience === "yes" &&
      !formData.yearsExperience.trim()
    ) {
      newErrors.yearsExperience = true;
    }

    // Set errors and return if there are any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, log the form data
    setLoading(true);
    const currentTimestamp = new Date().toLocaleString();
    const totalEntries = await getEntryCount();
    const res = await saveUserData(
      formData.name,
      formData.email,
      formData.number,
      formData.linkedin,
      currentTimestamp,
      totalEntries
    );
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center font-inter text-[#222] p-8">
      <div className="flex flex-col gap-4 w-full max-w-[700px] bg-white rounded-lg p-0 lg:p-6">
        <div className="text-[22px] lg:text-[32px] font-bold text-center">
          Complete your application for GenAI for PM Course
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
              label="Contact"
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
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="reason"
              className="text-[12px] lg:text-[16px] font-medium mb-1"
            >
              Why do you think this program is the right fit for you?
            </label>
            <textarea
              id="reason"
              rows="4"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 text-[12px] lg:text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          {/* New Section for Product Experience */}
          <div className="flex flex-col gap-2 text-[12px] lg:text-[16px]">
            <label className="font-medium">
              Do you have any product experience?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="productExperience"
                  value="yes"
                  onChange={(e) =>
                    handleProductExperienceChange(e.target.value)
                  }
                  className="form-radio"
                  disabled={loading}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="productExperience"
                  value="no"
                  onChange={(e) =>
                    handleProductExperienceChange(e.target.value)
                  }
                  className="form-radio"
                  disabled={loading}
                />
                No
              </label>
            </div>
          </div>

          {formData.productExperience === "yes" && (
            <div className="flex flex-col gap-1">
              <label
                htmlFor="yearsExperience"
                className="text-[12px] lg:text-[16px] font-medium"
              >
                How many years of experience?
              </label>
              <input
                type="text"
                id="yearsExperience"
                name="yearsExperience"
                value={formData.yearsExperience || ""}
                onChange={handleChange}
                min="0"
                className={`border rounded-md px-3 py-2 text-[12px] lg:text-[16px] focus:outline-none ${
                  errors.yearsExperience
                    ? "border-red-500 focus:ring-red-200"
                    : "focus:ring-blue-200"
                }`}
              />
              {errors.yearsExperience && (
                <span className="text-red-500 text-[10px] lg:text-[12px]">
                  Years of experience is required
                </span>
              )}
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md text-[12px] lg:text-[16px] font-medium transition duration-300"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>

        {/* <div className="p-4 lg:px-8 lg:py-6 border rounded-md text-[12px] lg:text-[16px]">
          Not sure if the program is the right fit for you? Or got some other
          questions? <br /> Feel free to send us an email to{" "}
          <a
            href="mailto:info@theproductspace.in"
            className="font-bold text-blue-500"
          >
            info@theproductspace.in
          </a>{" "}
          or send a message{" "}
          <span>
            <a
              href="https://wa.me/+919611232575"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-500"
            >
              on WhatsApp
            </a>
          </span>
        </div> */}
      </div>

      <Notification
        setShowNotification={setShowNotification}
        showNotification={showNotification}
        notification={notification}
      />
    </div>
  );
};

export default GenAiForm;
