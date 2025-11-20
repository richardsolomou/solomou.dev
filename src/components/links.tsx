import { Button } from "@ras-sh/ui/button";
import { Link } from "@tanstack/react-router";
import { LINKS } from "~/lib/data";

export function Links() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
      {LINKS.map((social) => (
        <Button asChild key={social.href} variant="outline">
          <Link
            data-umami-event={`${social.name.toLowerCase()}_link_clicked`}
            data-umami-event-url={social.href}
            rel="noopener noreferrer"
            target={social.newTab ? "_blank" : "_self"}
            title={social.name}
            to={social.href}
          >
            <span className="flex items-center gap-2">
              <img
                alt={social.name}
                className="size-4"
                height={32}
                src={social.icon}
                width={32}
              />
              {social.name}
            </span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
