import { useParams } from "react-router";
import { DetailsCharacterProvider } from "../features/details-characters/contexts/DetailsCharacterContext";
import DetailsCharaterHeader from "../features/details-characters/components/DetailsCharaterHeader";
import DetailsCharacterDesc from "../features/details-characters/components/DetailsCharacterDesc";
import DetailsCharacterTransformation from "../features/details-characters/components/DetailsCharacterTransformation";

export default function DetailsCharacters() {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

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
