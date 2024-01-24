import { Link } from 'react-router-dom'
import ScreenWidth from '../components/ScreenWidth'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import Table from '../components/table/Table'
import Logo from '../components/Logo'

export default function ViewEmployees() {
  return (
    <>
      <ScreenWidth/>
      <div id='headerWrapper'>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <Link to='/' className='backBtn'><KeyboardBackspaceRoundedIcon id='backArrowIcon'/></Link>
          <h1 id='view_title'>Employees list</h1>
        </div>
        <Logo />
      </div>
      <section id='sectionPageView'>
          <Table />
      </section>
    </>
  )
}
