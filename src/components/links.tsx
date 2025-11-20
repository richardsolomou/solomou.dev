import { Button } from "@ras-sh/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ras-sh/ui/tooltip";
import { Link } from "@tanstack/react-router";
import { LINKS } from "~/lib/data";

export function Links() {
  return (
    <div>
      {LINKS.map((social) => (
        <Tooltip key={social.href}>
          <TooltipTrigger asChild>
            <Button asChild size="icon" variant="ghost">
              <Link
                data-umami-event={`${social.name.toLowerCase()}_link_clicked`}
                data-umami-event-url={social.href}
                rel="noopener noreferrer"
                target={social.newTab ? "_blank" : "_self"}
                title={social.name}
                to={social.href}
              >
                <img
                  alt={social.name}
                  className="size-4"
                  height={32}
                  src={social.icon}
                  width={32}
                />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{social.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
