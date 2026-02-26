import { NavLink } from "react-router";
import usePlanetsContext from "../hooks/usePlanetsContext";

export default function PlanetsList() {
  const { response } = usePlanetsContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {response?.items?.map((c) => (
        <div
          key={c.id}
          className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-black/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
        >
          <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
            <img
              alt={c.name}
              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              src={c.image}
            />
          </div>
          <div className="p-5 border-t border-slate-50">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors">
              {c.name}
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-500">
                Destruido: {c.isDestroyed ? "Sim" : "Não"}
              </span>
            </div>

            <div className="w-full mt-4 transition-all flex text-center">
              <NavLink to={`/planet/${c.id}`} className="w-full">
                Ver planeta
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
