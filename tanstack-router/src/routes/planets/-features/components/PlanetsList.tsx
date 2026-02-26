import { Link } from "@tanstack/react-router";
import usePlanetsContext from "../hooks/usePlanetsContext";

export default function PlanetsList() {
  const { response } = usePlanetsContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {response?.items?.map((p) => (
        <div
          key={p.id}
          className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-black/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
        >
          <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
            <img
              alt={p.name}
              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              src={p.image}
            />
          </div>
          <div className="p-5 border-t border-slate-50">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors">
              {p.name}
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-500">
                Destruido: {p.isDestroyed ? "Sim" : "Não"}
              </span>
            </div>

            <div className="w-full mt-4 transition-all flex text-center">
              <Link
                to="/planet/$id"
                params={{ id: p.id.toString() }}
                className="w-full"
              >
                Ver planeta
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
