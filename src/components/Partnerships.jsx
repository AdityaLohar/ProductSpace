import React from "react";
import iitr from "../assets/iitr.svg";
import iitkgp from "../assets/iitkgp.svg";
import iimb from "../assets/iimb.svg";

const Partnerships = () => {
  const partners = [iitr, iitkgp, iimb, iitr, iitkgp, iimb, iitr, iitkgp, iimb];

  return (
    <div className="flex flex-col gap-9 px-4 py-11">
      <div className="text-center font-bold text-[#1D1F3D] text-[20px] lg:text-[28px]">
        Partnerships with
      </div>

      <div className="flex gap-14 overflow-hidden">
        <div className="flex animate-infinite-scroll">
          <div className="flex gap-14">
            {partners.map((partner, id) => (
              <div key={id} className="flex items-center justify-center">
                <img
                  src={partner}
                  alt=""
                  className="h-auto w-auto max-h-full max-w-[300px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex animate-infinite-scroll" aria-hidden="true">
          <div className="flex gap-14">
            {partners.map((partner, id) => (
              <div key={id} className="flex items-center justify-center">
                <img
                  src={partner}
                  alt=""
                  className="h-auto w-auto max-h-full max-w-[300px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
