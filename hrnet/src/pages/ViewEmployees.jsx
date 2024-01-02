import { NavLink } from "react-router-dom"
import useStore from "../store/store"
import Employee from "../components/Employee"

export default function ViewEmployees() {
  // get the state 'employees'
  let storedEmployees = useStore(state => state.employees)

  return (
    <section id='ViewEmployees'>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Start Date</td>
              <td>Department</td>
              <td>Date of Birth</td>
              <td>Street</td>
              <td>City</td>
              <td>State</td>
              <td>Zip Code</td>
            </tr>
          </thead>
          <tbody>
            {storedEmployees.map((employee, index) => (
              <Employee key={index} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>
      <NavLink to='/' className='button'>Back</NavLink>
    </section>
  )
}
