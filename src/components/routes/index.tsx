import { Routes, Route } from "react-router-dom"
import App from "../../App"

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
    </Routes>
  )
}

export default RoutesManager