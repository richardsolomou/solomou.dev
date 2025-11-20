import { cn } from "@ras-sh/ui/utils";
import { STACK } from "~/lib/data";
import { iconMap } from "~/lib/icons";

export function TechStack() {
  const getItemStyle = (index: number, total: number) => {
    // Top 30% - favorites (strongest color)
    if (index < Math.ceil(total * 0.3)) {
      return "bg-zinc-600/40 text-zinc-100 border-zinc-600";
    }
    // Next 30% - like (medium color)
    if (index < Math.ceil(total * 0.6)) {
      return "bg-zinc-700/40 text-zinc-300 border-zinc-700";
    }
    // Rest - familiar with (subtle)
    return "bg-zinc-800/40 text-zinc-400 border-zinc-800";
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
              {allTech.map((item, index) => {
                const Icon = iconMap[item];
                return (
                  <span
                    className={cn(
                      "flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
                      getItemStyle(index, allTech.length)
                    )}
                    key={item}
                  >
                    {Icon && <Icon className="size-3" />}
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
