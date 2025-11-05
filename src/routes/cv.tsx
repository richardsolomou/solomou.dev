import {
  ArrowLeftIcon,
  DownloadIcon,
  EnvelopeIcon,
  GlobeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@ras-sh/ui/button";
import { cn } from "@ras-sh/ui/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { EDUCATION, EXPERIENCE, LANGUAGES, PROJECTS, SKILLS } from "~/lib/data";

export const Route = createFileRoute("/cv")({
  component: CV,
});

const MAX_EXPERIENCE_ITEMS_PRINT = 9;

function CV() {
  return (
    <>
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-10 border-zinc-800 border-b bg-zinc-950/80 backdrop-blur-sm print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-8 sm:py-4">
          <Button asChild size="sm" variant="outline">
            <Link data-umami-event="cv_back_clicked" to="/">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Back</span>
              </span>
            </Link>
          </Button>

          <Button
            data-umami-event="cv_download_clicked"
            onClick={() => window.print()}
            size="sm"
            variant="outline"
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <DownloadIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </span>
          </Button>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-8 py-12 md:py-20 print:max-w-none print:p-4 print:py-0">
        {/* Header */}
        <header className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left print:mb-6 print:gap-4">
          <img
            alt="Richard Solomou"
            className="shrink-0 rounded-full print:h-25 print:w-25"
            height={128}
            src="/images/richard-face.png"
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
                  data-umami-event="cv_email_clicked"
                  href="mailto:richard@solomou.dev"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  richard@solomou.dev
                </a>
                <span className="hidden text-zinc-600 sm:block">•</span>

                <a
                  className="flex items-center gap-2 underline decoration-zinc-500 transition-colors hover:text-white hover:decoration-zinc-300"
                  data-umami-event="cv_website_clicked"
                  href="https://solomou.dev"
                >
                  <GlobeIcon className="h-4 w-4" />
                  solomou.dev
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16 print:grid-cols-3 print:gap-4">
          {/* Main Content - Experience & Education */}
          <div className="space-y-8 lg:col-span-2 lg:space-y-12 print:col-span-2 print:space-y-4">
            {/* Experience */}
            <section className="pb-4">
              <h2 className="mb-8 border-zinc-700 border-b pb-2 font-bold text-2xl text-zinc-100 print:mb-4 print:text-lg">
                Experience
              </h2>
              <div className="space-y-10 print:space-y-3">
                {EXPERIENCE.map((exp, index) => (
                  <div
                    className={cn(
                      "relative border-zinc-600 sm:border-l-3 sm:pl-8 print:border-l-0 print:pl-0",
                      index >= MAX_EXPERIENCE_ITEMS_PRINT && "print:hidden"
                    )}
                    key={exp.id}
                  >
                    <div className="-left-2.5 -top-1 absolute hidden h-4 w-4 rounded-full border-2 border-zinc-800 bg-zinc-600 sm:block print:hidden" />
                    <div className="mb-4 print:mb-2">
                      <h3 className="mb-1 font-bold text-xl text-zinc-100 print:mb-0 print:text-base">
                        {exp.title}
                      </h3>
                      <p className="mb-1 text-lg text-zinc-200 print:mb-0 print:text-sm">
                        <a
                          className="inline-flex items-center gap-1 underline decoration-zinc-500 transition-colors hover:text-white hover:decoration-zinc-300 print:no-underline"
                          data-umami-event="cv_company_clicked"
                          data-umami-event-company={exp.company}
                          data-umami-event-url={exp.companyUrl}
                          href={exp.companyUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {exp.companyIcon && (
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
                          {exp.company}
                        </a>
                      </p>
                      <p className="font-medium text-sm text-zinc-400 uppercase tracking-wider print:text-xs">
                        {exp.period} — {exp.location}
                      </p>
                    </div>
                    <ul className="space-y-3 text-zinc-300 leading-relaxed print:space-y-1 print:text-sm">
                      {exp.description.map((item) => (
                        <li className="flex" key={item}>
                          <span className="mt-2 mr-3 text-xs text-zinc-500 print:mt-1">
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
                <div className="-left-2.5 -top-1 absolute hidden h-4 w-4 rounded-full border-zinc-800 bg-zinc-600 sm:block sm:border-2 print:hidden" />
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
                      <span className="mt-2 mr-3 text-xs text-zinc-500 print:mt-1">
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
                  <div className="space-y-3" key={category}>
                    <h3 className="font-semibold text-sm text-zinc-100 uppercase tracking-wider print:text-xs">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {items.map((item) => (
                        <span
                          className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300 print:border print:border-zinc-300 print:bg-transparent print:px-1.5 print:py-0.5 print:text-2xs"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
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
              <div className="space-y-6 print:space-y-4">
                {PROJECTS.map((project) => (
                  <div className="space-y-2 print:space-y-1" key={project.name}>
                    <div className="flex items-center gap-2">
                      {project.icon && (
                        <img
                          alt={project.name}
                          className="h-5 w-5 rounded print:h-4 print:w-4"
                          height={20}
                          src={project.icon}
                          width={20}
                        />
                      )}
                      <h3 className="font-bold text-lg text-zinc-100 print:text-base">
                        <a
                          className="underline decoration-zinc-500 transition-colors hover:text-white hover:decoration-zinc-300 print:no-underline"
                          data-umami-event="cv_project_clicked"
                          data-umami-event-project={project.name}
                          data-umami-event-url={project.url}
                          href={project.url}
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
                      {project.tags.map((tag) => (
                        <span
                          className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300 print:border print:border-zinc-300 print:bg-transparent print:px-1.5 print:py-0.5 print:text-2xs"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
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
