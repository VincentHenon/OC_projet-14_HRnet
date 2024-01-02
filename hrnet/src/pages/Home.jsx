import { NavLink } from "react-router-dom"
import useStore from "../store/store"

export default function Home() {
  // select the action clear from the state
  const clearEmployees = useStore(state => (state.clearEmployees))
  
  const clearList = () => {
    clearEmployees()
    console.log('list cleared')
  }

  return (
    <section id='Home'>
        <h1 id='home_title'></h1>
        <div id='home_buttons_wrapper'>
            <NavLink to='/employees/new' className='button'>Add New Employee</NavLink>
            <NavLink to='/employees/list' className='button'>Explore All Employees</NavLink>
            <button className="button" onClick={clearList}>Clear List</button>
        </div>
    </section>
  )
}
