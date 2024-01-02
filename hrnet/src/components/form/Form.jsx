import { useState, useEffect } from "react"
import useStore from "../../store/store"
import Modal from "../Modal"
import Input from "./Input"
import DropdownMenu from "./DropdownMenu"
import Datepicker from './Datepicker'

// content ⬇︎
import { US_states } from "../../assets/content/stateList"
import { departments } from "../../assets/content/departmentList"
 
export default function Form() {
    // select the action add from the state
    const addEmployee = useStore(state => state.addEmployee)
    // get the current state
    const stateEmployee = useStore(state => state.employees)

    //local state for new employee
    const [employeeData, setEmployeeData] = useState({
        firstName: '', lastName: '', birthDate: '', startDate: '',
        street: '', city: '', state: '', zipCode: '',
        department: ''
    })
    // is small screen?
    const [smallScreen, setSmallScreen] = useState(false)

    // Use useEffect to handle the resize event
    useEffect(() => {
        const handleResize = () => {
            const newScreenWidth = window.innerWidth
            
            if (newScreenWidth <+ 640){
                setSmallScreen(true)
            } else {
                setSmallScreen(false)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // modal state
    const [callModal, setCallModal] = useState(false)

    // close modal
    const handleClose = () => {
        setCallModal(false)
    }

    //handle Submit and store the state
    const submitForm = (e) => {
        e.preventDefault()
        /*validation method should be here*/
        setCallModal(true)
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        addEmployee(payload)
    }
    // log stuff here
    useEffect(() => {
        console.log(stateEmployee)
        console.log('small screen :', smallScreen)
    }, [stateEmployee, smallScreen])

    return (
        <>
            <form id='formEmployee' onSubmit={submitForm}>
                <div className='rowWrapper'>
                    <div id='profile_row'>Profile
                        <Input  id='firstName'label='First Name' type='text' 
                                placeholder='Type your first name'
                                handleValue= {(value) => setEmployeeData({...employeeData, firstName: value})}/>

                        <Input  id='lastName' label='Last Name' type='text' 
                                placeholder='Type your last name'
                                handleValue= {(value) => setEmployeeData({...employeeData, lastName: value})}/>

                        <Datepicker id='birthDate' label='Birth Date' placeholder='Select a date' smallScreen={smallScreen}
                                    handleDate={(value) => setEmployeeData({...employeeData, birthDate: value})}/>

                        <Datepicker id='startDate' label='Start Date' placeholder='Select a date' smallScreen={smallScreen}
                                    handleDate={(value) => setEmployeeData({...employeeData, startDate: value})}/>

                        <DropdownMenu id='department' label='Department'items={departments}
                                    placeholder='Select a department'
                                    handleValue= {(value) => setEmployeeData({...employeeData, department: value})}/>  
                    </div>
                    <div id='address_row'>Address
                        <Input id='street' label='Street' type='text'
                            placeholder='Type your address'
                            handleValue= {(value) => setEmployeeData({...employeeData, street: value})}
                        />

                        <Input id='city' label='City' type='text' 
                            placeholder='Type your city'
                            handleValue= {(value) => setEmployeeData({...employeeData, city: value})}/>

                        <DropdownMenu id='state' label='State'
                                    placeholder='Select a state'items={US_states}
                                    handleValue= {(value) => setEmployeeData({...employeeData, state: value})}/>

                        <Input id='zipCode' label='Zip Code'type='number' 
                            placeholder='Type your zip code'
                            handleValue= {(value) => setEmployeeData({...employeeData, zipCode: value})}/>
                    </div> 
                </div>
                <button className='submitBtn' type='submit' >Save profile</button>
            </form>
            
            {callModal ? <Modal handleClose={handleClose} text='A new profile has been added to the database!' /> : null}
        </>
    )
}