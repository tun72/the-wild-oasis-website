import { getBooking, getBookings } from "@/app/_lib/data-service";
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>
      <ReservationList bookings={bookings} />
    </div>
  );
}

export default Page;
