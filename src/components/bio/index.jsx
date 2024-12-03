import React, { forwardRef } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import './index.scss'
import PearlImg from '../../../content/assets/profile.png'

export const Bio = forwardRef((props, ref) => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, introduction } = data.site.siteMetadata

        return (
          <div ref={ref} className="bio">
            <div className="author">
              <div className="author-description">
                <img
                  src={PearlImg}
                  className="author-image author-profile-image"
                />
                <div className="author-name">
                  <span className="author-name-prefix">Written by</span>
                  <Link to={'/about'} className="author-name-content">
                    <span>@{author}</span>
                  </Link>
                  <div className="author-introduction">{introduction}</div>
                  <p className="author-socials">
                    {social.instagram && (
                      <a href={`https://www.instagram.com/${social.instagram}`}>
                        Instagram
                      </a>
                    )}
                    {social.github && (
                      <a href={`https://github.com/${social.github}`}>
                        ✦ Github
                      </a>
                    )}
                    {social.medium && (
                      <a href={`https://medium.com/${social.medium}`}>
                        ✦ Medium
                      </a>
                    )}
                    {social.linkedin && (
                      <a
                        href={`https://www.linkedin.com/in/${social.linkedin}/`}
                      >
                        ✦ LinkedIn
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
})

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
          instagram
        }
      }
    }
  }
`

export default Bio
