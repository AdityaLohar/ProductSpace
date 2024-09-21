import React, { useState } from "react";

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = ({ isOpen, setIsOpen, isVisible, setIsVisible }) => {
    if (!isOpen) {
      // When opening, set both isOpen and isVisible to true to show modal with animation
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      // When closing, reverse the animation, then hide the modal
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300); // Match the animation duration
    }
  };

  return (
    <div className="relative">
      {/* Modal */}
      {isOpen && (
        <>
          {/* Modal overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleModal}
          ></div>

          {/* Modal container */}
          <div
            className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-300 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            {/* Form content */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-96 transform transition-transform duration-300 ease-out">
              {/* Close button */}
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>

              {/* Form */}
              <form>
                <h2 className="text-lg font-semibold mb-4">Contact Form</h2>

                <div className="mb-4">
                  <label className="block mb-2 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalForm;
