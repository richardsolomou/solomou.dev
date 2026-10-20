import { usePostHog } from "@posthog/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Links } from "../components/links";
import { Projects } from "../components/projects";
import { TechStack } from "../components/tech-stack";
import { EXPERIENCE } from "../lib/data";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const posthog = usePostHog();

  return (
    <div className="mx-auto max-w-3xl px-8 py-12 md:py-20 xl:grid xl:max-w-7xl xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-20">
      <header className="space-y-16">
        {/* Avatar */}
        <img
          alt="Richard Solomou"
          className="float-right -mt-3 mb-6 ml-6 rounded-full"
          height={128}
          src="/images/richard-purple.png"
          width={128}
        />

        {/* Intro */}
        <section>
          <h1 className="mb-6 font-bold text-4xl tracking-tight">Hi, I'm Richard 👋</h1>

          <p className="text-lg text-zinc-300 leading-relaxed">
            I'm a Product Engineer at{" "}
            <a
              className="inline-flex items-center gap-1 underline transition-colors hover:text-zinc-100"
              href="https://posthog.com"
              onClick={() => {
                posthog?.capture("company_link_clicked", {
                  company: "PostHog",
                  url: "https://posthog.com",
                });
              }}
              rel="noopener"
              target="_blank"
            >
              <img
                alt="PostHog"
                className="inline h-3 w-auto"
                height={12}
                src="/images/logos/posthog.svg"
                width={12}
              />
              PostHog
            </a>
            , working on our MCP server. Previously Technical Lead at{" "}
            <a
              className="inline-flex items-center gap-1 underline transition-colors hover:text-zinc-100"
              href="https://keenious.com"
              onClick={() => {
                posthog?.capture("company_link_clicked", {
                  company: "Keenious",
                  url: "https://keenious.com",
                });
              }}
              rel="noopener"
              target="_blank"
            >
              <img
                alt="Keenious"
                className="inline h-3 w-auto"
                height={12}
                src="/images/logos/keenious.webp"
                width={12}
              />
              Keenious
            </a>
            , and founder of{" "}
            <a
              className="inline-flex items-center gap-1 underline transition-colors hover:text-zinc-100"
              href="https://tarrasque.io"
              onClick={() => {
                posthog?.capture("company_link_clicked", {
                  company: "Tarrasque.io",
                  url: "https://tarrasque.io",
                });
              }}
              rel="noopener"
              target="_blank"
            >
              <img
                alt="Tarrasque.io"
                className="inline h-3 w-auto"
                height={12}
                src="/images/logos/tarrasque.io.webp"
                width={12}
              />
              Tarrasque.io
            </a>{" "}
            (acquired).
          </p>
        </section>

        <div className="-mt-4 mb-12">
          <Links />
        </div>

        {/* About */}
        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            What I Do
          </h2>
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              I've been building for the web since I was 8. These days that means anything from Go
              services and Kubernetes to the UI on top.
            </p>
            <p>
              Before PostHog MCP, I worked on our AI Gateway and AI Observability. Outside work, I
              make open-source tools and software for tabletop gamers.
            </p>
            <p>
              When I'm not coding, I'm being a dad 👶, walking my husky 🐶, or drinking coffee ☕️.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            Experience
          </h2>
          <ol className="space-y-4">
            {EXPERIENCE.slice(0, 5).map((exp) => (
              <li className="flex items-baseline gap-3" key={exp.id}>
                <img
                  alt=""
                  className="size-4 shrink-0 translate-y-0.5 object-contain"
                  height={16}
                  src={exp.companyIcon}
                  width={16}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-zinc-100">{exp.title}</p>
                  <p className="text-sm text-zinc-400">{exp.company}</p>
                </div>
                <span className="shrink-0 text-sm text-zinc-500 tabular-nums">
                  {exp.period.replace(/[A-Za-z]+ (\d{4})/g, "$1")}
                </span>
              </li>
            ))}
          </ol>
          <Link
            className="mt-6 inline-block text-sm text-zinc-400 underline decoration-zinc-600 transition-colors hover:text-zinc-100"
            to="/cv"
          >
            Full CV →
          </Link>
        </section>
      </header>

      <main className="mt-16 space-y-16 xl:mt-0">
        {/* Projects */}
        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            Personal Projects
          </h2>
          <Projects />
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            Tech Stack
          </h2>
          <TechStack />
        </section>
      </main>
    </div>
  );
}
