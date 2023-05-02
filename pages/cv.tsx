import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"

const workExperience = [
  {
    title: "Senior Frontend Developer",
    company: "Gira",
    location: "Remote",
    startDate: "2022",
    endDate: "2023",
    description:
      "Gira needed a setup assistant that guides users step by step through the setup of one of their products. Using modern web technologies like Svelte and Gitlab CI/CD, we were able to build a highly performant web application that runs within a native app.",
    employment: "freelance",
  },
  {
    title: "Senior Frontend Developer",
    company: "Gira",
    location: "Remote",
    startDate: "2021",
    endDate: "2022",
    description:
      "Gira needed a setup assistant that guides users step by step through the setup of one of their products. Using modern web technologies like Svelte and Gitlab CI/CD, we were able to build a highly performant web application that runs within a native app.",
    report: "/projects/gira-wizard",
    employment: "freelance",
  },
  {
    title: "IT Management",
    company: "Porsche Leipzig GmbH",
    location: "Leipzig, Germany",
    startDate: "2017",
    endDate: "2022",
    description:
      "Supervision of developer teams, formulation of IT strategic orientation and development guidelines.",
    employment: "employed",
  },
  {
    title: "Datebase Marketing",
    company: "Deutsche Telekom",
    location: "Bonn, Germany",
    startDate: "2010",
    endDate: "2017",
    description:
      "Marketing and customer data analysis, development of data-driven marketing campaigns.",
    employment: "employed",
  },
]

const projects = [
  {
    title: "Teini - OSS Onlie Shop",
    date: "2022",
    url: "https://shop.sterch.de",
    description:
      "Open Sourcen Online Shop auf Basis von Nextjs und Typescript.",
    bulletPoints: [
      "Frontend in Next.js, React und Typescript",
      "Styling mit Stitches",
      "Verwendung von React Hooks",
    ],
  },
  {
    title: "Sterch Shop",
    date: "2021",
    url: "https://shop.sterch.de",
    description: "Online shop for Sterch, a local brewery.",
    bulletPoints: ["Next.js", "Tailwind CSS", "Snipcart"],
  },
  {
    title: "Capybara",
    date: "2021",
    url: "https://shop.sterch.de",
    description:
      "Eltern portal bei dem Ausflugsideen für junge Familien ausgetauscht werden können.",
    bulletPoints: [
      "Frontend in Nextjs, React und Javascript",
      "Anbindung an CMS via REST",
      "Authentifizierung via Google Firebase",
    ],
  },
]

export async function getServerSideProps({ query }) {
  return {
    props: {
      isHeadhunter: "headhunter" in query,
    },
  }
}

const CV = ({ isHeadhunter }) => {
  return (
    <div>
      <main className="md:container md:mx-auto py-8 px-8">
        <header className="flex items-center gap-4">
          <Image
            src="/me.png"
            alt="Christian Krey"
            width="80"
            height="80"
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold text-zinc-50">Christian Krey</h1>
            <p className="text-zinc-400 leading-none text-sm">
              Frontend Developer
            </p>
            <a
              href="http://krey.io"
              className="text-zinc-400 leading-none text-sm"
            >
              krey.io
            </a>
          </div>
        </header>
        {isHeadhunter && (
          <aside className="mt-12 border p-4 rounded bg-yellow-100 flex gap-3 text-yellow-600 border-l-4 border-l-yellow-400">
            <div className="w-12 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm">
                Möchtest du Informationen aus meinem CV in eine andere
                Formatvorlage übernehmen, kannst du ganz einfach das{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                  />
                </svg>
                -Icon klicken.
              </p>
            </div>
          </aside>
        )}
        <section className="pt-8">
          <h2 className="text-xl font-bold">About</h2>
          <p>Here goes a descirption of me.</p>
          <p>I&apos;m pretty good at:</p>
          <ul className="list-disc">
            <li>Stuff</li>
            <li>Stuff</li>
            <li>Stuff</li>
            <li>Stuff</li>
          </ul>
        </section>
        <section className="pt-8">
          <h2 className="text-xl font-bold pb-4">Work Experience</h2>
          <ul className="space-y-6">
            {workExperience.map(entry => (
              <li
                key={entry.title + entry.endDate}
                className="flex flex-col md:flex-row md:gap-4"
              >
                <div className="text-zinc-500 divide-y space-y-1 w-28">
                  <p>
                    {entry.startDate} - {entry.endDate}
                  </p>
                </div>
                <div className="flex-1 items-center relative">
                  <h3 className="font-bold">{entry.title}</h3>
                  <p className="text-zinc-300 pb-2">
                    {entry.company}
                    {/* <span className="text-xs text-zinc-600 border p-1 border-zinc-600 rounded">
                      {entry.employment}
                    </span> */}
                  </p>
                  <p className="leading-normal text-zinc-400">
                    {entry.description}
                  </p>
                  {entry.report && (
                    <Link
                      href={entry.report}
                      className="absolute right-2 top-2 text-xs border border-zinc-100 p-1 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-8">
          <h2 className="text-xl font-bold pb-4">Projects</h2>
          <ul className="space-y-6">
            {projects.map(project => (
              <li
                className="flex flex-col md:flex-row md:gap-4"
                key={project.title}
              >
                <div className="text-zinc-500 divide-y space-y-1 w-28">
                  <p>{project.date}</p>
                </div>
                <div className="flex-1 items-center relative">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="leading-normal text-zinc-400">
                    {project.description}
                  </p>
                  <ul className="list-disc text-zinc-400">
                    {project.bulletPoints.map(bulletPoint => (
                      <li key={bulletPoint}>{bulletPoint}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-8">
          <h2 className="text-xl font-bold pb-4">Education</h2>
          <ul className="space-y-6">
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="text-zinc-500 divide-y space-y-1 w-28">
                <p>2013</p>
              </div>
              <div className="flex-1 items-center relative">
                <h3 className="font-bold">Bachelor Of Science</h3>
                <p className="leading-normal text-zinc-400">
                  Hochschule für Telekommunikation Leipzig
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="pt-8">
          <h2 className="text-xl font-bold pb-4">Contact</h2>
          <ul className="space-y-2">
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="text-zinc-500 w-28">Website</div>
              <Link href={"/"}>krey.io</Link>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="text-zinc-500  w-28">Twitter</div>
              <a href="http://twitter.com/_zeekrey">@zeekrey_</a>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="text-zinc-500  w-28">Github</div>
              <a href="https://github.com/zeekrey">zeekrey</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default CV
