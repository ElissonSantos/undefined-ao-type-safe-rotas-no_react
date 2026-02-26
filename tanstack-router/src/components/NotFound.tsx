import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <section className="font-display relative min-h-[70vh] overflow-hidden rounded-3xl bg-linear-to-br from-amber-50 via-orange-100 to-red-100 p-8 shadow-xl ring-1 ring-orange-200/60 sm:p-12">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-orange-300/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-red-300/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">
            Rota nao encontrada
          </p>
          <h1 className="text-6xl font-black leading-tight text-orange-950 sm:text-7xl">
            404
          </h1>
          <p className="max-w-xl text-lg font-medium text-orange-900/90">
            A URL solicitada nao existe neste universo. Confira o endereco ou
            volte para as listas principais.
          </p>
          <p className="text-sm text-orange-800/80">
            Caminho atual:{" "}
            <span className="font-mono">{location.pathname}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/characters"
              className="rounded-full bg-orange-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
            >
              Ver personagens
            </Link>
            <Link
              to="/planets"
              className="rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-orange-900 shadow-sm ring-1 ring-orange-200 transition hover:bg-white"
            >
              Explorar planetas
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-white/70 shadow-inner ring-1 ring-orange-200/60">
            <span className="text-5xl font-black text-orange-600">?</span>
            <span className="absolute -right-3 -top-3 h-4 w-4 animate-pulse rounded-full bg-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
