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
  patientPhone: z.string().min(1, "Must be a valid phone number"),
  patientAddress: AddressSchema,
  patientBirthday: z.date(),
  patientPrimaryCareProvider: z.string().min(1, "This field is required"),
  powerOfAttorney: z.enum(["yes", "no"]),
  powerOfAttorneyEmail: z.string().email().optional(), // Make optional if not always required
  patientInsuranceProvider: z.string().min(1, "This field is required"),
  patientInsuranceIdNumber: z.string().min(1, "This field is required"),
  medicareIdNumber: z.string().min(1, "This field is required"),
  diagnosis: z.string().min(1, "This field is required"),
  durationOfWound: z.string().min(1, "This field is required"),
  medicalProviderCompanyName: z.string().min(1, "This field is required"),
  medicalProviderName: NameSchema,
  medicalProviderEmail: z.string().email(),
  medicalProviderPhone: z.string().min(1, "Must be a valid phone number"), // Adjust min length as needed
  medicalProviderAddress: AddressSchema,
  medicalProviderType: z.enum(["facility", "provider"]),
});
