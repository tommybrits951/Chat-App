import { useEffect, useState } from "react";
const months = ["months", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function MessageBubble(props) {
    const { message, sender } = props;
    const [stamp, setStamp] = useState()
    
    function setTimeStamp() {
        const month = new Date(message.time).getMonth()
        const year = new Date(message.time).getFullYear()
        const day = new Date(message.time).getDate()
        const hours = new Date(message.time).getHours()
        const minutes = new Date(message.time).getMinutes()
        const seconds = new Date(message.time).getSeconds()
        const result = `${months[month]}  ${day}, ${year}, ${
            hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
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