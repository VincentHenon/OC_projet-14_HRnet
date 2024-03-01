import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import Modal from "@kluberrrr/simple-react-modal"
import useStore from "../../store/store"
import Input from "./Input"
import DropdownMenu from "./DropdownMenu"
import Datepicker from './Datepicker'
import { fieldValidation } from '../../utils/fieldValidation'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


// content ⬇︎
import { US_states } from "../../assets/content/stateList"
import { departments } from "../../assets/content/departmentList"
 
export default function Form() {
    // instate useNavigate
    const navigate = useNavigate()

    //STATES
    // global state
    const addEmployee = useStore(state => state.addEmployee)

    //local states
    const [employeeData, setEmployeeData] = useState({
         lastName: '', birthDate: '', startDate: '',
        street: '', city: '', state: '', zipCode: '',
        department: '', firstName: ''
    })
    const [errors, setErrors] = useState({
        firstName: '', lastName: '', birthDate: '', 
        startDate: '', department: '', street: '', 
        city: '', state: '', zipCode: ''
    })
    const [smallScreen, setSmallScreen] = useState(false)
    const [callModal, setCallModal] = useState(false)
    const [isValidForm, setIsValidForm] = useState(false)

    //VARIABLES

    // HANDLERS
    // handle the resize event
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

    // close modal
    const handleClose = () => {
        setCallModal(false)
        // clear the form only is the form was valid
        if (isValidForm) {
            clearForm()
            setIsValidForm(false)
        }
    }

    // navigate to All employees
    const handleBtn2 = () => {
        navigate('/employees/list')
    }

    //clear the state
    const clearForm = () => {
        setEmployeeData({
            firstName: '',
            lastName: '',
            birthDate: '',
            startDate: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: '',
        })
        setErrors({
            firstName: '', lastName: '', birthDate: '', 
            startDate: '', department: '', street: '', 
            city: '', state: '', zipCode: '',
        })
    }

    const handleField= (name, value) => {
        setEmployeeData({ ...employeeData, [name]: value })
        fieldValidation(name, value, setErrors)
    }

    //handle Submit
    const submitForm = (e) => {
        e.preventDefault()
        
        // check if employee data is valid
        Object.keys(employeeData).forEach((key) => {
            const name = key
            const value = employeeData[key]
            fieldValidation(name, value, setErrors)
            /*console.log('key : ', key, ' / value : ', value, ' / error : ', errors[key])*/
        })

        if (Object.values(errors).every((value) => value === null || value === '') &&
            Object.values(employeeData).every((value) => value !== null && value !== '')) {

            setIsValidForm(true)
            setCallModal(true)
            addEmployee(employeeData) // store the data in global state
            clearForm()

        } else  {
            setCallModal(true)
        }
    }

    return (
        <>
            <form id='formEmployee'onSubmit={submitForm}>
                <div className='rowWrapper'>
                    <div id='profile_row'>
                        <div id='title-icon' >
                            <PersonIcon />
                            Profile
                        </div>
                        <Input  
                            id='firstName'
                            label='First Name' 
                            type='text' 
                            placeholder='Type your first name'
                            handleValue= {(value) => handleField('firstName', value)}
                            error= {errors.firstName}
                        />

                        <Input  
                            id='lastName' 
                            label='Last Name' 
                            type='text' 
                            placeholder='Type your last name'
                            handleValue= {(value) => handleField('lastName', value)}
                            error={errors.lastName}
                        />

                        <Datepicker 
                            id='birthDate' 
                            label='Birth Date' 
                            placeholder='Select a date' 
                            smallScreen={smallScreen}
                            handleDate= {(value) => handleField('birthDate', value)}
                            error={errors.birthDate}
                        />

                        <Datepicker 
                            id='startDate' 
                            label='Start Date' 
                            placeholder='Select a date' 
                            smallScreen={smallScreen}
                            handleDate= {(value) => handleField('startDate', value)}
                            error={errors.startDate}
                        />

                        <DropdownMenu 
                            id='department' 
                            label='Department' 
                            items={departments}
                            placeholder='Select a department'
                            handleValue= {(value) => handleField('department', value)}
                            error={errors.department}
                        />  
                    </div>
                    <div id='address_row'>
                        <div id='title-icon'>
                            <HomeIcon />
                            Address
                        </div>
                        <Input 
                            id='street' 
                            label='Street' 
                            type='text'
                            placeholder='Type your address'
                            handleValue= {(value) => handleField('street', value)}
                            error={errors.street}
                        />

                        <Input 
                            id='city' 
                            label='City' 
                            type='text' 
                            placeholder='Type your city'
                            handleValue= {(value) => handleField('city', value)}
                            error={errors.city}
                        />

                        <DropdownMenu 
                            id='state' 
                            label='State'
                            placeholder='Select a state'
                            items={US_states}
                            handleValue= {(value) => handleField('state', value)}
                            error={errors.state}
                        />

                        <Input 
                            id='zipCode' 
                            label='Zip Code'
                            type='number' 
                            placeholder='Type your zip code'
                            handleValue= {(value) => handleField('zipCode', value)}
                            error={errors.zipCode}
                        />
                    </div> 
                </div>
                <button className='submitBtn'><PersonAddIcon/> profile</button>
            </form>
            
            {callModal ? 
                <Modal 
                    isValid={isValidForm} 
                    handleClose={handleClose} 
                    
                    textMainValid={'Profile added!'}
                    textMainError={'Please fix the form.'}

                    displayBtn1={true} 
                    textBtn1='OK' 
                    handleBtn1={handleClose}

                    displayBtn2= {isValidForm? true : false} 
                    textBtn2='View profiles' 
                    handleBtn2={handleBtn2} 
                /> 
            : 
                null}
        </>
    )
}