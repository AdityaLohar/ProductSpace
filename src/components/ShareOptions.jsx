import copyIcon from "../assets/copy.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import emailIcon from "../assets/email.svg";
import facebookIcon from "../assets/facebook.svg";

const ShareOptions = ({ handleShare, toggleSharePopup, copied }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="w-[80%] lg:w-[20%] bg-white border border-gray-300 shadow-lg rounded-lg py-4 z-30">
        <div className="text-center font-semibold text-[20px] pb-6">
          Share with friends
        </div>

        <div className="flex flex-col gap-2 px-4">
          <button
            onClick={() => handleShare("copy")}
            className="flex items-center justify-start gap-5 pl-3 pb-2"
          >
            <img src={copyIcon} alt="Copy Link" />
            <p>{copied ? "Link Copied" : "Copy Link"}</p>
          </button>

          <button
            onClick={() => handleShare("facebook")}
            className="flex items-center justify-start gap-2"
          >
            <img src={facebookIcon} alt="Facebook" />
            <p>Share to Facebook</p>
          </button>
          <button
            onClick={() => handleShare("email")}
            className="flex items-center justify-start gap-2"
          >
            <img src={emailIcon} alt="Email" />
            <p>Share via Email</p>
          </button>

          <button
            onClick={() => handleShare("whatsapp")}
            className="flex items-center justify-start gap-2"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
            <p>Share to WhatsApp</p>
          </button>
        </div>

        <div className="mx-3">
          <button
            onClick={toggleSharePopup}
            className="w-full rounded-xl text-center p-3 bg-[#EEEEEF]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareOptions;
