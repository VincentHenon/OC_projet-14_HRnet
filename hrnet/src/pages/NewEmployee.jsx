import { Link } from "react-router-dom"
import Form from "../components/form/Form"
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
export default function NewEmployee() {
  return (
    <section id='newEmployee'>
        <h1>Create a new profile</h1>
        <Form />
        <Link to='/' className='backBtn'>
              <KeyboardBackspaceRoundedIcon id='backArrowIcon'/>
        </Link>
    </section>
  )
}
