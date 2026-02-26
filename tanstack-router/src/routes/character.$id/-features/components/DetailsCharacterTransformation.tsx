import { useContext } from "react";
import { Sparkles } from "lucide-react";
import Loading from "../../../../components/Loading";
import DetailsCharacterContext from "../contexts/DetailsCharacterContext";

export default function DetailsCharacterTransformation() {
  const { character, isLoading } = useContext(DetailsCharacterContext);

  return (
    <div className="relative flex flex-col mx-auto">
      <Loading loading={isLoading} />

      {character?.transformations && character.transformations.length > 0 && (
        <div className="px-4 py-5">
          <p className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-2">
            <Sparkles size={24} className="text-[#e35124]" />
            Transformações
          </p>

          <div className="flex flex-col gap-4">
            {character.transformations.map((transformation) => (
              <div
                key={transformation.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-black/50"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 border-black/20 bg-slate-100">
                  <img
                    src={transformation.image}
                    alt={transformation.name}
                    className="w-full h-full object-top object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">
                        {transformation.name}
                      </h3>
                      <p className="text-sm opacity-70">
                        Ki: {transformation.ki}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
