import { create } from 'zustand'
import { mockEmployees } from '../assets/content/mockEmployeeList'

//create the store with the different actions
const useStore = create((set) => ({
  // initial state is the mocked list
  employees: mockEmployees,

  // action to add an employee
  addEmployee: (newEmployee) => set((state) => ({ employees: [...state.employees, newEmployee]})),

  // action to clear the whole list
  clearEmployees: () => set(() => ({ employees: []})),

// initial state for user screen
  userScreen : null,

  // action to set the user's screen width
  setUserScreen: (newWidth) => set(() => ({ userScreen: newWidth})),

  // initial state for theme
  theme: 'light', // light by default

  // action to set the theme
  setTheme: (choice) => set(() => ({ theme: choice}))
}))

export default useStore