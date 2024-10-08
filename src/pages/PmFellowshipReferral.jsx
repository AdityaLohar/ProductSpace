import Companies from "../components/Companies";
import HandsOnTools from "../components/HandsOnTools";
import LearningWithPace from "../components/LearningWithPace";
import MeetAlums from "../components/MeetAlums";
import MeetMentors from "../components/MeetMentors";
import PmFellowshipHeroSection from "../components/PmFellowshipHeroSection";
import ResultsPmFellowship from "../components/ResultsPmFellowship";
import ReviewPmFellowship from "../components/ReviewPmFellowship";
import WhyPmFellowship from "../components/WhyPmFellowship";
import { v4 as uuidv4 } from 'uuid';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const airtableReferralUrl = import.meta.env.VITE_AIRTABLE_REFERRAL_URL;
const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

const PmFellowshipReferral = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  const { id } = useParams();

  const checkReferralAndIncrement = async () => {
    const referralLink = window.location.href;

    let parsedData = JSON.parse(localStorage.getItem("referralData"));
    let referredId = parsedData?.id;

    console.log({referredId: referredId, id: id});

    if (referredId == id) {
      // Return if UUID is already stored
      console.log(referredId);
      return;
    }
    
    // Generate a new UUID if not already stored
    let userId = uuidv4();
    const data = {
      userId: userId,
      id: id,
    };
    localStorage.setItem("referralData", JSON.stringify(data));
    
    console.log("in check ref", referralLink)
    if (!referralLink) return; // If no referral link in URL, don't proceed
    
    try {
      // Query Airtable using the referral link
      const formula = `AND({Referral Link}='${referralLink}')`;
      const encodedFormula = encodeURIComponent(formula);
  
      const response = await axios.get(`${airtableReferralUrl}?filterByFormula=${encodedFormula}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.records.length > 0) {
        // User found, increment their referral count
        const user = response.data.records[0];
        const userId = user.id;
        const currentCount = user.fields["Referral Count"] || 0; // Default to 0 if no count exists
  
        // Increment the referral count
        await axios.patch(
          `${airtableReferralUrl}/${userId}`,
          {
            fields: {
              "Referral Count": currentCount + 1,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        console.log("Referral count incremented successfully!");
      } else {
        console.log("Referral link is invalid.");
      }
    } catch (error) {
      console.error("Error fetching/incrementing referral count:", error);
    }
  };
  

  // Scroll to section if the URL has a hash
  useEffect(() => {
    if (location.hash === "#reviews") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    console.log("in use effect")
    // Check if user is redirected by a referral link
    checkReferralAndIncrement();
  }, [location]);

  return (
    <HelmetProvider>
      <div className="bg-white font-hind xl:flex xl:flex-col items-center">
        <Helmet>
          <title>PM Fellowship Page - Product Space</title>
          <meta
            name="description"
            content="Welcome to the PM Fellowship page of Product Space."
          />
        </Helmet>

        <div className="w-full max-w-screen-2xl">
          <PmFellowshipHeroSection />
          <LearningWithPace />
          <HandsOnTools />
          <WhyPmFellowship />
          <Companies />
          <ResultsPmFellowship />
          <MeetMentors bgColor={"#fff"} />
          <div ref={sectionRef} id="reviews">
            <ReviewPmFellowship />
          </div>
          <MeetAlums />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PmFellowshipReferral;