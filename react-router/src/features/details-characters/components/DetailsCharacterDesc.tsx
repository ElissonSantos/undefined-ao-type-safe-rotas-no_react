import { useContext } from "react";
import {
  Zap,
  ArrowUpDown,
  Users,
  GitCompare,
  FileText,
  type LucideProps,
} from "lucide-react";
import DetailsCharacterContext from "../contexts/DetailsCharacterContext";
import Loading from "../../../components/Loading";

export default function DetailsCharacterView() {
  const { character, isLoading } = useContext(DetailsCharacterContext);

  const cards: {
    label: string;
    value: string | number;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  }[] = [
    { label: "Ki Atual", value: character?.ki ?? "N/A", icon: Zap },
    { label: "Maior Ki", value: character?.maxKi ?? "N/A", icon: ArrowUpDown },
    { label: "Raça", value: character?.race ?? "N/A", icon: Users },
    { label: "Gênero", value: character?.gender ?? "N/A", icon: GitCompare },
  ];

  return (
    <div className="relative flex flex-col mx-auto">
      <Loading loading={isLoading} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-xl p-6 border border-black/10 bg-white shadow-sm"
          >
            <div className="flex items-center gap-2 text-black">
              <card.icon size={20} />

              <p className="text-sm font-medium leading-normal opacity-70">
                {card.label}
              </p>
            </div>
            <p className="tracking-light text-2xl font-bold leading-tight">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="px-4 py-5">
        <p className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-3 flex items-center gap-2">
          <FileText size={20} className="text-[#e35124]" />
          Descrição
        </p>
        <div className="max-w-none text-slate-600 leading-relaxed">
          <p>{character?.description}</p>
        </div>
      </div>
    </div>
  );
}
