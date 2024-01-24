import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

export default function DropdownTable({ content }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
    <div className= 'dropdownTable'>
        <div  onClick={handleDropdown} className='dropdownRow' style={{ backgroundColor: isOpen? 'var(--primary-light-color' : null }}>
            <div style={{textAlign:'left', fontWeight: isOpen? '500': '400', width:'50%', textTransform: 'capitalize'}}>
                {content.firstName + ' ' + content.lastName}
            </div>
            <div style={{display: 'flex'}}>
                <AddIcon style={{height: '1.25rem', width: '1.25rem', transform: isOpen? 'rotate(225deg)' : 'rotate(0)', transition: 'all .3s ease'}}/>
            </div>
        </div>
        {isOpen?
            <div>
                <div className='rowOdd'>
                    <div className='cellHead' >date of birth</div>
                    <div className='cell' >{content.birthDate}</div>
                </div>
                <div className='rowEven'>
                    <div className='cellHead' >department</div>
                    <div className='cell' >{content.department}</div>
                </div>
                <div className='rowOdd'>
                    <div className='cellHead' >start date</div>
                    <div className='cell' >{content.startDate}</div>
                </div>
                <div className='rowEven'>
                    <div className='cellHead' >street</div>
                    <div className='cell' >{content.street}</div>
                </div>
                <div className='rowOdd'>
                    <div className='cellHead' >city</div>
                    <div className='cell' >{content.city}</div>
                </div>
                <div className='rowEven'>
                    <div className='cellHead' >state</div>
                    <div className='cell' >{content.state}</div>
                </div>
                <div className='rowOdd'>
                    <div className='cellHead' >zip code</div>
                    <div className='cell' >{content.zipCode}</div>
                </div>
            </div>
        :
            null}
    </div>
    )
}
