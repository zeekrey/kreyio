import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Body from "../components/body"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { Phone, Mail, GitHub, Twitter } from "react-feather"

// import { MDXRenderer } from "gatsby-plugin-mdx"

import Resume from "../content/resume.json"

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 450px) {
    padding-left: ${({ theme }) => theme.paddingX};
    padding-right: ${({ theme }) => theme.paddingX};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(5, auto);
  gap: 0px 0px;
`

const H1 = styled.h1``

const H2 = styled.h2``

const TWITTER = Resume.basics.profiles.filter(
  profile => profile.network === "Twitter"
)[0]
const GITHUB = Resume.basics.profiles.filter(
  profile => profile.network === "Github"
)[0]

const AboutPage = ({ data }) => (
  <>
    <SEO />
    {/* <Body> */}
    {/* <Navigation /> */}
    <Wrapper>
      <Grid>
        {/* Picture */}
        <div>picture</div>
        {/* Name */}
        <div>
          <H1>{Resume.basics.name}</H1>
          <div>{Resume.basics.label}</div>
          <div>{Resume.basics.summary}</div>
        </div>
        {/* Contact */}
        <div>
          <H2>contact</H2>
          <div>
            <Phone />
            <a href="tel:+">{Resume.basics.phone}</a>
          </div>
          <div>
            <Mail />
            <a href="mailto:">{Resume.basics.email}</a>
          </div>
        </div>

        {/* Experience */}
        {/**
         * "work": [
    {
      "name": "Pied Piper",
      "location": "Palo Alto, CA",
      "description": "Awesome compression company",
      "position": "CEO/President",
      "url": "http://piedpiper.example.com",
      "startDate": "2013-12-01",
      "endDate": "2014-12-01",
      "summary": "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.",
      "highlights": [
        "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
        "Successfully won Techcrunch Disrupt",
        "Optimized an algorithm that holds the current world record for Weisman Scores"
      ]
    }
  ],
         */}
        <div>
          <H2>experience</H2>
          {Resume.work.map(job => (
            <>
              <div>
                <span>{job.position}</span>
                <span>
                  {job.startDate} - {job.endDate}
                </span>
              </div>
              <a href={job.url}>{job.name}</a>

              <div>{job.summary}</div>
              <ul>
                {job.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </>
          ))}
        </div>

        {/* Social */}
        <div>
          <H2>social</H2>
          {TWITTER && (
            <div>
              <Twitter />
              <a href={TWITTER.url}>{TWITTER.username}</a>
            </div>
          )}
          {GITHUB && (
            <div>
              <GitHub />
              <a href={GITHUB.url}>{GITHUB.username}</a>
            </div>
          )}
        </div>
        {/* Educaion */}
        {/**
         *  "education": [
    {
      "institution": "University of Oklahoma",
      "url": "https://www.ou.edu/",
      "area": "Information Technology",
      "studyType": "Bachelor",
      "startDate": "2011-06-01",
      "endDate": "2014-01-01",
      "score": "4.0",
      "courses": ["DB1101 - Basic SQL", "CS2011 - Java Introduction"]
    }
  ],
         */}
        <div>
          <H2>education</H2>
          {Resume.education.map(degree => (
            <>
              <div>
                <span>
                  {degree.studyType} - {degree.area}
                </span>
                <span>
                  {degree.startDate} - {degree.endDate}
                </span>
              </div>
              <a href={degree.url}>{degree.institution}</a>
            </>
          ))}
        </div>
        {/* - */}
        <div></div>
        {/* Skills */}
        {/**
         *  "skills": [
    {
      "name": "Web Development",
      "level": "Master",
      "keywords": ["HTML", "CSS", "Javascript"]
    },
    {
      "name": "Compression",
      "level": "Master",
      "keywords": ["Mpeg", "MP4", "GIF"]
    }
  ],
         */}
        <div>
          <H2>skill</H2>
          {Resume.skills.map(skill => (
            <>
              <div>{skill.name}</div>
              <div>{skill.level}</div>
              <ul>
                {skill.keywords.map(keyword => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
        {/* - */}
        <div></div>
        {/* Projects */}
        {/**
         *  "projects": [
    {
      "name": "Miss Direction",
      "description": "A mapping engine that misguides you",
      "highlights": [
        "Won award at AIHacks 2016",
        "Built by all women team of newbie programmers",
        "Using modern technologies such as GoogleMaps, Chrome Extension and Javascript"
      ],
      "keywords": ["GoogleMaps", "Chrome Extension", "Javascript"],
      "startDate": "2016-08-24",
      "endDate": "2016-08-24",
      "url": "missdirection.example.com",
      "roles": ["Team lead", "Designer"],
      "entity": "Smoogle",
      "type": "application"
    }
  ],
         */}
        <div>
          <H2>Projects</H2>
          {Resume.projects.map(project => (
            <>
              <div>{project.name}</div>
              <div>{project.description}</div>
              <ul>
                {project.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div>
                {project.startDate} {project.endDate}
              </div>
              <a href={project.url}>{project.url}</a>
            </>
          ))}
        </div>
      </Grid>

      {/* <Text> */}
      {/* <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
      {/* </Text> */}
    </Wrapper>
    {/* </Body> */}
    {/* <Footer /> */}
  </>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    mdx(frontmatter: { title: { eq: "about" } }) {
      body
    }
  }
`
