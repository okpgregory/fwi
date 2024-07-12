import { DataTable } from "@/app/admin/_components/table/DataTable";
import { referralColumns } from "@/app/admin/_components/table/referralColumns";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { getReferrals } from "@/lib/actions/referrals.actions";

export default async function page() {
  const referrals = await getReferrals();

  return (
    <MaxWidthWrapper>
      <DataTable columns={referralColumns} data={referrals} />
    </MaxWidthWrapper>
  );
}
