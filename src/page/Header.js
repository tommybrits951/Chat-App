import { useContext } from "react";
import { MainContext } from "./Home";
import LogoutButton from "../login/LogoutButton";
function Header() {
    const { person, setPerson } = useContext(MainContext)
    
    function goBack() {
        setPerson(null)
    }
    return(
        <header>
            {person !== null ? <button onClick={goBack} className="back-btn">Back</button> : null}
<LogoutButton />
        </header>
    )
}

export default Header;