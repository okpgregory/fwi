"use server";

import { handleError } from "@/utils";
import { connectToDatabase } from "../database";
import { PatientReferral } from "../database/models/patientReferral";
import { PatientReferralType } from "@/forms/PatientReferralForm";

export const createPatientReferral = async (
  patientReferralData: PatientReferralType
) => {
  try {
    await connectToDatabase();
    const patientReferral = await PatientReferral.create(patientReferralData);
    return JSON.parse(JSON.stringify(patientReferral));
  } catch (error) {
    handleError(error);
  }
};
