"use client";

import { referralFormSchema } from "@/lib/validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type PatientReferralForm = z.infer<typeof referralFormSchema>;

export default function ReferralForm() {
  const { register, handleSubmit } = useForm<PatientReferralForm>({
    resolver: zodResolver(referralFormSchema),
    defaultValues: {
      patientName: {
        firstName: "",
        lastName: "",
      },
      patientEmail: "",
      patientPhone: "",
      patientAddress: {
        streetAddress: "",
        city: "",
        stateOrProvince: "",
        postalOrZipCode: "",
      },
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
      medicalProviderName: {
        firstName: "",
        lastName: "",
      },
      medicalProviderEmail: "",
      medicalProviderPhone: "",
      medicalProviderAddress: {
        streetAddress: "",
        city: "",
        stateOrProvince: "",
        postalOrZipCode: "",
      },
      medicalProviderType: undefined,
    },
  });

  const onSubmit: SubmitHandler<PatientReferralForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex my-4 justify-between">
        <Input label="patient first name" />
        <Input label="patient last name" />
      </div>
      <div className="flex my-4 justify-between">
        <Input label="patient email" />
        <Input label="patient phone" />
      </div>
      <Input label="patient street address" />
      <div className="flex my-4 justify-between">
        <Input label="patient city" />
        <Input label="patient state/province" />
      </div>
      <Input label="patient postal / zip code" />
      <div className="flex my-4 justify-between">
        <Input label="patient birthday" />
        <Input label="patient primary care provider" />
      </div>
      <div className="flex my-4 justify-between">
        <Input label="power of attorney" />
        <Input label="power of attorney email" />
      </div>
      <Input label="patient insurance provider" />
      <div className="flex my-4 justify-between">
        <Input label="Patient Insurance ID Number" />
        <Input label="Medicare ID Number" />
      </div>
      <div className="flex my-4 justify-between">
        <Input label="Diagnosis" />
        <Input label="Duration of Wound" />
      </div>
      <Input label="Medical Provider Company Name" />
      <div className="flex my-4 justify-between">
        <Input label="Medical Provider First Name" />
        <Input label="Medical Provider Last Name" />
      </div>
      <div className="flex my-4 justify-between">
        <Input label="Medical Provider Email" />
        <Input label="Medical Provider Phone" />
      </div>
      <Input label="Medical Provider Street Address" />
      <div className="flex my-4 justify-between">
        <Input label="Medical Provider City" />
        <Input label="Medical Provider State / Province" />
      </div>
      <Input label="Medical Provider Postal / Zip Code" />
      <Input label="Medical Provider Type" />
    </form>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" className="border border-black" />
    </div>
  );
}
