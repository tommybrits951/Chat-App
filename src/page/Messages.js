import { useContext } from "react";
import { MainContext } from "./Home";

function Messages() {
    const { contacts } = useContext(MainContext);
    
    return(
        <ul className="contacts-list">
            {!contacts ? null : 
            contacts.map((cont, idx) => {
                return(
                    <li key={idx} className="contact">
                        <button className="contact-btn">{cont.username}</button>
                    </li>
                )
            })
            }
        </ul>
    )
}