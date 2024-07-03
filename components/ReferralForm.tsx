"use client";

import { referralFormSchema } from "@/lib/validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

export type PatientReferralForm = z.infer<typeof referralFormSchema>;

const initialFormData = {
  patientName: "",
  patientEmail: "",
  patientPhone: "",
  patientAddress: "",
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
  medicalProviderName: "",
  medicalProviderEmail: "",
  medicalProviderPhone: "",
  medicalProviderAddress: "",
  medicalProviderType: "",
};

export default function ReferralForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/addPatient", formData);
      console.log("Data sent successfully:", response.data);
      // Optionally, you can reset the form after successful submission
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="patientEmail"
          value={formData.patientEmail}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="patientPhone"
          value={formData.patientPhone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="patientAddress"
          value={formData.patientAddress}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Birthday:</label>
        <input
          type="date"
          name="patientBirthday"
          value={formData.patientBirthday}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Primary Care Provider:</label>
        <input
          type="text"
          name="patientPrimaryCareProvider"
          value={formData.patientPrimaryCareProvider}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Power of Attorney:</label>
        <input
          type="text"
          name="powerOfAttorney"
          value={formData.powerOfAttorney}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Power of Attorney Email:</label>
        <input
          type="email"
          name="powerOfAttorneyEmail"
          value={formData.powerOfAttorneyEmail}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Insurance Provider:</label>
        <input
          type="text"
          name="patientInsuranceProvider"
          value={formData.patientInsuranceProvider}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Insurance ID Number:</label>
        <input
          type="text"
          name="patientInsuranceIdNumber"
          value={formData.patientInsuranceIdNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Medicare ID Number:</label>
        <input
          type="text"
          name="medicareIdNumber"
          value={formData.medicareIdNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Diagnosis:</label>
        <input
          type="text"
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Duration of Wound:</label>
        <input
          type="text"
          name="durationOfWound"
          value={formData.durationOfWound}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Medical Provider Company Name:</label>
        <input
          type="text"
          name="medicalProviderCompanyName"
          value={formData.medicalProviderCompanyName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Medical Provider Name:</label>
        <input
          type="text"
          name="medicalProviderName"
          value={formData.medicalProviderName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Medical Provider Email:</label>
        <input
          type="email"
          name="medicalProviderEmail"
          value={formData.medicalProviderEmail}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Medical Provider Phone:</label>
        <input
          type="text"
          name="medicalProviderPhone"
          value={formData.medicalProviderPhone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Medical Provider Address:</label>
        <input
          type="text"
          name="medicalProviderAddress"
          value={formData.medicalProviderAddress}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Medical Provider Type:</label>
        <input
          type="text"
          name="medicalProviderType"
          value={formData.medicalProviderType}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
