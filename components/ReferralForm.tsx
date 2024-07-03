"use client";

import { PatientReferralSchema } from "@/utils/validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { referralFormInitialData } from "@/data/constants";

export type PatientReferralType = z.infer<typeof PatientReferralSchema>;

export default function ReferralForm() {
  return (
    <section>
      <h3 className="text-center sm:text-left">Referral Form</h3>
      <ReferralForm />
    </section>
  );
}
