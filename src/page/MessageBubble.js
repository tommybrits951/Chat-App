import { useEffect, useState } from "react";
const months = ["months", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function MessageBubble(props) {
    const { message, sender } = props;
    const [stamp, setStamp] = useState()
    
    function setTimeStamp() {
        const month = new Date(message.time).getMonth()
        const year = new Date(message.time).getFullYear()
        const day = new Date(message.time).getDate()
        const result = `${months[month]}  ${day}, ${year}`
        setStamp(result)
    }
    useEffect(() => {
        setTimeStamp()
    }, [])
    return(
        <li className={`${message.sender_name === sender.username ? "sent" : "received"}`}>
            <p className="message-text">{message.message}</p>
            <p className="message-time">{stamp}</p>
        </li>
    )
}
export default MessageBubble;