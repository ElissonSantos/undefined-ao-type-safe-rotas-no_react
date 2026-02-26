import Loading from "../../../../components/Loading";
import CharacterView from "../../../../components/CharacterView";
import useCharactersContext from "../hooks/useCharactersContext";

export default function CharactersList() {
  const { response, isLoading } = useCharactersContext();

  return (
    <div className="relative">
      <Loading loading={isLoading} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {response?.items?.map((c) => (
          <CharacterView key={c.id} character={c} />
        ))}
      </div>
    </div>
  );
}
