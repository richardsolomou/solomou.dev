import { Button } from "@ras-sh/ui/button";
import { Link } from "@tanstack/react-router";
import { LINKS } from "~/lib/data";

export function Links() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {LINKS.map((social) => (
        <Button
          asChild
          className="text-muted-foreground transition-all duration-200 hover:text-foreground"
          key={social.href}
          variant="outline"
        >
          <Link
            data-umami-event={`${social.name.toLowerCase()}_link_clicked`}
            data-umami-event-url={social.href}
            rel="noopener noreferrer"
            target={social.newTab ? "_blank" : "_self"}
            title={social.name}
            to={social.href}
          >
            <span className="flex items-center gap-2">
              <social.icon className="size-5 text-indigo-400" />
              {social.name}
            </span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
