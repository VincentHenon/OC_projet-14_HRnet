import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

export default function Search({ handleSearch }) {
  const [currentValue, setCurrentValue] = useState('')

  // clear the input field
  const handleClear = () => {
    setCurrentValue('')
    handleSearch('')
  }

  // handle change from the input
  const handleChange = (e) => {
    setCurrentValue(e.target.value)
    handleSearch(e.target.value.toLowerCase())
  }

  return (
    <>
      <div id='searchRow'>
          <div id='searchWrapper'>
            <SearchIcon id='searchIcon'/>
            <input id='searchInput' 
                   onChange={handleChange} 
                   value={currentValue} 
                   type='text' 
                   placeholder='search...' 
            />
            {currentValue? 
              <div id='searchClearWrapper' onClick={handleClear}>
                <CloseRoundedIcon id='clearIcon'/>
              </div> 
            : null}
          </div>
      </div>
    </>
  )
}
