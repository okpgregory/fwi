import { FaHourglassHalf } from "react-icons/fa";
import { GrFormSchedule } from "react-icons/gr";
import { TiCancel } from "react-icons/ti";

const name = {
  firstName: "",
  lastName: "",
};

const address = {
  streetAddress: "",
  city: "",
  stateOrProvince: "",
  postalOrZipCode: "",
};

export const referralFormInitialData = {
  patientName: name,
  patientEmail: "",
  patientPhone: "",
  patientAddress: address,
  patientBirthday: undefined,
  patientPrimaryCareProvider: "",
  powerOfAttorney: undefined,
  powerOfAttorneyEmail: "",
  patientInsuranceProvider: "",
  patientInsuranceIdNumber: "",
  medicareIdNumber: "",
  diagnosis: "",
  durationOfWound: "",
  medicalProviderCompanyName: "",
  medicalProviderName: name,
  medicalProviderEmail: "",
  medicalProviderPhone: "",
  medicalProviderAddress: address,
  medicalProviderType: undefined,
};

export const StatusIcon = {
  scheduled: GrFormSchedule,
  pending: FaHourglassHalf,
  cancelled: TiCancel,
};
