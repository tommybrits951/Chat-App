import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Header from "./Header";
import Chat from './Chat';
import Messages from './Messages';



export const MainContext = createContext()

function Home() {
  const [nav, setNav] = useState("0");
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const { user, isAuthenticated } = useAuth0();
  const [person, setPerson] = useState(null);

  function getCurrent(pers) {
    const newEmail = {email: user.email}
    axios.post("http://localhost:5000/users/login", newEmail)
    .then(res => {
      setCurrentUser(res.data)
    })
    .catch(err => {
      console.log(err)
    }) 
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
    getCurrent(user)
    console.log(currentUser)
  }, [])



  return (
    isAuthenticated && (
     <MainContext.Provider
      value={{
        contacts,
        nav,
        setNav,
        currentUser,
        person, 
        setPerson
      }}
     >
     <div className="home">  
     <Header />
     {person === null ? <Messages /> : <Chat sender={currentUser} recipient={person} />}
      </div>
     </MainContext.Provider>
    )
  )
}

export default Home;