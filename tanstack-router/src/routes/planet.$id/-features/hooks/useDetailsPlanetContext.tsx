import { useContext } from "react";
import DetailsPlanetContext from "../contexts/DetailsPlanetContext";

export default function useDetailsPlanetContext() {
  const context = useContext(DetailsPlanetContext);

  if (context === undefined) {
    throw new Error(
      "useDetailsPlanetContext must be used within a DetailsPlanetProvider",
    );
  }

  return context;
}
