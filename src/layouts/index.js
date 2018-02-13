import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Media from 'react-media'

import { rhythm, scale } from '../utils/typography'
import Logo from '../components/Logo'
import Button from '../components/Button'
import LogoHorizontal from '../components/LogoHorizontal'

const Header = ({ location: { pathname } }) => (
  <Media query={'(min-width: 426px)'}>
    {matches => (
      <header
        style={{
          display: 'flex',
          justifyContent: matches ? 'space-between' : 'center',
        }}
      >
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(2),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {matches ? <LogoHorizontal height={50} /> : <Logo height={100} />}
          </Link>
        </h3>
        {/* {pathname === '/graphql-webapps' && (
      <Link style={{ boxShadow: 'none' }} to="/graphql-webapps#buy">
        <Button
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          Buy
        </Button>
      </Link>
    )} */}
      </header>
    )}
  </Media>
)

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <Container
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {<Header location={location} />}
        {children()}
      </Container>
    )
  }
}

export default Template
