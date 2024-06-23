import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin] = await Promise.all([
      getCabin(cabinId),
      // getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin});
  } catch (err) {
    return Response.json({ message: "Cabin not Found" });
  }
}
