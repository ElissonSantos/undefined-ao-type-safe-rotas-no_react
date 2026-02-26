import { useParams } from "react-router";
import { DetailsPlanetProvider } from "../features/details-planets/contexts/DetailsPlanetContext";
import DetailsPlanetHeader from "../features/details-planets/components/DetailsPlanetHeader";
import DetailsPlanetDesc from "../features/details-planets/components/DetailsPlanetDesc";

export default function DetailsPlanets() {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

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
