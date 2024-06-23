"use client";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";
import { deleteBooking } from "../_lib/action";
export default function Page({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((book) => book.id != bookingId);
    }
  );
  async function handelDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handelDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
