import ReservationCard from "@/app/_components/ReservationCard";
import { auth } from "../_lib/auth";

export default async  function Page() {
  // CHANGE
  const bookings = [];
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0)


  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
