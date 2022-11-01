// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const LightHome = 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const DarkHome = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImage = isDarkTheme ? DarkHome : LightHome
      // const ImageName = isDarkTheme ? 'theme' : 'home'
      const homeContainer = isDarkTheme
        ? 'darkThemeContainer'
        : 'LightThemeContainer'
      const homeTitle = isDarkTheme ? 'darkThemeTitle' : 'lightThemeTitle'
      return (
        <div className={homeContainer}>
          <Navbar />
          <div className="home-container">
            <img src={homeImage} className="home-img" alt="home" />
            <h1 className={homeTitle}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
