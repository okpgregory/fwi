import { referralFormSchema } from "@/lib/validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = z.infer<typeof referralFormSchema>;

export default function ReferralForm() {
  const { register, handleSubmit } = useForm<FormData>({
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
}
