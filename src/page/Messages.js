import { useContext } from "react";
import { MainContext } from "./Home";

function Messages() {
    const { contacts, setPerson, currentUser } = useContext(MainContext);
    
    function openMessages(e) {
        const {value} = e.target;
        setPerson(contacts[value])
    }

    return(
        <ul className="contacts-list">
            {!contacts ? null : 
            contacts.map((cont, idx) => {
                if (idx !== 0) {
                    return(
                        <li key={idx} className="contact">
                        <button value={idx} onClick={openMessages} className="contact-btn">{cont.username}</button>
                    </li>
                )
            } else {
                return null
            }
            })
            }
        </ul>
    )
}
export default Messages;