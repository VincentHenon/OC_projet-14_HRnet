import SortIcon from '@mui/icons-material/Sort'

export default function TableHead({ handleSort, column, ascOrDesc, activeColumn }) {
    
    return (
        <>
            <colgroup>
                <col className= {`firstNameCol ${activeColumn === 'firstName'? 'selCol' : null}`}></col>
                <col className= {`lastNameCol ${activeColumn === 'lastName'? 'selCol' : null}`}></col>
                <col className= {`startDateCol ${activeColumn === 'startDate'? 'selCol' : null}`}></col>
                <col className= {`departmentCol ${activeColumn === 'department'? 'selCol' : null}`}></col>
                <col className= {`birthDateCol ${activeColumn === 'birthDate'? 'selCol' : null}`}></col>
                <col className= {`streetCol ${activeColumn === 'street'? 'selCol' : null}`}></col>
                <col className= {`cityCol ${activeColumn === 'city'? 'selCol' : null}`}></col>
                <col className= {`stateCol ${activeColumn === 'state'? 'selCol' : null}`}></col>
                <col className= {`zipCodeCol ${activeColumn === 'zipCode'? 'selCol' : null}`}></col>
            </colgroup>
            <thead>
                <tr className='rowHead'> 
                    {column.map(({ label, selector, type })=> 
                        <td 
                            key={selector} 
                            type={type} 
                            className= 'colHead'
                            onClick={() => handleSort(selector, type)}
                        >
                            <div style={{display: 'flex', justifyContent: 'space-between', gap:'1rem',alignItems: 'center'}}>
                                <div id='colText'>{label}</div>
                                {activeColumn === selector? 
                                    ascOrDesc === 'asc'? 
                                        <SortIcon style={{ width:'1.25rem', transform: 'rotate(180deg)'}}/>
                                    : 
                                        <SortIcon style={{ width:'1.25rem'}}/>
                                : 
                                    null} 
                            </div>
                        </td>
                    )}
                </tr>
            </thead>
        </>
    )
}
