import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full py-0 lg:py-6 bg-white lg:h-screen font-hind">
      <div className="flex flex-col gap-8 bg-gray-100 mx-auto max-w-screen-xl px-8 py-8 lg:py-12">
        <div className="text-[32px] lg:text-[40px] font-bold font-sans">
          <h1>Refund, Deferral, Discount and Cancellation</h1>
        </div>

        <div className="flex flex-col gap-6 text-[18px]">
          <p>
            We appreciate your participation at Product Space. Additionally, we
            want your experience to be positive while you research, evaluate,
            and buy our content.
          </p>

          <p>
            Whenever you pay to sign up for one of our courses, in case you are
            not able to continue with the current cohort, we can defer you to
            the next cohort. This is allowed until 7 days from the date of
            payment for the upcoming cohort. You can ask for only 1 deferral.
            For example, if you have enrolled for Cohort 10, we can at most
            defer you to Cohort 11 within 7 days from the date of payment for
            Cohort 10.
          </p>

          <p>
            Please don&apos;t hesitate to reach out to us if you are
            dissatisfied with any of our products or services for any reason.
          </p>

          <p>
            To request a deferral before the 7-day mark, write to us at the
            details provided on the Contact Us page.
          </p>

          <p>
            We don&apos;t provide refunds once you have enrolled in the cohort;
            however, you can transfer your seat to anyone else before the start
            date of the cohort you enrolled in.
          </p>
        </div>

        <hr />

        <div className="text-[18px] flex flex-col gap-4">
          <div>
            <h3>Discounts and Promotions</h3>
          </div>

          <div className="flex flex-col gap-1">
            <p>
              1. You can only apply 1 discount at a time. No 2 discounts can be
              clubbed.
            </p>

            <p>
              2. Any fellowship voucher/coupon codes can only be clubbed at the
              total fee without any discount.
            </p>
          </div>

          <div>
            <p>In case of discount discrepancies, Product Space management will take the final call.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
