import { Document } from "mongoose";
import { model, models } from "mongoose";
import { Schema } from "mongoose";

interface Name {
  firstName: string;
  lastName: string;
}

interface Address {
  streetAddress: string;
  city: string;
  stateOrProvince: string;
  postalOrZipCode: string;
}

export interface IReferral extends Document {
  _id: string;
  patientName: Name;
  patientEmail: string;
  patientPhone: string;
  patientAddress: Address;
  patientBirthday: Date;
  patientPrimaryCareProvider: string;
  powerOfAttorney: "Yes" | "No";
  powerOfAttorneyEmail?: string; // Optional because it's not always required
  patientInsuranceProvider: string;
  patientInsuranceIdNumber: string;
  medicareIdNumber: string;
  diagnosis: string;
  durationOfWound: string;
  medicalProviderCompanyName: string;
  medicalProviderName: Name;
  medicalProviderEmail: string;
  medicalProviderPhone: string;
  medicalProviderAddress: Address;
  medicalProviderType: "Facility" | "Provider";
  status: "scheduled" | "pending" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

// Define nested schemas
const NameSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const AddressSchema = new Schema({
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  stateOrProvince: { type: String, required: true },
  postalOrZipCode: { type: String, required: true },
});

// Main schema
const ReferralSchema = new Schema({
  patientName: {
    type: NameSchema,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
    lowerCase: true,
  },
  patientPhone: {
    type: String,
    required: true,
  },
  patientAddress: {
    type: AddressSchema,
    required: true,
  },
  patientBirthday: {
    type: Date,
    required: true,
  },
  patientPrimaryCareProvider: {
    type: String,
    required: true,
  },
  powerOfAttorney: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  powerOfAttorneyEmail: {
    type: String,
    lowerCase: true,
  },
  patientInsuranceProvider: {
    type: String,
    required: true,
  },
  patientInsuranceIdNumber: {
    type: String,
    required: true,
  },
  medicareIdNumber: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  durationOfWound: {
    type: String,
    required: true,
  },
  medicalProviderCompanyName: {
    type: String,
    required: true,
  },
  medicalProviderName: {
    type: NameSchema,
    required: true,
  },
  medicalProviderEmail: {
    type: String,
    required: true,
    lowerCase: true,
  },
  medicalProviderPhone: {
    type: String,
    required: true,
  },
  medicalProviderAddress: {
    type: AddressSchema,
    required: true,
  },
  medicalProviderType: {
    type: String,
    enum: ["facility", "provider"],
    required: true,
  },
  status: {
    type: String,
    enum: ["scheduled", "pending", "cancelled"],
    required: true,
    default: "pending",
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

export const Referral = models?.Referral || model("Referral", ReferralSchema);
