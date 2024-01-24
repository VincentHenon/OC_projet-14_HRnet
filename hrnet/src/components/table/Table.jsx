import { useEffect, useState } from "react"
import useStore from "../../store/store"
import DropdownTable from './DropdownTable'
import FilterTags from "./FilterTags"
import Search from "./Search"
import Results from "../Results"
import TableHead from "./TableHead"
import TableBody from "./TableBody"
import Pagination from "../Pagination"
import SelectNrbItems from "./SelectNrbItems"

export default function Table() {

    // get the state 'employees'
    const storedEmployees = useStore(state => state.employees)      // the employees list from the store
    const storedUserScreen = useStore(state => state.userScreen) 

    // local state
    const [activeColumn, setActiveColumn] = useState('')            // the current sorting column
    const [ascOrDesc, setAscOrDesc] = useState('asc')               // if current sorting is ascending or descending
    const [employees, setEmployees] = useState(storedEmployees)     // employees list 
    const [nbrItem, setNbrItem] = useState(11)                      // 10 items per page by default
    const [currentPage, setCurrentPage] = useState(1)               // page by default page 1
    const [maxPage, setMaxPage] = useState(null)                    // how many pages needed to display the full list 
    const [isSmallScreen, setIsSmallScreen] = useState(storedUserScreen)

    // columns head
    const column= [
        {label:'First Name', selector:'firstName', type:'string'}, 
        {label:'Last Name', selector:'lastName', type:'string'},
        {label:'Start Date', selector:'startDate', type:'date'},
        {label:'Department',selector:'department', type:'string'}, 
        {label:'Date of Birth', selector:'birthDate', type:'date'}, 
        {label:'Street', selector:'street', type:'string'},
        {label:'City',selector:'city', type:'string'}, 
        {label:'State', selector:'state', type:'string'},
        {label:'Zip Code', selector:'zipCode', type:'string'}
    ]
    
    // intialize default lastItem firstitem and employees
    let lastItem = currentPage * nbrItem                            // last item from the current page
    let firstItem = lastItem - nbrItem                              // first item from the current page
    let lastFoundItem = currentPage === maxPage? employees.length : lastItem
    let trimmedEmployees = []                                       // employees is trimmed so the lsit can be displayed on several pages
    trimmedEmployees = employees.slice(firstItem, lastItem) 
    
    // update isSmallScreen 
    useEffect(()=> {
        setIsSmallScreen(storedUserScreen)
    },[storedUserScreen, isSmallScreen])

    // update maxPage
    useEffect(()=> {    
        const newMaxPage = Math.ceil(employees.length / nbrItem)
        setMaxPage(newMaxPage)
    },[employees, nbrItem])

    // search filter
    const handleSearch = (currentValue) => {
        const value = currentValue
        const searchFields = ['firstName', 'lastName', 'department', 'street', 'city', 'zipCode', 'state', 'startDate', 'birthDate']

        if (!value.length) {
            setEmployees(storedEmployees) // initialize the employees list if value === 0
        } else {
            const filteredEmployees = storedEmployees.filter(employee=> {
                return searchFields.some(field => employee[field].toString().toLowerCase().includes(value))
            })
            setEmployees(filteredEmployees)
        }
    }

    // sorting asc || desc
    const handleSort = (selector, type) => {
        // check the type of sorting (ascending or descending)
        const sortDir = selector === activeColumn && ascOrDesc === 'asc' ? 'desc' : 'asc'
        // update state with the actual column 
        setActiveColumn(selector)
        // update state with the type of sorting
        setAscOrDesc(sortDir)
        // find the data type of the column
        switch (type) {
            case 'string': 
                return sortString(selector, sortDir)
            case 'date': 
                return sortDate(selector, sortDir) 
            default:
                break
        }
    }

    // sort string
    const sortString = (selector, sortDir) => {
        const sorted = employees.sort((a,b) => {
            const A = a[selector].toString()
            const B = b[selector].toString()
            return (
               A.localeCompare(B, 'en', {
                    numeric: true,
                }) * (sortDir === 'asc'? 1 : -1)
            )
        })
        setEmployees(sorted)
    }

    //sort date
    const sortDate = (selector, sortDir) => {
        const sorted = employees.sort((a, b) => {
            const A = new Date(a[selector])
            const B = new Date(b[selector])
            return (A - B) * (sortDir === 'asc' ? 1 : -1)
        })
        setEmployees(sorted)
    }

    //pagination prev
    const handlePrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    //pagination next
    const handleNextPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    // handle nbr items per page
    const handleItemsPerPage = (itemsPerPage) => {
        setNbrItem(itemsPerPage)
        setCurrentPage(1) //initialize to page 1 when items per page changed
    }

    return (
        <>
            <div id='formHeader'>
                <SelectNrbItems currentSelection={nbrItem} handleItemsPerPage={handleItemsPerPage} totalItems={storedEmployees.length}/>
                <Search handleSearch={handleSearch} /> 
            </div>
            {trimmedEmployees.length === 0? 
                <div id='oops' >
                    <p>Oops, nothing found...</p>
                </div>
            :
                isSmallScreen?     
                    <> 
                        <FilterTags content={column} handleSort={handleSort} ascOrDesc={ascOrDesc} />
                        <div style={{display: 'flex', flexDirection: 'column', gap:'.5rem'}}>       
                            {trimmedEmployees.map((employee, index) => (
                                <DropdownTable key={employee.firstName +  index} content={employee}/>
                            ))}
                        </div>   
                    </>
                :
                    <table>
                        <TableHead handleSort={handleSort} column={column} ascOrDesc={ascOrDesc} activeColumn={activeColumn}/>
                        <TableBody data={trimmedEmployees} />
                    </table>
                }
            <div id='tableFooterWrapper' >
                <Results foundItems={employees.length} totalItems={storedEmployees.length} firstItem={firstItem} lastItem={lastFoundItem} />
                <Pagination currentPage={currentPage} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} maxPage={maxPage}/>
            </div>
        </>
    )
}