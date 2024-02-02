import './styles/App.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
<HashRouter>
  <App />
</HashRouter>)