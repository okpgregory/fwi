import { z } from "zod";

// Define a schema for Name
const NameSchema = z.object({
  firstName: z
    .string()
    .min(1, "This field is required")
    .max(400, "Characters too long"),
  lastName: z
    .string()
    .min(1, "This field is required")
    .max(400, "Characters too long"),
});

// Define a schema for Address
const AddressSchema = z.object({
  streetAddress: z
    .string()
    .min(1, "This field is required")
    .max(400, "Characters too long"),
  city: z
    .string()
    .min(1, "This field is required")
    .max(400, "Characters too long"),
  stateOrProvince: z
    .string()
    .min(1, "This field is required")
    .max(400, "Characters too long"),
  postalOrZipCode: z
    .string()
    .min(1, "This field is required")
    .max(400, "Characters too long"),
});

// Define a schema for PatientReferral
export const PatientReferralSchema = z.object({
  patientName: NameSchema,
  patientEmail: z
    .string()
    .email()
    .min(1, "This field is required")
    .max(400, "Characters too long"),
  patientPhone: z
    .string()
    .min(10, "Must be a valid phone number")
    .max(10, "Must be a valid phone number"), // Adjust min length as needed
  patientAddress: AddressSchema,
  patientBirthday: z.date(),
  patientPrimaryCareProvider: z.string().min(1, "This field is required"),
  powerOfAttorney: z.enum(["Yes", "No"]),
  powerOfAttorneyEmail: z.string().email().optional(), // Make optional if not always required
  patientInsuranceProvider: z.string().min(1, "This field is required"),
  patientInsuranceIdNumber: z.string().min(1, "This field is required"),
  medicareIdNumber: z.string().min(1, "This field is required"),
  diagnosis: z.string().min(1, "This field is required"),
  durationOfWound: z.string().min(1, "This field is required"),
  medicalProviderCompanyName: z.string().min(1, "This field is required"),
  medicalProviderName: NameSchema,
  medicalProviderEmail: z.string().email(),
  medicalProviderPhone: z.string().min(10, "Must be a valid phone number"), // Adjust min length as needed
  medicalProviderAddress: AddressSchema,
  medicalProviderType: z.enum(["Facility", "Provider"]),
});

// type referralFormType = {
//   patientName: {
//     firstName: string;
//     lastName: string;
//   };
//   patientEmail: string;
//   patientPhone: string;
//   patientAddress: {
//     streetAddress: string;
//     city: string;
//     stateOrProvince: string;
//     postalOrZipCode: string;
//   };
//   patientBirthday: Date;
//   patientPrimaryCareProvider: string;
//   powerOfAttorney: "Yes" | "No";
//   powerOfAttorneyEmail: string;
//   patientInsuranceProvider: string;
//   patientInsuranceIdNumber: string;
//   medicareIdNumber: string;
//   diagnosis: string;
//   durationOfWound: string;
//   medicalProviderCompanyName: string;
//   medicalProviderName: {
//     firstName: string;
//     lastName: string;
//   };
//   medicalProviderEmail: string;
//   medicalProviderPhone: string;
//   medicalProviderAddress: {
//     streetAddress: string;
//     city: string;
//     stateOrProvince: string;
//     postalOrZipCode: string;
//   };
//   medicalProviderType: "Facilty" | "Provider";
// };
