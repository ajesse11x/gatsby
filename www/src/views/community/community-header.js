import React, { Component } from "react"
import { Link } from "gatsby"
import typography, { rhythm, scale } from "../../utils/typography"
// import SearchIcon from "../../components/search-icon"
import presets, { colors } from "../../utils/presets"
import Checkmark from "./check.svg"
import Arrow from "./arrow.svg"

// const { curveDefault, speedDefault } = presets.animation

const CommunityHeaderLink = ({ linkTo, children }) => (
  <li
    css={{
      display: `flex`,
      alignItems: `center`,
      margin: 0,
    }}
  >
    <Link
      to={linkTo}
      state={{ filter: `` }}
      activeStyle={{
        backgroundColor: colors.gatsby,
        color: `white`,
      }}
      css={{
        ...styles.communityHeaderLink,
      }}
    >
      {children}
    </Link>
  </li>
)

class CommunityHeader extends Component {
  /*   state = {
    search: ``,
  } */
  render() {
    const { forHire, hiring, submissionText } = this.props
    return (
      <header
        role="header"
        css={{
          ...styles.header,
        }}
      >
        <Link
          to="/community/"
          state={{ filter: `` }}
          css={{
            ...styles.creatorsLink,
          }}
        >
          Creators
        </Link>
        <nav
          role="navigation"
          css={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            [presets.Phablet]: {
              justifyContent: `flex-start`,
            },
          }}
        >
          <CommunityHeaderLink linkTo="/community/">All</CommunityHeaderLink>
          <CommunityHeaderLink linkTo="/community/people/">
            People
          </CommunityHeaderLink>
          <CommunityHeaderLink linkTo="/community/agencies/">
            Agencies
          </CommunityHeaderLink>
          <CommunityHeaderLink linkTo="/community/companies/">
            Companies
          </CommunityHeaderLink>
        </nav>
        <div
          className="community--filters"
          css={{
            display: `flex`,
            flex: `2`,
          }}
        >
          <label
            className="label"
            css={[styles.filter, forHire && styles.activeFilter]}
          >
            <input
              type="checkbox"
              name="forHire"
              css={{
                ...styles.input,
              }}
              checked={forHire}
              onChange={() => this.props.applyFilter(`for_hire`)}
              disabled={hiring}
            />
            For Hire
          </label>
          <label
            className="label"
            css={[styles.filter, hiring && styles.activeFilter]}
          >
            <input
              type="checkbox"
              name="hiring"
              css={{
                ...styles.input,
              }}
              checked={hiring}
              onChange={() => this.props.applyFilter(`hiring`)}
              disabled={forHire}
            />
            Hiring
          </label>
          <div
            css={{
              marginLeft: `auto`,
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Link
              to="/docs/submit-to-creator-showcase/"
              css={{
                ...styles.submissionButton,
              }}
            >
              <span
                css={{
                  marginRight: `${rhythm(2 / 4)}`,
                }}
              >
                {submissionText}
              </span>
              <img src={Arrow} alt="arrow" css={{ marginBottom: 0 }} />
            </Link>
            {/* // Search function is not implemented yet, do we want/need it here? */}
            {/*  <label css={{ position: `relative` }}>
=======
                marginRight: `${rhythm(2 / 4)}`,
              }}
            >
              {submissionText}
            </span>
            <img src={Arrow} alt="" css={{ marginBottom: 0 }} />
          </Link>
          {/* // Search function is not implemented yet, do we want/need it here? */}
            {/*  <label css={{ position: `relative` }}>
>>>>>>> master
            <input
              css={{ ...styles.searchInput }}
              type="search"
              value={this.state.search}
              onChange={e =>
                this.setState({
                  search: e.target.value,
                })
              }
              placeholder="Search"
              aria-label="Search"
            />
            <SearchIcon
              overrideCSS={{
                fill: colors.lilac,
                position: `absolute`,
                left: `5px`,
                top: `50%`,
                width: `16px`,
                height: `16px`,
                pointerEvents: `none`,
                transform: `translateY(-50%)`,
              }}
            />
          </label> */}
          </div>
        </div>
      </header>
    )
  }
}

export default CommunityHeader

const styles = {
  header: {
    ...scale(-3 / 4),
    display: `flex`,
    flexDirection: `column`,
    borderBottom: `1px solid ${colors.ui.light}`,
    backgroundColor: `rgba(255,255,255,0.975)`,
    zIndex: `2`,
    padding: `${rhythm(2 / 4)} ${rhythm(1 / 4)} 0 ${rhythm(1 / 4)}`,
    fontFamily: typography.options.headerFontFamily.join(`,`),
    [presets.Mobile]: {
      ...scale(-2 / 4),
    },
    [presets.Tablet]: {
      ...scale(),
      padding: `0 ${rhythm(3 / 4)}`,
      height: presets.headerHeight,
      flexDirection: `row`,
      alignItems: `center`,
    },
  },
  creatorsLink: {
    "&&": {
      display: `none`,
      ...scale(1 / 3),
      color: colors.gatsby,
      boxShadow: `none`,
      borderBottom: `none`,
      marginRight: rhythm(1 / 2),
      "&:hover": {
        backgroundColor: `initial`,
      },
      [presets.Desktop]: {
        display: `inline`,
      },
    },
  },
  communityHeaderLink: {
    "&&": {
      ...scale(-3 / 4),
      textTransform: `uppercase`,
      fontWeight: `600`,
      boxShadow: `none`,
      borderBottom: `none`,
      padding: `${rhythm(1 / 4)} 1rem`,
      borderRadius: `40px`,
      "&:hover": {
        backgroundColor: colors.gatsby,
        color: `white`,
      },
      [presets.Mobile]: {
        ...scale(-2 / 4),
      },
      [presets.Tablet]: {
        ...scale(-1 / 4),
      },
    },
  },
  filter: {
    border: `1px solid ${colors.ui.bright}`,
    borderRadius: `40px`,
    margin: `${rhythm(3 / 4)} ${rhythm(1 / 6)}`,
    paddingLeft: rhythm(1 / 4),
    paddingRight: rhythm(1 / 4),
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
    color: colors.gatsby,
    cursor: `pointer`,
  },
  input: {
    appearance: `none`,
    width: `1rem`,
    height: `1rem`,
    border: `1px solid ${colors.ui.bright}`,
    borderRadius: `40px`,
    marginRight: `${rhythm(1 / 4)}`,
    outline: `none`,
    "&:checked": {
      backgroundColor: colors.gatsby,
      backgroundImage: `url(${Checkmark})`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
    },
  },
  activeFilter: {
    backgroundColor: colors.ui.bright,
    color: colors.gatsby,
  },
  submissionButton: {
    "&&": {
      background: `transparent`,
      outline: `1px solid ${colors.lilac}`,
      color: colors.lilac,
      padding: `${rhythm(1 / 4)} 1rem`,
      display: `flex`,
      alignItems: `center`,
      borderRadius: `2px`,
      cursor: `pointer`,
      boxShadow: `none`,
      borderBottom: `none`,
      fontWeight: `400`,
      marginRight: `${rhythm(1 / 4)}`,
      "&:hover": {
        background: colors.gatsby,
        color: `white`,
        boxShadow: `none`,
        borderBottom: `none`,
      },
    },
  },
  /*   searchInput: {
    appearance: `none`,
    backgroundColor: `transparent`,
    border: 0,
    borderRadius: presets.radiusLg,
    color: colors.gatsby,
    paddingTop: rhythm(1 / 8),
    paddingRight: rhythm(1 / 4),
    paddingBottom: rhythm(1 / 8),
    paddingLeft: rhythm(1),
    overflow: `hidden`,
    transition: `width ${speedDefault} ${curveDefault}, background-color ${speedDefault} ${curveDefault}`,
    width: `6.8rem`,
    "&::placeholder": {
      color: colors.lilac,
    },
    "&:focus": {
      outline: `none`,
      width: `9rem`,
      background: colors.ui.light,
    },
  }, */
}
