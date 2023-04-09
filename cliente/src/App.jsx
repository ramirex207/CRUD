import './sass/App.scss'
import { Login } from './componets/Login'
import NavBar from './componets/NavBar'
import { Register } from './componets/Register'

function App() {
  return (
    <>
    <NavBar/>
    <div className="form">
      <Register></Register>
    </div>
    <div className="form">
      <Login></Login>
      
    </div>
    </>
  )
}

export default App
