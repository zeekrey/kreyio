import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

const about = `
## Über mich

Mit 19 habe ich Wirtschaftsinformatik studiert und dabei meine
Passion für die Webentwicklung entdeckt. Mittlerweile arbeite ich
täglich in verschiedenen Projekten mit **Typescript** und **React** sowie
verschiedener CI/CD Infrastruktur.

In bin gut in...

- Frontendentwicklung - Im Spezielle im React-Ökosystem, vor allem
mit **Next.js**.
- **Identifizieren** von konkreten **Kundenanforderungen** und Implementierung dieser.
- Schreiben von qualitativ **hochwertigem Code** - immer automatisiert getestet.
`

const workExperience = [
  {
    title: "Senior Frontend Developer",
    company: "Gira (Giersiepen GmbH & Co. KG)",
    location: "Remote",
    startDate: "2022",
    endDate: "2023",
    description: `Auf Basis bestehender Systeme hatte das Team die Aufgabe, ein neues Produkt zu entwickeln, das die Steuerung von Smart Home Geräten ermöglicht. Hierfür wurde das Frontend Framework **Knockout** verwendet. Zu den eingesetzten Tools gehören **Jasmin**, **Karma**, **Webpack** und die **Gitlab CI/CD**.`,
    employment: "freelance",
  },
  {
    title: "Senior Frontend Developer",
    company: "Gira (Giersiepen GmbH & Co. KG)",
    location: "Remote",
    startDate: "2021",
    endDate: "2022",
    description: `Bei einem Greenfield-Projekt wurde ein Einrichtungswizard, basierend auf modernen Web-Technologien, in eine vorhandene Desktop-Anwendung integriert. Die Geschwindigkeit der Anwendung stand dabei im Fokus, weshalb **Svelte** als Frontend Framework gewählt wurde. Weiterhin wurden **Vite**, **Vitest** sowie **Gitlab CI/CD** als Tools eingesetzt.`,
    report: "/projects/gira-wizard",
    employment: "freelance",
  },
  {
    title: "IT Management",
    company: "Porsche (Porsche Leipzig GmbH)",
    location: "Leipzig, Germany",
    startDate: "2017",
    endDate: "2022",
    description: `Betreuung von Entwicklerteams. Formulierung von IT-strategischer Ausrichtung und Entwicklungsvorgaben. Führung von Entwicklerteams mit dem Schwerpunkt **React** und **Vue**. Definition von Software-Architektur und -Design sowie CI/CD-Vorgaben.`,
    employment: "employed",
  },
  {
    title: "Datebase Marketing",
    company: "Deutsche Telekom (Telekom Deutschland GmbH)",
    location: "Bonn, Germany",
    startDate: "2010",
    endDate: "2017",
    description: `Analysen im Bereich Markting, wie Kundensegmentierung oder CLV-Berechnungen. Bereichtserstellung mit Hilfe von **SQL**.`,
    employment: "employed",
  },
]

const projects = [
  {
    title: "Teini - Open Source Online Shop",
    date: "2022",
    url: "https://shop.sterch.de",
    description: `Open Sourcen Online Shop auf Basis von Nextjs und Typescript. Frontend in **Next.js**, **React** und **Typescript**. Styling mit **Stitches** und **Radix**.`,
  },
  {
    title: "Sterch Shop",
    date: "2021",
    url: "https://shop.sterch.de",
    description: `Storefront für BigCommerce implementiert in React und Typescript. Styling mit **Tailwind** und **Radix**. Individueller Checkout-Prozess mit Anbindung von **Stripe**.`,
  },
  {
    title: "Capybara",
    date: "2021",
    url: "https://shop.sterch.de",
    description: `Elternportal bei dem Ausflugsideen für junge Familien ausgetauscht werden können. Frontend in **Nextjs**, **React** und Javascript. Anbindung an **CMS** (Contentul) via **REST** und Authentifizierung via **Google Firebase**.`,
  },
]

