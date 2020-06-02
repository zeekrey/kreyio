import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 450px) {
    padding-left: ${({ theme }) => theme.paddingX};
    padding-right: ${({ theme }) => theme.paddingX};
  }
`

const aboutMeMarkdown = `
# This is me
Born in Leipzig, Germany, I moved to Cologne to study computer science and economics when I was nineteen. That was a big move for me, but it seemed like the right thing to do. For years I had cultivated a passion for computers and math, and if building my career meant moving away from everything I had ever known, then I could do that. This is not to say, of course, that I made the decision lightly. Not at all! It just seemed to make sense to me on multiple levels.

Since graduating, I have taken jobs at large companies for the most part. These jobs have all presented their own unique challenges, and as stressful as the pressure seemed in the beginning, they prepared me well to help organizations navigate all the most significant and common challenges in their industries.

The most complex systems are the ones that call out to me most loudly. There is something about complexity that is endlessly attractive to me, and any time I can take an outdated, outmoded process and reshape it into something more modern and cutting-edge, I am eager to do so. An innovator at heart, I solve problems through creativity, thinking outside the box and pushing out of the realm of what is likely into the realm of what is possible. If all this sounds a little scary, that's because it is!

I know how to create scaling IT system architectures, and entrepreneurship and web development are both passions of mine. I strive to grow and learn every day, and long-term, I want to apply my IT and entrepreneurship knowledge to make the world a better place. I am available for networking, public talk, presentation, start-up, and nonprofit opportunities that make good use of my skills.
`

const AboutPage = () => (
  <>
    <SEO />
    <Body>
      <Navigation />
      <Wrapper>
        <ReactMarkdown source={aboutMeMarkdown} />
      </Wrapper>
    </Body>
    <Footer />
  </>
)

export default AboutPage
