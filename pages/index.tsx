import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import { NextSeo } from "next-seo"
import PageLayout from "../layouts/PageLayout"

import Box from "../components/Box"

const Index = ({ source }) => {
  return (
    <>
      <NextSeo
        title="Christian Krey"
        description="Something about me and the things I'm building."
        canonical="https://krey.io"
        openGraph={{
          type: "website",
          url: "https://krey.io",
          title: "Christian Krey",
          description: "Something about me and the things I'm building.",
          // images: [
          //   {
          //     url: `https://krey.io${asPath}.png`,
          //     width: 1012,
          //     height: 506,
          //     alt: "Og Image Alt",
          //   },
          // ],
          site_name: "krey.io",
        }}
        twitter={{
          handle: "@zeekrey_",
          site: "@zeekrey_",
          cardType: "summary_large_image",
        }}
      />
      <h1>Hey there, I&apos;m Christian 🐱‍🚀</h1>
      <p>
        I&apos;m a selfthought developer focusing on stuff humans can use and
        interact with. I&apos;m currently into{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React"
        >
          Nextjs
        </a>{" "}
        and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React"
        >
          Vercel
        </a>
        .
      </p>
      <div>
        Twitter: <a href="https://twitter.com/zeekrey_">zeekrey_</a>
      </div>
      <div>
        Github: <a href="https://github.com/zeekrey">zeekrey</a>
      </div>
      <p>Here are some of my projects:</p>

      {/* Just Covid */}

      <Box
        css={{
          paddingBottom: "1rem",
          marginBottom: "1rem",
          borderBottom: "1px solid $olive6",
        }}
      >
        <Box css={{ display: "flex", justifyContent: "space-between" }}>
          <Box as="h2" css={{ margin: 0 }}>
            Just C😷vid
          </Box>
          <Box as="a" href="https://covid.krey.io/" css={{ height: "100%" }}>
            https://covid.krey.io/
          </Box>
        </Box>
        <p>
          A static Covid-19 Dashboard to test dynamically generated
          SEO-Thumbnails.
        </p>
        <ul>
          <li>Statically generates all Germany cites.</li>
          <li>
            Create individual SEO-Thumbnails for every city on a daily basis.
          </li>
          <li>PWA enabled.</li>
        </ul>
      </Box>

      {/* Teni */}

      <Box
        css={{
          paddingBottom: "1rem",
          marginBottom: "1rem",
          borderBottom: "1px solid $olive6",
        }}
      >
        <Box
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box as="h2" css={{ margin: 0 }}>
            Teini
          </Box>
          <Box as="a" href="https://teini.co/" css={{ height: "100%" }}>
            https://teini.co/
          </Box>
        </Box>
        <p>A simple backendless webshop using Stripe as payment gateway.</p>
        <ul>
          <li>
            Backendless. Product data is stored in a file-datebase using
            Prisma.js as ORM.
          </li>
          <li>
            Uses Stripe as payment gateway and printful as fullfillment
            solution.
          </li>
          <li>Based on Next.js and Vercel.</li>
        </ul>
      </Box>

      <details>
        <summary>Want to know more about me?</summary>
        <MDXRemote {...source} />
      </details>
    </>
  )
}

Index.Layout = PageLayout

export default Index

export const getStaticProps = async () => {
  const source = `Born in **Leipzig, Germany**, I moved to Cologne to study computer science and economics when I was nineteen. That was a big move for me, but it seemed like the right thing to do. For years I had cultivated a passion for computers and math, and if building my career meant moving away from everything I had ever known, then I could do that. This is not to say, of course, that I made the decision lightly. Not at all! It just seemed to make sense to me on multiple levels.
  
  Since graduating, I have taken jobs at large companies for the most part. These jobs have all presented their own unique challenges, and as stressful as the pressure seemed in the beginning, they prepared me well to help organizations navigate all the most significant and common challenges in their industries. The most complex systems are the ones that call out to me most loudly. There is something about complexity that is endlessly attractive to me, and any time I can take an outdated, outmoded process and reshape it into something more modern and cutting-edge, I am eager to do so. An innovator at heart, I solve problems through creativity, thinking outside the box and pushing out of the realm of what is likely into the realm of what is possible. If all this sounds a little scary, that's because it is!

I know how to create scaling IT system architectures, and entrepreneurship and web development are both passions of mine. I strive to grow and learn every day, and long-term, I want to apply my IT and entrepreneurship knowledge to make the world a better place. I am available for networking, public talk, presentation, start-up, and nonprofit opportunities that make good use of my skills.`
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}
