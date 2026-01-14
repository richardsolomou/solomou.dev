import { usePostHog } from "@posthog/react";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "~/components/footer";
import { Projects } from "~/components/projects";
import { TechStack } from "~/components/tech-stack";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const posthog = usePostHog();

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-8 py-12 sm:space-y-16 md:py-20">
      {/* Main Content */}
      <main className="space-y-16">
        {/* Avatar */}
        <img
          alt="Richard Solomou"
          className="float-right -mt-3 mb-6 ml-6 rounded-full"
          height={128}
          src="/images/richard.png"
          width={128}
        />

        {/* Intro */}
        <section>
          <h1 className="mb-6 font-bold text-4xl tracking-tight">
            Hi, I'm Richard 👋
          </h1>

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
            , former Technical Lead at{" "}
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
            , and former Founder of{" "}
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
            </a>
            .
          </p>
        </section>

        {/* About */}
        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            What I do
          </h2>
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              I've been building for the web since I was 8 years old. These
              days, that means everything from Kubernetes infrastructure to
              clean user interfaces. I love building products that make complex
              things feel simple ✨, with a focus on clean code and thoughtful
              design.
            </p>
            <p>
              At work, I'm building features that help teams understand their
              users 📊. Outside of work, I create open-source apps, libraries,
              and templates for developers and gamers 🎮.
            </p>
            <p>
              What drives me is seeing ideas become tools that thousands of
              people use every day 🚀. That feedback loop - building, shipping,
              and seeing real impact - is what keeps me up at night coding.
            </p>
            <p>
              When I'm not coding, I'm being a dad 👶, walking my husky 🐶,
              hanging out with my cat 🐈‍⬛, or drinking coffee ☕️.
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

      <Footer />
    </div>
  );
}
