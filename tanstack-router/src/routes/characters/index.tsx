import { createFileRoute } from "@tanstack/react-router";
import { CharactersProvider } from "./-features/contexts/CharactersContext";
import CharactersFilters from "./-features/components/CharactersFilters";
import CharactersList from "./-features/components/CharactersList";
import { charactersSearchSchema } from "./-features/schemas/characters-search.schema";

export const Route = createFileRoute("/characters/")({
  validateSearch: (search) => charactersSearchSchema.parse(search),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CharactersProvider>
      <h1>Personagens</h1>

      <CharactersFilters />

      <CharactersList />
    </CharactersProvider>
  );
}
