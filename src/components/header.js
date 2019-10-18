import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Image/>
      <h1>Top Five<a aria-hidden="true" tabindex="-1" href="https://cat-bounce.com/">s</a></h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
