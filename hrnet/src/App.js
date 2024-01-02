import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en'
import Home from './pages/Home'
import Header from './layouts/Header'
import ViewEmployees from './pages/ViewEmployees'
import NewEmployee from './pages/NewEmployee'
//import Page404 from './pages/Page404'

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en'>
        <Header />
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees/list" element={<ViewEmployees />} />
              <Route path="/employees/new" element={<NewEmployee />} />
              {/* <Route path="*" element={<Page404/>} /> */}
            </Routes>
        </main>
      </LocalizationProvider>
    </>
  )
}

export default App
