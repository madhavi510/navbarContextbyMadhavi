// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const aboutImgLight =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const aboutImgDark =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const AboutImage = isDarkTheme ? aboutImgDark : aboutImgLight
      // const aboutImageName = isDarkTheme ? 'about' : 'theme'
      const aboutContainer = isDarkTheme
        ? 'DarkThemeContainer'
        : 'LightThemeContainer'

      const aboutTitle = isDarkTheme ? 'darkThemeTitle' : 'lightThemeTitle'
      return (
        <div className={aboutContainer}>
          <Navbar />
          <div className="about-image-container">
            <img src={AboutImage} className="home-img" alt="about" />
            <h1 className={aboutTitle}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
