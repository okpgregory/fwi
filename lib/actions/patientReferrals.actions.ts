import { handleError } from "@/utils";
import { connectToDatabase } from "@/lib/database";
import { PatientReferralType } from "@/forms/PatientReferralForm";
import { PatientReferral } from "@/lib/database/models/PatientReferral";

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

export const getPatientReferral = async (
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

export const getPatientReferrals = async (
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

export const updatePatientReferral = async (
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

export const deletePatientReferral = async (
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
