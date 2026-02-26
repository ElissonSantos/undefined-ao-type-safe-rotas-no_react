import { createFileRoute } from "@tanstack/react-router";
import { PlanetsProvider } from "./-features/contexts/PlanetsContext";
import PlanetsFilters from "./-features/components/PlanetsFilters";
import PlanetsList from "./-features/components/PlanetsList";
import { planetsSearchSchema } from "./-features/schemas/planets-search.schema";

export const Route = createFileRoute("/planets/")({
  validateSearch: (search) => planetsSearchSchema.parse(search),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PlanetsProvider>
      <h1>Planetas</h1>

      <PlanetsFilters />

      <PlanetsList />
    </PlanetsProvider>
  );
}
