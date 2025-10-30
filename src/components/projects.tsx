import { PROJECTS } from "~/lib/data";

const STATUS_CONFIG = {
  "open-source": {
    label: "Open Source",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  "private-beta": {
    label: "Private Beta",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  acquired: {
    label: "Acquired",
    className: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
} as const;

export function Projects() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <a
          className="group relative flex flex-col space-y-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-4 transition-all hover:border-zinc-700/50 hover:bg-zinc-900/50"
          href={project.url}
          key={project.name}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              {project.icon && (
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
            {project.status && (
              <span
                className={`lg:-right-2 lg:-top-2 rounded-md border px-2 py-1 font-medium text-xs lg:absolute ${STATUS_CONFIG[project.status].className}`}
              >
                {STATUS_CONFIG[project.status].label}
              </span>
            )}
          </div>

          <p className="flex-1 text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
