import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import useStore from "../store/store"
import Form from "../components/form/Form"
import Logo from "../components/Logo"
import ScreenWidth from "../components/ScreenWidth"
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'

export default function NewEmployee() {
  const storedIsSmallScreen = useStore(state => state.userScreen) 
  const [isSmallScreen, setIsSmallScreen] = useState(storedIsSmallScreen)
  
  useEffect(()=> {
    setIsSmallScreen(storedIsSmallScreen)
  },[storedIsSmallScreen])

  return (
    <>
      <ScreenWidth/>
      <div id='headerWrapper'>
        <div id='newEmployeeTitle'>  
          <Link to='/' className='backBtn'>
              <KeyboardBackspaceRoundedIcon id='backArrowIcon'/>
          </Link>
          <h1 id="create_title">Add a new profile</h1>
        </div>
        {!isSmallScreen?
          <Logo />
        :
          null
        }
      </div>
      <section id='sectionPageCreate'>
          <Form />
      </section>
    </>
  )
}
