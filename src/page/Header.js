import { useContext } from "react";
import { MainContext } from "./Home";
import LogoutButton from "../login/LogoutButton";
function Header() {

    return(
        <header>
<LogoutButton />
        </header>
    )
}

export default Header;