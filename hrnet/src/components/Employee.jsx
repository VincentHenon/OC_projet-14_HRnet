export default function Employee({ employee }) {
  return (
    <>
        <tr>
            <td data-cell='first name'>{employee.firstName}</td>
            <td data-cell='last name'>{employee.lastName}</td>
            <td data-cell='start date'>{employee.startDate}</td>
            <td data-cell='department'>{employee.department}</td>
            <td data-cell='birth date'>{employee.birthDate}</td>
            <td data-cell='street'>{employee.street}</td>
            <td data-cell='city'>{employee.city}</td>
            <td data-cell='state'>{employee.state}</td>
            <td data-cell='zip code'>{employee.zipCode}</td>
        </tr>
    </>
  )
}
