import { useContext } from "react";
import PlanetsContext from "../contexts/PlanetsContext";

export default function usePlanetsContext() {
  const context = useContext(PlanetsContext);

  if (context === undefined) {
    throw new Error("usePlanetsContext must be used within a PlanetsProvider");
  }

  return context;
}
