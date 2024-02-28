import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import useStore from "../store/store"
import LogoHome from "../components/LogoHome"
import ScreenWidth from "../components/ScreenWidth"

export default function Home() {
  // clear from the store
  const clearEmployees = useStore(state => (state.clearEmployees))
  // get state of the screen from the store
  const storedIsSmallScreen = useStore(state => state.userScreen) 

      // eslint-disable-next-line no-unused-vars
  const [isSmallScreen, setIsSmallScreen] = useState(storedIsSmallScreen)
  
  //update screen state
  useEffect(()=> {
    setIsSmallScreen(storedIsSmallScreen)
  },[storedIsSmallScreen])

  // handle clear list button
  const clearList = () => {
    clearEmployees()
    console.log('list cleared')
  }

  return (
    <>
      <ScreenWidth/>
        <div id='headerHome'>
          <LogoHome />
          <div id='headerTitle'>
            Human Ressources Network
          </div>
        </div>
      <section id='sectionPageHome'>
          <div id='home_buttons_wrapper'>
              <Link to='/employees/new' className='button'>Add Profile</Link>
              <Link to='/employees/list' className='button'>Explore All Profiles</Link>
              <button className="button" onClick={clearList}>Clear List</button>
          </div>
      </section>
    </>
  )
}
