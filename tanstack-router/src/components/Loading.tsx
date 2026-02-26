export default function Loading({ loading }: { loading: boolean }) {
  if (!loading) return null;

  return (
    <div className="absolute w-full bg-white/80 h-full flex z-10 pt-14 justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-black mx-auto mb-4"></div>
      </div>
    </div>
  );
}
