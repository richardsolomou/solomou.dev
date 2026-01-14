import { usePostHog } from "@posthog/react";
import { Badge } from "@ras-sh/ui/badge";
import { cn } from "@ras-sh/ui/utils";
import { PROJECTS } from "~/lib/data";
import { iconMap } from "~/lib/icons";

const getLabelStyle = (label: string) => {
  switch (label) {
    case "Open Beta":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Acquired":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    default:
      return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  }
};

export function Projects() {
  const posthog = usePostHog();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PROJECTS.map((project) => (
        <a
          className="group relative flex flex-col space-y-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-4 transition-all hover:border-zinc-700/50 hover:bg-zinc-900/50"
          href={project.url}
          key={project.name}
          onClick={() => {
            posthog?.capture("project_link_clicked", {
              project: project.name,
              url: project.url,
            });
          }}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              {!!project.icon && (
                <img
                  alt={project.name}
                  className="h-6 w-6 rounded"
                  height={32}
                  src={project.icon}
                  width={32}
                />
              )}
              <h3 className="font-bold text-lg text-zinc-100">
                {project.name}
              </h3>
            </div>
            {!!project.label && (
              <span
                className={cn(
                  "absolute -top-px -right-px rounded-tr-lg rounded-bl-lg border px-2 py-1 font-medium text-xs",
                  getLabelStyle(project.label)
                )}
              >
                {project.label}
              </span>
            )}
          </div>

          <p className="flex-1 text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => {
              const Icon = iconMap[tag];
              return (
                <Badge
                  className="gap-1.5 font-normal print:border-zinc-300"
                  key={tag}
                  variant="secondary"
                >
                  {Icon}
                  <span>{tag}</span>
                </Badge>
              );
            })}
          </div>
        </a>
      ))}

      {/* Placeholder for next project */}
      <div className="relative flex items-center justify-center rounded-lg border border-zinc-800/30 border-dashed bg-zinc-900/10 p-4 opacity-60">
        <p className="text-sm text-zinc-400">Building something new...</p>
      </div>
    </div>
  );
}
