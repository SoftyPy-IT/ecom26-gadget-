export const ProductCardSkeleton = () => (
  <div className="bg-white rounded-xl border border-zinc-100 p-4 animate-pulse">
    <div className="flex justify-between items-start mb-4">
      <div className="h-6 w-16 bg-zinc-200 rounded"></div>
      <div className="h-6 w-20 bg-zinc-200 rounded"></div>
    </div>
    <div className="relative aspect-square bg-zinc-200 rounded-lg mb-4"></div>
    <div className="h-5 w-3/4 bg-zinc-200 rounded mx-auto mb-2"></div>
    <div className="h-4 w-1/2 bg-zinc-200 rounded mx-auto mb-3"></div>
    <div className="flex justify-center gap-2">
      <div className="h-8 w-16 bg-zinc-200 rounded"></div>
      <div className="h-8 w-16 bg-zinc-200 rounded"></div>
    </div>
  </div>
);