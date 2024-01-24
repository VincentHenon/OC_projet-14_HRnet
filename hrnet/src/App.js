import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en'
import Home from './pages/Home'
import ViewEmployees from './pages/ViewEmployees'
import NewEmployee from './pages/NewEmployee'
import Page404 from './pages/Page404'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded'

function App() {
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme)

  //handle theme button
  const toggleTheme = (e) => {
    e.preventDefault()
    const newTheme = theme === 'light'? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  // state console
  useEffect(() => {
    document.body.className = theme === 'dark'? 'darkTheme' : null
  }, [theme])
  
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en'>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees/list" element={<ViewEmployees />} />
              <Route path="/employees/new" element={<NewEmployee />} />
              <Route path="*" element={<Page404/>} />
            </Routes>
            <div id='themeToggleWrapper' onClick={toggleTheme}>
                {theme === 'light'? <NightlightRoundRoundedIcon id='darkIcon' /> : <LightModeRoundedIcon id='lightIcon'/>}
            </div>
        </main>
      </LocalizationProvider>
    </>
  )
}

export default App
