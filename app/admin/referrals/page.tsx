import { DataTable } from "@/app/admin/_components/table/DataTable";
import { referralColumns } from "@/app/admin/_components/table/referralColumns";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { getPatientReferrals } from "@/lib/actions/referrals.actions";

export default async function page() {
  const referrals = await getPatientReferrals();

  return (
    <MaxWidthWrapper>
      <DataTable columns={referralColumns} data={referrals} />
    </MaxWidthWrapper>
  );
}
