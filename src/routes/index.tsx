import { createFileRoute } from "@tanstack/react-router";
import { Links } from "~/components/links";
import { Projects } from "~/components/projects";
import { TechStack } from "~/components/tech-stack";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-8 py-12 sm:space-y-16 md:py-20">
      {/* Main Content */}
      <main className="space-y-16">
        {/* Avatar */}
        <img
          alt="Richard Solomou"
          className="float-right mb-6 ml-6 rounded-full"
          height={128}
          src="/images/richard.png"
          width={128}
        />

        {/* Intro */}
        <section>
          <h1 className="mb-8 font-bold text-4xl tracking-tight">
            Hi, I'm Richard 👋
          </h1>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              I'm a Full-Stack Engineer and Technical Lead at{" "}
              <a
                className="inline-flex items-center gap-1 underline transition-colors hover:text-zinc-100"
                data-umami-event="company_link_clicked"
                data-umami-event-company="Keenious"
                data-umami-event-url="https://keenious.com"
                href="https://keenious.com"
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
              </a>{" "}
              and former Founder of{" "}
              <a
                className="inline-flex items-center gap-1 underline transition-colors hover:text-zinc-100"
                data-umami-event="company_link_clicked"
                data-umami-event-company="Tarrasque.io"
                data-umami-event-url="https://tarrasque.io"
                href="https://tarrasque.io"
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
            <p>
              I've been building websites since I was 8 years old. These days,
              when I'm not coding, I'm being a dad 👶, walking my husky 🐶,
              hanging out with my cat 🐈‍⬛, or drinking coffee ☕️.
            </p>
          </div>
        </section>

        {/* Links */}
        <section>
          <Links />
        </section>

        {/* About */}
        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            What I do
          </h2>
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              I build web applications using TypeScript, React, and Node.js. I
              work across the full stack, from database design to user
              interfaces.
            </p>
            <p>
              As a Technical Lead, I mentor developers, make architectural
              decisions, and help establish development practices that make
              teams more effective.
            </p>
            <p>
              I enjoy solving complex problems and debugging tricky issues.
              Whether it's optimizing performance or designing scalable systems,
              I like digging into challenges until I understand them completely.
            </p>
          </div>
        </section>

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
