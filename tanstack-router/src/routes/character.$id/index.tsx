import { createFileRoute } from "@tanstack/react-router";
import { DetailsCharacterProvider } from "./-features/contexts/DetailsCharacterContext";
import DetailsCharaterHeader from "./-features/components/DetailsCharaterHeader";
import DetailsCharacterDesc from "./-features/components/DetailsCharacterDesc";
import DetailsCharacterTransformation from "./-features/components/DetailsCharacterTransformation";

export const Route = createFileRoute("/character/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <DetailsCharacterProvider characterId={id}>
      <h1>Detalhes personagem</h1>

      <DetailsCharaterHeader />

      <div className="px-24 py-10">
        <DetailsCharacterDesc />

        <DetailsCharacterTransformation />
      </div>
    </DetailsCharacterProvider>
  );
}
