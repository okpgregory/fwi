import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import PatientReferralForm from "@/forms/PatientReferralForm";

export default function Referral() {
  return (
    <MaxWidthWrapper className="py-20">
      <h3 className="text-center sm:text-left text-3xl font-bold mb-8 text-blue-700">
        Referral Form
      </h3>
      <PatientReferralForm />
    </MaxWidthWrapper>
  );
}
