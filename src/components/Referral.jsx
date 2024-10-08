import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios if not installed

const airtableReferralUrl = import.meta.env.VITE_AIRTABLE_REFERRAL_URL;
const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

const Referral = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${airtableReferralUrl}?filterByFormula=AND({Name}="${name}", {Email Id}="${email}")`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.data.records.length > 0) {
        // User exists, return existing referral link
        const user = response.data.records[0];
        setReferralLink(user.fields["Referral Link"]); // Assuming "Referral Link" is a field
      } 
      else {
        // User does not exist, create a new record and generate referral link
        const newReferralLink = generateReferralLink({name, email}); // Your logic to generate a referral link
        await axios.post(
            airtableReferralUrl,
          {
            fields: {
              Name: name,
              "Email Id": email,
              "Referral Link": newReferralLink,
              "Referral Count": 0,
              "Conversion": 0,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        setReferralLink(newReferralLink);
      }

      setIsSubmitted(true); // Change view after submission
    } 
    catch (error) {
      console.error("Error checking/saving referral link:", error);
    }
  };

  const generateReferralLink = (name, email) => {
    const url = window.location.href;

    console.log("url", url);
    const baseUrl = `${url}pm-fellowship/referral`; // Replace with your domain
    console.log("baseUrl", baseUrl);
    const timestamp = Date.now(); // Get the current timestamp for uniqueness

    const encodedName = btoa(name);
    const encodedEmail = btoa(email);
  
    // Create a simple referral link using the user's name, email, and timestamp
    const refLink = `${baseUrl}/${encodedName}-${encodedEmail}-${timestamp}`;
    
    return refLink;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="bg-gray-100 px-2 md:px-20 lg:px-60 py-10 flex flex-col gap-10 items-center">
      <div className="text-[40px] font-sans font-bold">
        <h2>Refer a friend and earn rewards</h2>
      </div>

      {!isSubmitted ? (
        <div className="flex flex-col gap-8 w-1/2">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg outline-none placeholder:font-normal font-semibold"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Id"
            className="p-3 rounded-lg outline-none placeholder:font-normal font-semibold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 p-3 rounded-full font-semibold text-[18px]"
          >
            Generate Referral Link
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Your referral link:</p>
          <div className="bg-white p-3 rounded-lg border">
            <p className="font-mono">{referralLink}</p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white p-3 rounded-full font-semibold text-[18px]"
          >
            Copy Referral Link
          </button>
        </div>
      )}
    </div>
  );
};

export default Referral;
