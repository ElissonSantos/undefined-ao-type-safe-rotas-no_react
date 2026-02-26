import { createFileRoute } from "@tanstack/react-router";
import { DetailsPlanetProvider } from "./-features/contexts/DetailsPlanetContext";
import DetailsPlanetHeader from "./-features/components/DetailsPlanetHeader";
import DetailsPlanetDesc from "./-features/components/DetailsPlanetDesc";

export const Route = createFileRoute("/planet/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <DetailsPlanetProvider planetId={id}>
      <h1>Detalhes planeta</h1>

      <DetailsPlanetHeader />

      <div className="px-24 py-10">
        <DetailsPlanetDesc />
      </div>
    </DetailsPlanetProvider>
  );
}
