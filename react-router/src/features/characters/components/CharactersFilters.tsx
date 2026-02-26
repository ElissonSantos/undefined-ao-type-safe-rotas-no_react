import { RaceEnum, type RaceEnumType } from "../../../libs/enums/race.enum";
import useCharactersContext from "../hooks/useCharactersContext";

export default function CharactersFilters() {
  const { response, filters, setFilters } = useCharactersContext();

  return (
    <div className="flex flex-col gap-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-5">
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              Raça
            </span>
            <select
              className="w-full h-12 pl-13 pr-10 bg-white border border-slate-200 rounded-xl appearance-none focus:ring-2 focus:ring-black outline-none cursor-pointer"
              value={filters.race}
              onChange={(e) =>
                setFilters({ ...filters, race: e.target.value as RaceEnumType })
              }
            >
              <option value="">Selecione</option>

              {Object.values(RaceEnum).map((race) => (
                <option key={race} value={race}>
                  {race}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <button
          disabled={filters.page === 1}
          onClick={() =>
            setFilters((prev) => ({ ...prev, page: prev.page - 1 }))
          }
        >
          Pagina Anterior
        </button>

        <span>
          Pagina {filters.page || 1} de {response?.meta?.totalPages || 1}
        </span>

        <button
          disabled={filters.page === response?.meta?.totalPages}
          onClick={() =>
            setFilters((prev) => ({ ...prev, page: prev.page + 1 }))
          }
        >
          Proxima Pagina
        </button>
      </div>
    </div>
  );
}
