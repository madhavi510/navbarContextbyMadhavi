// Write your code here
import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const containerClass = isDarkTheme ? 'DarkTheme' : 'LightTheme'
      const websiteLogoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navLinkItem = isDarkTheme ? 'nav-link-dark' : 'nav-link-light'
      const themeButton = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={containerClass}>
          <img
            src={websiteLogoImage}
            alt="website logo"
            className="logo-image"
          />

          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={navLinkItem}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className={navLinkItem}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="theme-logo-btn"
            onClick={toggleTheme}
            type="button"
            testid="theme"
          >
            <img src={themeButton} alt="theme-img" className="theme-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
