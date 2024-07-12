import { ReferralType } from "../forms/ReferralForm";
import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function PatientReferralEmail({
  ReferralData,
}: {
  ReferralData: ReferralType;
}) {
  return (
    <Html>
      <Head />
      <Preview>New Referral For Foot Wound Institute</Preview>
      <Tailwind>
        <Body className="bg-blue-50">
          <Container>
            <Section className="bg-slate-50 py-8 px-4">
              <Img
                className="w-16 mx-auto block"
                src={`${process.env.DOMAIN}/assets/LogoOnly.png`}
                alt="Foot Wound Institute Logo"
              />
              <Heading className="text-center leading-tight">
                You received the following referral from the patient referral
                form
              </Heading>
              <Text className="text-xl font-medium">
                Patient Name: {ReferralData.patientName.firstName}{" "}
                {ReferralData.patientName.lastName}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Patient Email: {ReferralData.patientEmail}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Patient Phone: {ReferralData.patientPhone}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Patient Address: {ReferralData.patientAddress.streetAddress}{" "}
                {ReferralData.patientAddress.city}{" "}
                {ReferralData.patientAddress.stateOrProvince}{" "}
                {ReferralData.patientAddress.postalOrZipCode}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Patient Birthday:{" "}
                {ReferralData.patientBirthday.toLocaleString()}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Patient Primary Care Provider:{" "}
                {ReferralData.patientPrimaryCareProvider}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Power of Attorney:{" "}
                {ReferralData.powerOfAttorney.toLocaleUpperCase()}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Power of Attorney Email: {ReferralData.powerOfAttorneyEmail}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Patient Insurance Provider:{" "}
                {ReferralData.patientInsuranceProvider}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Patient Insurance ID Number:{" "}
                {ReferralData.patientInsuranceIdNumber}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Medicare ID Number: {ReferralData.medicareIdNumber}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Diagnosis: {ReferralData.diagnosis}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Duration of Wound: {ReferralData.durationOfWound}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Medical Provider Company Name:{" "}
                {ReferralData.medicalProviderCompanyName}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Medical Provider Name:{" "}
                {ReferralData.medicalProviderName.firstName}{" "}
                {ReferralData.medicalProviderName.lastName}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Medical Provider Email: {ReferralData.medicalProviderEmail}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Medical Provider Phone: {ReferralData.medicalProviderPhone}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Medical Provider Address:{" "}
                {ReferralData.medicalProviderAddress.streetAddress}{" "}
                {ReferralData.medicalProviderAddress.city}{" "}
                {ReferralData.medicalProviderAddress.stateOrProvince}{" "}
                {ReferralData.medicalProviderAddress.postalOrZipCode}
              </Text>
              <Hr />
              <Text className="text-xl font-medium">
                Medical Provider Type:{" "}
                {ReferralData.medicalProviderType.toLocaleUpperCase()}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
