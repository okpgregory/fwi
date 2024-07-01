import { z } from "zod";

export const referralFormSchema = z.object({
  patientName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  patientEmail: z.string().email(),
  patientPhone: z.string(),
  patientAddress: z.object({
    streetAddress: z.string(),
    city: z.string(),
    stateOrProvince: z.string(),
    postalOrZipCode: z.string(),
  }),
  patientBirthday: z.date(),
  patientPrimaryCareProvider: z.string(),
  powerOfAttorney: z.boolean(),
  powerOfAttorneyEmail: z.string().email(),
  patientInsuranceProvider: z.string(),
  patientInsuranceIdNumber: z.string(),
  medicareIdNumber: z.string(),
  diagnosis: z.string(),
  durationOfWound: z.string(),
  medicalProviderCompanyName: z.string(),
  medicalProviderName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  medicalProviderEmail: z.string().email(),
  medicalProviderPhone: z.string(),
  medicalProviderAddress: z.object({
    streetAddress: z.string(),
    city: z.string(),
    stateOrProvince: z.string(),
    postalOrZipCode: z.string(),
  }),
  medicalProviderType: z.string(),
  //   ["Facilty", "Provider"]
});
