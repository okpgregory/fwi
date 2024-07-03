import { model, models } from "mongoose";
import { Schema } from "mongoose";

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
const PatientReferralSchema = new Schema({
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
    enum: ["Yes", "No"],
    required: true,
  },
  powerOfAttorneyEmail: {
    type: String,
    required: function () {
      return this.powerOfAttorney === "Yes"; // Required only if powerOfAttorney is 'Yes'
    },
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
    enum: ["Facility", "Provider"],
    required: true,
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

PatientReferralSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
});

const PatientReferral =
  models.PatientReferral || model("PatientReferral", PatientReferralSchema);
