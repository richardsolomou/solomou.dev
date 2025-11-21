/// <reference types="vite/client" />
import geistWoff2 from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type * as React from "react";
import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { NotFound } from "~/components/not-found";
import { PostHogWrapper } from "~/components/posthog-wrapper";
import { seo } from "~/lib/seo";
import appCss from "~/styles/app.css?url";

const CANONICAL_DOMAIN = "https://solomou.dev";

const getCanonicalUrl = (pathname: string) => `${CANONICAL_DOMAIN}${pathname}`;

export const Route = createRootRoute({
  head: ({ match }) => {
    const canonicalUrl = getCanonicalUrl(match.pathname);

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        ...seo({
          title: "solomou.dev",
          description:
            "Full-Stack Engineer 👨‍💻, proud dad 👶, and coffee junkie ☕️",
          canonical: canonicalUrl,
        }),
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: geistWoff2,
          crossOrigin: "anonymous",
        },
        { rel: "canonical", href: canonicalUrl },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
        { rel: "icon", href: "/favicon.ico" },
      ],
    };
  },
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="dark min-h-dvh font-sans text-foreground antialiased">
        <PostHogWrapper>{children}</PostHogWrapper>
        <Scripts />
      </body>
    </html>
  );
}
