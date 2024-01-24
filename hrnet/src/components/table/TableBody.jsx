import Employee from "../Employee"

export default function TableBody({ data }) {
    
    return (
        <tbody>
            {data.map((employee, index) => (
                <Employee key={index} employee={employee} />
                ))} 
        </tbody>
    )
}