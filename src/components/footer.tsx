import { Link } from "@tanstack/react-router";
import { usePostHog } from "posthog-js/react";
import { LINKS } from "~/lib/data";

export function Footer() {
  const posthog = usePostHog();

  return (
    <footer className="flex justify-center gap-6 border-zinc-800/50 border-t pt-8 text-sm text-zinc-400">
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
            className="size-4"
            height={16}
            src={link.icon}
            width={16}
          />
          <span>{link.name}</span>
        </Link>
      ))}
    </footer>
  );
}
