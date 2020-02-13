import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import spooch from "images/oscar-icon.png"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`

const FooterAuthor = styled("p")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const FooterSpooch = styled("img")`
  max-width: 33px;
  margin-top: 0.25em;
`

const Footer = () => (
  <FooterContainer>
    <Link to="/">{/* <Logo /> */}</Link>
    <FooterAuthor>
      © 2019 — Designed & developed by Marguerite Roth
      {/* <FooterSpooch className="FooterSpooch" src={spooch} /> */}
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
