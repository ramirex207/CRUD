import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import UsersList from './componets/UserDetails';
import UserDetails from './componets/Userlist';
import './App.css'

function App() {
  

  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <h2>hola mundo</h2>
          <Route exact path="/users/:id" component={UserDetails} />
        </Switch>
    </Router>
    </>
  )
}

export default App
