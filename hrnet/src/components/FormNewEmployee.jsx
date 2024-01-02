import { useState } from "react"
import { useForm } from 'react-hook-form'
import useStore from "../store/store"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Form from "./form/Form"
//import Input from "./form/Input"
//import Select from 'react-select'
import Modal from "./Modal"
import { US_states } from '../assets/content/stateList'

export default function FormNewEmployee() {
  const [startDate, setStartDate] = useState(new Date())
  const [birthDate, setBirthDate] = useState(new Date())
  const [callModal, setCallModal] = useState(false)
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  })
  const departmentOptions = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Ressources', label: 'Human Ressources' },
    { value: 'Legal', label: 'Legal' }
  ]
  const modalText = 'Employee Created!'

  // select the action add from the state
  const addEmployee = useStore(state => state.addEmployee)

 

  const handleFirstName = (e) => {
    setEmployeeData({ ...employeeData, firstName: e.target.value })
  }

  const handleLastName = (e) => {
    setEmployeeData({ ...employeeData, lastName: e.target.value })
  }

  const handleBirthDate = (date) => {
    setBirthDate(date)
    const formattedBirthDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
    console.log('birth date : ', formattedBirthDate)
    setEmployeeData({ ...employeeData, birthDate: formattedBirthDate })
  }

  const handleStartDate = (date) => {
    setStartDate(date)
    const formattedStartDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
    console.log("start date : ", formattedStartDate)
    setEmployeeData({ ...employeeData, startDate: formattedStartDate })
  }

  const handleStreet = (e) => {
    setEmployeeData({ ...employeeData, street: e.target.value })
  }

  const handleCity = (e) => {
    setEmployeeData({ ...employeeData, city: e.target.value })
  }

  const handleState = (e) => {
    const selectedState = US_states.find((state) => state.name === e.target.value)
    setEmployeeData({ ...employeeData, state: selectedState ? selectedState.abbreviation : '' })
  }

  const handleZipCode = (e) => {
    setEmployeeData({ ...employeeData, zipCode: e.target.value })
  }

  const handleDepartment = (e) => {
    setEmployeeData({
      ...employeeData,
      department: e.target.defaultValue
    })
  }

  const handleSave = () => {
    // open modal
    setCallModal(true)
    console.log(employeeData)
    // store new employee
    addEmployee(employeeData)

    /*// get stored data
    const storedData = JSON.parse(localStorage.getItem('employeeData')) || []
    console.log('stored data ', storedData)

    // update stored data
    const updatedData = [...storedData, employeeData]
    console.log('updated data ', updatedData)

    // save the updated data back to localStorage
    localStorage.setItem('employeeData', JSON.stringify(updatedData))*/

  }

  const handleClose = () => {
    // close modal
    setCallModal(false)
  }

  return (
    <>
      {/* <form id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" onChange={handleFirstName} value={employeeData.firstName} required />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" onChange={handleLastName} value={employeeData.lastName} required />
        
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker selected={birthDate} onChange={handleBirthDate} />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker selected={startDate} onChange={handleStartDate} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" onChange={handleStreet} value={employeeData.street} required />

          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={handleCity} value={employeeData.city} required />

          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={handleState} value={employeeData.state || US_states[0].name} required>
            { US_states.map((state, index) => (
                <option key={index} value={state.name}>{state.name}</option>
            )) }
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" onChange={handleZipCode} value={employeeData.zipCode} required />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department" onChange={handleDepartment} defaultValue={employeeData.department || departmentOptions[0].value} required>
          {departmentOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </form> */}
      <Form/>

      {/* <button onClick={handleSave}>Save</button> */}

      {callModal ? <Modal handleClose={handleClose} text={modalText} /> : null}
    </>
  )
}
