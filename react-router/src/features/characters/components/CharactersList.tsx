import { NavLink } from "react-router";
import Loading from "../../../components/Loading";
import useCharactersContext from "../hooks/useCharactersContext";

export default function CharactersList() {
  const { response, isLoading } = useCharactersContext();

  return (
    <div className="relative">
      <Loading loading={isLoading} />

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

              <div className="absolute top-3 right-3 text-blue-950 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {c.race}
              </div>
            </div>
            <div className="p-5 border-t border-slate-50">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors">
                {c.name}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-slate-500">
                  Genero: {c.gender}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-sm text-slate-500">
                  Afiliação: {c.affiliation}
                </span>
              </div>

              <div className="w-full mt-4 transition-all flex text-center">
                <NavLink to={`/character/${c.id}`} className="w-full">
                  Ver perfil
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
