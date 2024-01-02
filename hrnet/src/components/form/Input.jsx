import { useState } from 'react'

export default function Input({ label, type, id, placeholder, handleValue }) {
  const [changedValue, setChangedValue] = useState('')
  const changeValue = (value) => {
      setChangedValue(value)
      handleValue(value) // to pass to the parent component
  }

  return (
    <div className='inputWrapper'>
        <label htmlFor={id}>{label}</label>
        <input 
          className='inputField' 
          type={type} 
          name={id}
          style={{
            color: changedValue ? 'var(--dark-color)' : undefined,
          }}    
          placeholder={changedValue? changedValue : placeholder}
          onChange={(e) => changeValue(e.target.value)} 
          required 
        />
    </div>
  )
}
