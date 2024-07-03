const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  patientPhone: { type: String, required: true },
  patientAddress: {
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    stateOrProvince: { type: String, required: true },
    postalOrZipCode: { type: String, required: true },
  },
  patientBirthday: { type: Date },
  patientPrimaryCareProvider: { type: String },
  powerOfAttorney: { type: String },
  powerOfAttorneyEmail: { type: String },
  patientInsuranceProvider: { type: String },
  patientInsuranceIdNumber: { type: String },
  medicareIdNumber: { type: String },
  diagnosis: { type: String },
  durationOfWound: { type: String },
  medicalProviderCompanyName: { type: String },
  medicalProviderName: { type: String },
  medicalProviderEmail: { type: String },
  medicalProviderPhone: { type: String },
  medicalProviderAddress: {
    streetAddress: { type: String },
    city: { type: String },
    stateOrProvince: { type: String },
    postalOrZipCode: { type: String },
  },
  medicalProviderType: { type: String },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
