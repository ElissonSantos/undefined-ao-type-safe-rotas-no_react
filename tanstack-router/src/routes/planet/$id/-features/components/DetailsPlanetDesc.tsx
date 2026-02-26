import { FileText, MapPin } from "lucide-react";
import CharacterView from "../../../../../components/CharacterView";
import useDetailsPlanetContext from "../hooks/useDetailsPlanetContext";

export default function DetailsPlanetDesc() {
  const { planet } = useDetailsPlanetContext();

  return (
    <div className="relative flex flex-col mx-auto">
      <div className="px-4 py-5 flex flex-col gap-5">
        <div>
          <p className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-3 flex items-center gap-2">
            <FileText size={20} className="text-[#e35124]" />
            Descrição
          </p>
          <div className="max-w-none text-slate-600 leading-relaxed">
            <p>{planet?.description}</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-3 flex items-center gap-2">
            <MapPin size={20} className="text-[#e35124]" />
            Personagens
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {planet?.characters &&
              planet?.characters.length > 0 &&
              planet?.characters.map((character, i) => (
                <CharacterView key={i} character={character} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
