import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import TextExpander from "@/app/_components/TextExpander";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import Reservation from "@/app/_components/Reservation";
import Cabin from "@/app/_components/Cabin";

// PLACEHOLDER DATA
// export const metadata = {
//     title: "Cabin"
// }

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}



export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Reservation cabin={cabin} />
      </div>
    </div>
  );
}
