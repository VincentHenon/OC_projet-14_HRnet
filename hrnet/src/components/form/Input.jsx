import { useState } from 'react'

export default function Input({ label, type, id, placeholder, handleValue, error }) {
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
            border: error? '1px solid red' : undefined
          }}    
          placeholder={changedValue? changedValue : placeholder}
          onChange={(e) => changeValue(e.target.value)} 
          //required // set to required or not
        />
        {error && <p className='errorMessage'>{error}</p>}
    </div>
  )
}
