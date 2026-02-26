import { NavLink } from "react-router";
import type { Character } from "../libs/models/characters";

interface CharacterViewProps {
  character: Character;
}

export default function CharacterView({ character }: CharacterViewProps) {
  return (
    <div
      key={character.id}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-black/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
        <img
          alt={character.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          src={character.image}
        />

        <div className="absolute top-3 right-3 text-blue-950 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
          {character.race}
        </div>
      </div>
      <div className="p-5 border-t border-slate-50">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors">
          {character.name}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-slate-500">
            Genero: {character.gender}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-sm text-slate-500">
            Afiliação: {character.affiliation}
          </span>
        </div>

        <div className="w-full mt-4 transition-all flex text-center">
          <NavLink to={`/character/${character.id}`} className="w-full">
            Ver perfil
          </NavLink>
        </div>
      </div>
    </div>
  );
}
