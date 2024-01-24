import { Link } from "react-router-dom"
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded"
export default function Page404() {
  return (
    <section id='sectionPage404'>
      <h1 id='page404Title'>404</h1>
      <h2 id='page4O4Subtitle'>Oops! This page doesn't exist</h2>
      <Link to='/' className='backBtn'>
        <KeyboardBackspaceRoundedIcon id='backArrowIcon'/>
      </Link>
    </section>
  )
}
