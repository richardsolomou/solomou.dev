import { cn } from "@ras-sh/ui/utils";
import { STACK } from "~/lib/data";

export function TechStack() {
  const getItemStyle = (index: number, total: number) => {
    // Top 30% - favorites (strongest color)
    if (index < Math.ceil(total * 0.3)) {
      return "bg-zinc-600/40 text-zinc-100 border-zinc-600";
    }
    // Next 30% - like (medium color)
    if (index < Math.ceil(total * 0.6)) {
      return "bg-zinc-700/40 text-zinc-300 border-zinc-800";
    }
    // Rest - familiar with (subtle)
    return "bg-zinc-900/40 text-zinc-500 border-zinc-900";
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
                  className={cn(
                    "rounded-md border px-2 py-1 text-xs transition-colors",
                    getItemStyle(index, allTech.length)
                  )}
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
