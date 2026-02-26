import { useContext } from "react";
import Loading from "../../../../components/Loading";
import DetailsCharacterContext from "../contexts/DetailsCharacterContext";

export default function DetailsCharaterHeader() {
  const { character, isLoading } = useContext(DetailsCharacterContext);

  return (
    <div className="relative flex flex-col mx-auto">
      <Loading loading={isLoading} />

      <div>
        <div
          className="w-full bg-top bg-no-repeat bg-fit flex flex-col justify-end overflow-hidden bg-slate-600 rounded-xl min-h-150 shadow-xl relative"
          style={{ backgroundImage: `url("${character?.image}")` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 via-transparent to-transparent"></div>
          <div className="relative p-8">
            <div className="flex flex-col gap-1">
              <p className="text-white text-5xl font-black leading-tight tracking-[-0.033em]">
                {character?.name}
              </p>
              <p className="text-white text-xl font-medium">
                {character?.affiliation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
