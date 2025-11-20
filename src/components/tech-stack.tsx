import { Badge } from "@ras-sh/ui/badge";
import { STACK } from "~/lib/data";
import { iconMap } from "~/lib/icons";

export function TechStack() {
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
              {allTech.map((item) => {
                const Icon = iconMap[item];
                return (
                  <Badge
                    className="gap-1.5 font-normal print:border-zinc-300"
                    key={item}
                    variant="secondary"
                  >
                    {Icon && <Icon className="size-3 print:hidden" />}
                    <span>{item}</span>
                  </Badge>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
