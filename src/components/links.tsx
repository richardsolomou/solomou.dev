import { usePostHog } from "@posthog/react";
import { Link } from "@tanstack/react-router";
import { LINKS } from "~/lib/data";

export function Links() {
  const posthog = usePostHog();

  return (
    <div className="flex justify-center gap-8 text-base text-zinc-400">
      {LINKS.map((link) => (
        <Link
          className="flex items-center gap-2 transition-colors hover:text-zinc-100"
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
          <img
            alt={link.name}
            className="size-6"
            height={32}
            src={link.icon}
            width={32}
          />
          <span>{link.name}</span>
        </Link>
      ))}
    </div>
  );
}
