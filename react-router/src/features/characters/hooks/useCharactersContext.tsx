import { useContext } from "react";
import CharactersContext from "../contexts/CharactersContext";

export default function useCharactersContext() {
  const context = useContext(CharactersContext);

  if (context === undefined) {
    throw new Error(
      "useCharactersContext must be used within a CharactersProvider",
    );
  }

  return context;
}
