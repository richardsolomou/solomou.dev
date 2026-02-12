import { usePostHog } from "@posthog/react";
import { Badge } from "@ras-sh/ui/badge";
import { Button } from "@ras-sh/ui/button";
import { cn } from "@ras-sh/ui/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftIcon, DownloadIcon, GlobeIcon, MailIcon } from "lucide-react";
import { EDUCATION, EXPERIENCE, LANGUAGES, PROJECTS, SKILLS } from "~/lib/data";
import { iconMap } from "~/lib/icons";

export const Route = createFileRoute("/cv")({
  component: CV,
});

const MAX_EXPERIENCE_ITEMS_PRINT = 8;
const MAX_PROJECTS_PRINT = 5;

function CV() {
  const posthog = usePostHog();

  return (
    <>
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 z-10 flex items-center gap-2 print:hidden">
        <Button
          asChild
          className="backdrop-blur-sm"
          onClick={() => {
            posthog?.capture("cv_back_clicked");
          }}
          size="icon-sm"
          variant="outline"
        >
          <Link title="Back to home" to="/">
            <ArrowLeftIcon className="size-4" />
          </Link>
        </Button>

        <Button
          className="backdrop-blur-sm"
          onClick={() => {
            posthog?.capture("cv_download_clicked");
            window.print();
          }}
          size="icon-sm"
          title="Download PDF"
          variant="outline"
        >
          <DownloadIcon className="size-4" />
        </Button>
      </nav>

      <div className="mx-auto max-w-7xl px-8 py-12 md:py-20 print:max-w-none print:px-8 print:py-6">
        {/* Header */}
        <header className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left print:mb-6 print:gap-4">
          <img
            alt="Richard Solomou"
            className="shrink-0 rounded-full print:size-25"
            height={128}
            src="/images/richard-purple.png"
            width={128}
          />

          <div>
            <h1 className="font-bold text-4xl tracking-tight sm:text-5xl print:text-2xl">
              Richard Solomou
            </h1>
            <p className="mt-2 font-light text-xl text-zinc-300 sm:text-2xl print:mt-1 print:text-lg">
              Full-Stack Engineer & Technical Lead
            </p>
            <div className="mt-4 flex flex-col flex-wrap gap-2 text-base text-zinc-400 sm:justify-start sm:text-lg print:mt-2 print:text-sm">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <a
                  className="flex items-center gap-2 underline decoration-zinc-500 transition-colors hover:text-white hover:decoration-zinc-300"
                  href="mailto:richard@solomou.dev"
                  onClick={() => {
                    posthog?.capture("cv_email_clicked");
                  }}
                >
                  <MailIcon className="size-4" />
                  richard@solomou.dev
                </a>

                <span className="hidden text-zinc-600 sm:block">•</span>

                <a
                  className="flex items-center gap-2 underline decoration-zinc-500 transition-colors hover:text-white hover:decoration-zinc-300"
                  href="https://solomou.dev"
                  onClick={() => {
                    posthog?.capture("cv_website_clicked");
                  }}
                >
                  <GlobeIcon className="size-4" />
                  solomou.dev
                </a>
              </div>
            </div>
          </div>
        </header>

        <div
          className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16"
          data-print-cols
        >
          {/* Main Content - Experience & Education */}
          <div className="space-y-8 lg:col-span-2 lg:space-y-12 print:space-y-4">
            {/* Experience */}
            <section className="pb-4">
              <h2 className="mb-8 border-zinc-700 border-b pb-2 font-bold text-2xl text-zinc-100 print:mb-4 print:text-lg">
                Experience
              </h2>
              <div className="space-y-10 print:space-y-6.5">
                {EXPERIENCE.map((exp, index) => (
                  <div
                    className={cn(
                      "relative border-zinc-600 sm:border-l-3 sm:pl-8 print:border-l-0 print:pl-0",
                      index >= MAX_EXPERIENCE_ITEMS_PRINT && "print:hidden"
                    )}
                    key={exp.id}
                  >
                    <div className="absolute -top-1 -left-2.5 hidden size-4 rounded-full border-2 border-zinc-800 bg-zinc-600 sm:block print:hidden" />
                    <div className="mb-4 print:mb-2">
                      <h3 className="mb-1 font-bold text-xl text-zinc-100 print:mb-0 print:text-base">
                        {exp.title}
                      </h3>
                      <p className="mb-1 text-lg text-zinc-200 print:mb-0 print:text-sm">
                        <a
                          className="inline-flex items-center gap-1 underline decoration-zinc-500 transition-colors hover:text-white hover:decoration-zinc-300 print:no-underline"
                          href={exp.companyUrl}
                          onClick={() => {
                            posthog?.capture("cv_company_clicked", {
                              company: exp.company,
                              url: exp.companyUrl,
                            });
                          }}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {!!exp.companyIcon && (
                            <>
                              <img
                                alt={exp.company}
                                className="inline h-3 w-auto print:hidden"
                                height={50}
                                src={exp.companyIcon}
                                width={50}
                              />
                              <img
                                alt={exp.company}
                                className="hidden h-3 w-auto print:inline"
                                height={50}
                                src={exp.companyIconPrint || exp.companyIcon}
                                width={50}
                              />
                            </>
                          )}
                          <span className="ml-0.5">{exp.company}</span>
                        </a>
                      </p>
                      <p className="font-medium text-sm text-zinc-400 uppercase tracking-wider print:text-xs">
                        {exp.period} — {exp.location}
                      </p>
                    </div>
                    <ul className="space-y-3 text-zinc-300 leading-relaxed print:space-y-1 print:text-sm">
                      {exp.description?.map((item) => (
                        <li className="flex" key={item}>
                          <span className="mt-1.5 mr-3 text-xs text-zinc-500 print:mt-1">
                            ▸
                          </span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-8 border-zinc-700 border-b pb-2 font-bold text-2xl text-zinc-100 print:mb-4 print:text-lg">
                Education
              </h2>
              <div className="relative border-zinc-600 sm:border-l-3 sm:pl-8 print:border-l-0 print:pl-0">
                <div className="absolute -top-1 -left-2.5 hidden size-4 rounded-full border-zinc-800 bg-zinc-600 sm:block sm:border-2 print:hidden" />
                <div className="mb-4 print:mb-2">
                  <h3 className="mb-1 font-bold text-xl text-zinc-100 print:mb-0 print:text-base">
                    {EDUCATION.degree}
                  </h3>
                  <p className="mb-1 text-lg text-zinc-200 print:mb-0 print:text-sm">
                    {EDUCATION.university}
                  </p>
                  <p className="font-medium text-sm text-zinc-400 uppercase tracking-wider print:text-xs">
                    {EDUCATION.period} — {EDUCATION.location}
                  </p>
                </div>
                <ul className="space-y-3 text-zinc-300 leading-relaxed print:space-y-1 print:text-sm">
                  {EDUCATION.achievements.map((achievement) => (
                    <li className="flex" key={achievement}>
                      <span className="mt-1.5 mr-3 text-xs text-zinc-500 print:mt-1">
                        ▸
                      </span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column - Skills, Projects & Languages */}
          <div className="space-y-8 lg:space-y-12 print:space-y-6">
            {/* Skills */}
            <section className="pb-4">
              <h2 className="mb-8 border-zinc-700 border-b pb-2 font-bold text-2xl text-zinc-100 print:mb-4 print:text-lg">
                Skills
              </h2>
              <div className="space-y-6 print:space-y-4">
                {Object.entries(SKILLS).map(([category, items]) => (
                  <div className="space-y-2.5" key={category}>
                    <h3 className="font-semibold text-sm text-zinc-100 uppercase tracking-wider print:text-xs">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {items.map((item) => {
                        const Icon = iconMap[item];
                        return (
                          <Badge
                            className="gap-1.5 font-normal print:border-zinc-300"
                            key={item}
                            variant="secondary"
                          >
                            {Icon}
                            <span>{item}</span>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="mb-8 border-zinc-700 border-b pb-2 font-bold text-2xl text-zinc-100 print:mb-4 print:text-lg">
                Personal Projects
              </h2>
              <div className="space-y-8 print:space-y-6">
                {PROJECTS.map((project, index) => (
                  <div
                    className={cn(
                      "space-y-2 print:space-y-1",
                      index >= MAX_PROJECTS_PRINT && "print:hidden"
                    )}
                    key={project.name}
                  >
                    <div className="flex items-center gap-2">
                      {!!project.icon && (
                        <img
                          alt={project.name}
                          className="size-5 rounded print:size-4"
                          height={20}
                          src={project.icon}
                          width={20}
                        />
                      )}
                      <h3 className="font-bold text-lg text-zinc-100 print:text-base">
                        <a
                          className="underline decoration-zinc-500 transition-colors hover:text-white hover:decoration-zinc-300 print:no-underline"
                          href={project.url}
                          onClick={() => {
                            posthog?.capture("cv_project_clicked", {
                              project: project.name,
                              url: project.url,
                            });
                          }}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {project.name}
                        </a>
                      </h3>
                    </div>
                    <p className="text-zinc-300 leading-relaxed print:text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {project.tags.map((tag) => {
                        const Icon = iconMap[tag];
                        return (
                          <Badge
                            className="gap-1.5 font-normal print:border-zinc-300"
                            key={tag}
                            variant="secondary"
                          >
                            {Icon}
                            <span>{tag}</span>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="mb-8 border-zinc-700 border-b pb-2 font-bold text-2xl text-zinc-100 print:mb-4 print:text-lg">
                Languages
              </h2>
              <p className="text-zinc-300 print:text-sm">
                {LANGUAGES.join(", ")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
