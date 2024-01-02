import * as React from 'react'
import { useState } from 'react'

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export default function Datepicker({ id, label, placeholder, handleDate, smallScreen }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState('')


    const handleButton = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    const handlePickDate = (newValue) => {
        const formattedDate = newValue.format('DD/MM/YYYY')
        setSelectedDate(formattedDate) // format the date
        handleDate(formattedDate) // send to parent the value
        setIsOpen(false) //close the calendar
    }

    return (
        <div className='dateWrapper'>
            <label htmlFor={id}>{label}</label>
            {smallScreen? 
            <input 
                className='inputField' 
                name={id}
                type='text' 
                style={{
                color: selectedDate ? 'var(--dark-color)' : undefined,
                }} 
                placeholder={selectedDate? selectedDate : 'MM/DD/YYYY'}
                onChange={(e) => {
                    setSelectedDate(e.target.value)
                    handleDate(e.target.value)
                }} 
                required 
            />
            :
            <div className='buttonCalendarWrapper'>
                <button 
                    className='dateButton'
                    name={id}
                    type='text'
                    style={{
                        color: selectedDate? 'var(--dark-color)' : undefined,
                        borderBottomLeftRadius: isOpen? '0' : '.5rem',
                        borderBottomRightRadius: isOpen? '0' : '.5rem',
                    }} 
                    onClick={handleButton}
                >
                    {selectedDate? selectedDate : placeholder}
                    {isOpen? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </button>
                {isOpen? <DateCalendar className='dateCalendar' onChange={handlePickDate} style={{width: '100%'}} /> : null}
            </div>
            }
        </div>
    )
}
