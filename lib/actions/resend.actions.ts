"use server";

import { Resend } from "resend";
import PatientReferralEmail from "@/components/email/referralEmail";
import { createElement } from "react";
import { handleError } from "@/utils";
import { ReferralType } from "@/components/form/ReferralForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendReferralEmail = async ({
  referralData,
}: {
  referralData: ReferralType;
}) => {
  try {
    await resend.emails.send({
      from: "Foot Wound Institute <onboarding@resend.dev>",
      to: "greghim53lf@gmail.com",
      subject: "New Patient Referral",
      react: createElement(PatientReferralEmail, {
        ReferralData: referralData,
      }),
    });
  } catch (error) {
    handleError(error);
  }
};
