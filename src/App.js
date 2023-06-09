import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LoginButton from './login/LoginButton';
import Home from './page/Home';


function App() {

  const { isAuthenticated } = useAuth0()



  return (
    <div className='App'>
      {!isAuthenticated ? <LoginButton /> : <Home />}
    </div>
  )
}

export default App;