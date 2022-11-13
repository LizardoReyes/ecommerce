import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
  return (
    <div>
      <MainHeader />
      <div className="pt-16 max-w-256">
        <Outlet />
      </div>
    </div>
  )
}

export default App
