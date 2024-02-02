// regex codes
const regex= {
    name: /^[a-zA-ZÀ-ÖØ-öø-ÿ'-][a-zA-ZÀ-ÖØ-öø-ÿ'\s-]{1,}$/,
    street: /^\d{1,4}\s[^\d]+$/,
    code: /^\d{4,5}$/,
    date: /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
}

export const fieldValidation = (name, value, setErrors) => {
    setErrors((prevErrors) => {
        switch (name) {
            case 'firstName':
                    return { 
                        ...prevErrors, 
                        firstName: !regex.name.test(value)? "First name required min. 2 characters and can't contains digit." : ''
                    }
            case 'lastName':
                    return {
                        ...prevErrors,
                        lastName: !regex.name.test(value)? "Last name required min. 2 characters and can't contains digit." : ''
                }
            case 'city':
                    return {
                        ...prevErrors,
                        city: !regex.name.test(value)? "City required min. 2 characters and can't contains digit." : ''
                }
            case 'street':
                    return {
                        ...prevErrors,
                        street: !regex.street.test(value)? "street required min. 1 digit and min 2 characters." : ''
                }
            case 'zipCode':
                    return {
                        ...prevErrors,
                        zipCode: !regex.code.test(value)? "zip code required min. 4 digits and max. 5 digits." : ''
                }
            case 'birthDate':
                    return {
                        ...prevErrors,
                        birthDate: !regex.date.test(value)? "Date of birth is required and need to be in this format (mm/dd/yyyy)." : ''
                }
            case 'startDate':
                    return {
                        ...prevErrors,
                        startDate: !regex.date.test(value)? "Start date is required and need to be in this format (mm/dd/yyyy)." : ''
                }
            case 'department':
                    return {
                        ...prevErrors,
                        department: value === ''? "Department is required." : ''
                }
            case 'state':
                    return {
                        ...prevErrors,
                        state: value === ''? "State is required." : ''
                }
            default:
                return
        }
    })
}