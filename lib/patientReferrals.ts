import { PatientReferralForm } from "@/components/ReferralForm";
import prisma from "./prisma";

export async function getPatientReferrals() {
  try {
    const patientReferrals = await prisma.patientReferral.findMany();
    return { patientReferrals };
  } catch (error) {
    return { error };
  }
}

export async function createPatientReferrals(
  patientReferralForm: PatientReferralForm
) {
  try {
    const patientReferral = await prisma.patientReferral.create(
      patientReferralForm
    );
    return { patientReferral };
  } catch (error) {
    return { error };
  }
}
