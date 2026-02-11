const breakingItems = [
  'Breaking: Parliament debates national AI safety framework with cross-party backing.',
  'Live: Coastal resilience funding deal draws strong support at global summit.',
  'Update: Startup seed activity surges as deep-tech attracts new capital pools.',
];

export default function BreakingTicker() {
  const content = [...breakingItems, ...breakingItems].join('   •   ');

  return (
    <div className="border-b border-red-200 bg-red-700 text-white">
      <div className="container-news flex items-center gap-4 overflow-hidden py-2">
        <span className="shrink-0 rounded bg-white px-2 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
          Breaking
        </span>
        <div className="relative w-full overflow-hidden">
          <p className="animate-[ticker_30s_linear_infinite] whitespace-nowrap text-sm">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
