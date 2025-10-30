import { STACK } from "~/lib/data";

export function TechStack() {
  const getItemStyle = (index: number, total: number) => {
    // Top 30% - favorites (strongest color)
    if (index < Math.ceil(total * 0.3)) {
      return "bg-indigo-400/20 text-zinc-200 border border-indigo-400/30";
    }
    // Next 30% - like (medium color)
    if (index < Math.ceil(total * 0.6)) {
      return "bg-zinc-700/50 text-zinc-300 border border-zinc-700/30";
    }
    // Rest - familiar with (subtle)
    return "bg-zinc-800/30 text-zinc-400 border border-zinc-800/30";
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {Object.entries(STACK).map(([category, tech]) => {
        const allTech = [...tech.visible, ...tech.hidden];

        return (
          <div className="space-y-3" key={category}>
            <h3 className="font-semibold text-sm text-zinc-100 uppercase tracking-wider">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTech.map((item, index) => (
                <span
                  className={`rounded-md px-2 py-1 text-xs transition-colors ${getItemStyle(index, allTech.length)}`}
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
