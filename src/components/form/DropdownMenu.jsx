import { useState } from "react"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function DropdownMenu({ id, label, placeholder, items, handleValue, error }) {
    const [isOpen, setIsOpen] =  useState(false)
    const [selectedName, setSelectedName] = useState('')

    const handleButton = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    const selectValue = (value, name) => {
        setSelectedName(name)
        setIsOpen(false)
        handleValue(value) // callback to the parent
    }

  return (
    <div className='selectWrapper'>
        <label htmlFor={id}>{label}</label>
        <div className='dropdownWrapper' style={{ border: error? '1px solid red' : undefined }}>
            <button 
                className='dropdownButton'
                name={id}
                style={{
                    borderBottomRightRadius: isOpen ? 0 : undefined,
                    borderBottomLeftRadius: isOpen ? 0 : undefined,
                    color: selectedName ? 'var(--dark-color)' : undefined,
                }} 
                onClick={handleButton}
                required
            >
                {selectedName? selectedName : placeholder}
                {isOpen? 
                    <ArrowDropDownIcon /> 
                : 
                    <ArrowDropUpIcon />}
            </button>
            {isOpen && (
                <div className='selectList'>
                    {items.map((item, index) => (
                    <p key={index} onClick={() => selectValue(item.value, item.name)}>{item.name}</p> 
                    ))}
                </div>
            )}
        </div>
        {error? 
            <p className='errorMessage'>{error}</p> 
        : 
            null}
    </div>
  )
}
