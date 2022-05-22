import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import "../App.css"
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Header() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (

    <div className='Header'>
      <div className="logo">
        <h1>MOVİE</h1>
      </div>
      <div className="themeMode">
        <span className='dl-icons'><MdDarkMode /></span>
        <div className="switch-container">
          <label className='switch'>
            <input defaultChecked={theme === "dark" ? false  : true} type={'checkbox'} onClick={() => setTheme(theme === "light" ? "dark" : "light")} ></input>
            <span className='slide rounded'></span>
          </label>
        </div>
        <span className='dl-icons'><MdLightMode /></span>
    </div>
    </div >
  )
}

export default Header