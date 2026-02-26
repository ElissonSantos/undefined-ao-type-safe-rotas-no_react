import Loading from "../../../../components/Loading";
import useDetailsPlanetContext from "../hooks/useDetailsPlanetContext";

export default function DetailsPlanetHeader() {
  const { planet, isLoading } = useDetailsPlanetContext();

  return (
    <div className="relative flex flex-col mx-auto">
      <Loading loading={isLoading} />

      <div>
        <div
          className="w-full bg-top bg-cover bg-no-repeat bg-fit flex flex-col justify-end overflow-hidden bg-slate-600 rounded-xl min-h-150 shadow-xl relative"
          style={{ backgroundImage: `url("${planet?.image}")` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 via-transparent to-transparent"></div>
          <div className="relative p-8">
            <div className="flex flex-col gap-1">
              <p
                data-destroyed={planet?.isDestroyed}
                className="text-white rounded-xl bg-[#1aa523] font-bold w-fit px-4 py-1 data-[destroyed=true]:bg-[#e35124]"
              >
                {planet?.isDestroyed ? "Destruido" : "Habitavel"}
              </p>

              <p className="text-white text-5xl font-black leading-tight tracking-[-0.033em]">
                {planet?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
