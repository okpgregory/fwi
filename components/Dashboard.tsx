import { FaHourglassHalf } from "react-icons/fa";
import { GrFormSchedule } from "react-icons/gr";
import { TiCancel } from "react-icons/ti";
import StatCard from "./StatCard";
import { DataTable } from "./table/DataTable";

export default function Dashboard() {
  return (
    <section>
      <div className="flex w-full flex-col justify-between gap-5 md:flex-row xl:gap-10 mb-16">
        <StatCard
          type="appointments"
          count={5}
          label="Scheduled appointments"
          Icon={GrFormSchedule}
          iconColor="text-orange-500/90"
        />
        <StatCard
          type="pending"
          count={5}
          label="Pending appointments"
          Icon={FaHourglassHalf}
          iconColor="text-blue-500/90"
        />
        <StatCard
          type="cancelled"
          count={5}
          label="Cancelled appointments"
          Icon={TiCancel}
          iconColor="text-red-500/90"
        />
      </div>
      {/* <DataTable /> */}
    </section>
  );
}
