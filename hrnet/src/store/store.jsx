import { create } from 'zustand'
import { mockEmployees } from '../assets/content/mockEmployeeList'

//create the store with the different actions
const useStore = create((set) => ({
  // initial state is the mocked list
  employees: mockEmployees,
  // action to add an employee
  addEmployee: (newEmployee) => set((state) => ({ employees: [...state.employees, newEmployee]})),
  // action to clear the whole list
  clearEmployees: () => set(() => ({ employees: []}))
}))

export default useStore