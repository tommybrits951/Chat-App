import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Header from "./Header";



export const MainContext = createContext()

function Home() {
  const [nav, setNav] = useState("0");
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const { user, isAuthenticated } = useAuth0();

  function getCurrent() {
    setCurrentUser({...contacts[0]})
  }

  function getContacts() {
    axios.get("http://localhost:5000/users")
      .then(res => {
        console.log(res.data)
        setContacts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getContacts()
    getCurrent()
  }, [])



  return (
    isAuthenticated && (
     <MainContext.Provider
      value={{
        contacts,
        nav,
        setNav,
        currentUser
      }}
     >
     <div className="home">  
     <Header />
      </div>
     </MainContext.Provider>
    )
  )
}

export default Home;