const CV = () => {
  return (
    <div className="print:text-zinc-950">
      <Head>
        <title>Christian Krey | CV</title>
      </Head>
      <main className="px-8 py-8 max-w-3xl md:mx-auto [&_h2]:pb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-zinc-200 [&_p]:text-zinc-400 [&_strong]:text-zinc-300 [&_ul]:list-disc [&_ul]:text-zinc-400">
        <header className="flex flex-col items-center gap-4 sm:flex-row">
          <Image
            src="/zeekrey.webp"
            alt="Christian Krey"
            width="80"
            height="80"
            className="rounded-full"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-zinc-50 print:text-zinc-800">
              Christian Krey
            </h1>
            <p className="text-sm leading-none text-zinc-400">
              Frontend Developer
            </p>
            <a
              href="http://krey.io"
              className="text-sm leading-none text-zinc-400"
            >
              krey.io
            </a>
          </div>
        </header>
        {/* TBD */}
        {/* {isHeadhunter && (
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
        )} */}
        <section className="space-y-3 pt-8">
          <ReactMarkdown>{about}</ReactMarkdown>
        </section>
        <section className="pt-8">
          <h2>Berufliche Erfahrung</h2>
          <ul className="space-y-6">
            {workExperience.map(entry => (
              <li
                key={entry.title + entry.endDate}
                className="flex flex-col md:flex-row md:gap-4"
              >
                <div className="w-28 space-y-1 divide-y text-zinc-500">
                  <p>
                    {entry.startDate} - {entry.endDate}
                  </p>
                </div>
                <div className="relative flex-1 items-center">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-bold">{entry.title}</h3>
                      <p className="pb-2 text-zinc-300 print:text-zinc-700">
                        {entry.company}
                      </p>
                    </div>
                    {entry.report && (
                      <div className="my-2 sm:my-0">
                        <Link
                          href={entry.report}
                          className="flex w-full items-center rounded border border-zinc-400 px-3 py-2 text-xs hover:text-zinc-50 print:hidden"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mr-1 inline h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                          Erfahrungsbericht
                        </Link>
                      </div>
                    )}
                  </div>
                  <ReactMarkdown className=" text-zinc-400">
                    {entry.description}
                  </ReactMarkdown>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-8">
          <h2>Projekte</h2>
          <ul className="space-y-6">
            {projects.map(project => (
              <li
                className="flex flex-col md:flex-row md:gap-4"
                key={project.title}
              >
                <div className="w-28 space-y-1 divide-y text-zinc-500">
                  <p>{project.date}</p>
                </div>
                <div className="relative flex-1 items-center">
                  <h3 className="font-bold">{project.title}</h3>
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-8">
          <h2>Bildung</h2>
          <ul className="space-y-6">
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="w-28 space-y-1 divide-y text-zinc-500">
                <p>2013</p>
              </div>
              <div className="relative flex-1 items-center">
                <h3 className="font-bold">Bachelor Of Science</h3>
                <p className="leading-normal text-zinc-400">
                  Hochschule für Telekommunikation Leipzig
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="w-28 space-y-1 divide-y text-zinc-500">
                <p>2019</p>
              </div>
              <div className="relative flex-1 items-center">
                <h3 className="font-bold">Scrum Master</h3>
                <p className="leading-normal text-zinc-400">TÜV SÜD</p>
              </div>
            </li>
          </ul>
        </section>
        <section className="pt-8 print:hidden">
          <h2>Kontakt</h2>
          <ul className="space-y-2">
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="w-28 text-zinc-500">Website</div>
              <Link href={"/"}>krey.io</Link>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="w-28  text-zinc-500">Twitter</div>
              <a href="http://twitter.com/_zeekrey">@zeekrey_</a>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4">
              <div className="w-28  text-zinc-500">Github</div>
              <a href="https://github.com/zeekrey">zeekrey</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default CV
