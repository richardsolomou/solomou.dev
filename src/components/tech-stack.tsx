import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { STACK } from "~/lib/data";

export function TechStack() {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="space-y-6">
      {Object.entries(STACK).map(([category, tech]) => {
        const isExpanded = expandedCategories[category];
        const allTech = [...tech.visible, ...(isExpanded ? tech.hidden : [])];

        return (
          <div
            className="rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-4"
            key={category}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold text-sm text-zinc-200 uppercase tracking-wider">
                {category}
              </h3>
              {tech.hidden.length > 0 && (
                <button
                  className="cursor-pointer rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-500 transition-colors hover:bg-zinc-700 hover:text-zinc-300"
                  onClick={() => toggleCategory(category)}
                  type="button"
                >
                  <span className="flex items-center gap-1">
                    {isExpanded ? "Less" : "More"}
                    {isExpanded ? (
                      <CaretUpIcon className="h-3 w-3" />
                    ) : (
                      <CaretDownIcon className="h-3 w-3" />
                    )}
                  </span>
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTech.map((item) => (
                <span
                  className="rounded bg-zinc-800 px-2 py-1 font-medium text-sm text-zinc-300"
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
