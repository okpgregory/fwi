import ReferralForm from "@/components/form/ReferralForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

export default function Referral() {
  return (
    <MaxWidthWrapper className="py-20">
      <h3 className="text-center sm:text-left text-3xl md:text-5xl font-bold mb-16 text-blue-700 tracking-wide">
        Referral Form
      </h3>
      <ReferralForm />
    </MaxWidthWrapper>
  );
}
