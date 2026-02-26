import { CharactersProvider } from "../features/characters/contexts/CharactersContext";
import CharactersFilters from "../features/characters/components/CharactersFilters";
import CharactersList from "../features/characters/components/CharactersList";

export default function Characters() {
  return (
    <CharactersProvider>
      <h1>Personagens</h1>

      <CharactersFilters />

      <CharactersList />
    </CharactersProvider>
  );
}
