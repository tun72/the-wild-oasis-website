"use client"
const { createContext, useState, useContext } = require("react");

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

export function ReservationProvider({ children }) {
  const [range, setRange] = useState({ initialState });
  function resetRange() {
    setRange(initialState)
  }
  return <ReservationContext.Provider value={{range, setRange, resetRange}}>{children}</ReservationContext.Provider>;
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("Context is use outside of components.");
  }
  return context;
}
