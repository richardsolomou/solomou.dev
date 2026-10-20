import { usePostHog } from "@posthog/react";
import { Link } from "@tanstack/react-router";
import { LINKS } from "../lib/data";

export function Links() {
  const posthog = usePostHog();

  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base text-zinc-400">
      {LINKS.map((link) => (
        <Link
          className="group relative transition-colors hover:text-zinc-100"
          key={link.href}
          onClick={() => {
            posthog?.capture(`${link.name.toLowerCase()}_link_clicked`, {
              url: link.href,
            });
          }}
          rel="noopener noreferrer"
          target={link.newTab ? "_blank" : "_self"}
          to={link.href}
        >
          <link.icon
            className="size-7 transition duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-[0_4px_12px_rgba(244,244,245,0.25)]"
            style={{ color: link.color }}
          />
          <span className="-translate-x-1/2 pointer-events-none absolute bottom-full left-1/2 mb-4 translate-y-1 whitespace-nowrap rounded-md bg-zinc-800 px-2.5 py-1 font-medium text-xs text-zinc-100 opacity-0 shadow-lg ring-1 ring-white/10 transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {link.name}
            <span className="-bottom-1 -translate-x-1/2 absolute left-1/2 size-2 rotate-45 bg-zinc-800" />
          </span>
        </Link>
      ))}
    </div>
  );
}
