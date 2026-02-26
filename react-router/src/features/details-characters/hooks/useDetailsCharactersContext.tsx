import { useContext } from "react";
import DetailsCharacterContext from "../contexts/DetailsCharacterContext";

export default function useDetailsCharacterContext() {
  const context = useContext(DetailsCharacterContext);

  if (context === undefined) {
    throw new Error(
      "useDetailsCharacterContext must be used within a DetailsCharacterProvider",
    );
  }

  return context;
}
