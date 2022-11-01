// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      // const ImageName = isDarkTheme ? 'website logo' : 'theme'
      const notFoundContainer = isDarkTheme
        ? 'DarkThemeContainer'
        : 'LightThemeContainer'
      const notFoundTitle = isDarkTheme ? 'darkThemeTitle' : 'lightThemeTitle'
      return (
        <div className={notFoundContainer}>
          <Navbar />
          <div className="notFound-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              className="notfound-img"
              alt="not found"
            />
            <h1 className={notFoundTitle}>Lost Your Way</h1>
            <p className={notFoundTitle}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
