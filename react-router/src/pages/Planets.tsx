import { PlanetsProvider } from "../features/planets/contexts/PlanetsContext";
import PlanetsFilters from "../features/planets/components/PlanetsFilters";
import PlanetsList from "../features/planets/components/PlanetsList";

export default function Planets() {
  return (
    <PlanetsProvider>
      <h1>Planetas</h1>

      <PlanetsFilters />

      <PlanetsList />
    </PlanetsProvider>
  );
}
