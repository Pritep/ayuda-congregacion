import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-100">
      <Outlet />
    </div>
  )
}

export default App
