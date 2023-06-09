import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { MainContext } from "./Home";
import MessageBubble from "./MessageBubble";


const initForm = {
    newMessage: ''
}

function Chat(props) {
    const [formData, setFormData] = useState(initForm)
    const [messages, setMessages] = useState([])
    const { sender, recipient } = props;
    const { setPerson } = useContext(MainContext);

    function getMessages() {
        const mess = {
            rec_id: recipient.id,
            sender_id: sender.id
        }
        axios.post(`http://localhost:5000/message`, mess)
        .then(res => {
            console.log(res.data)
            setMessages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    function submit(e) {
        e.preventDefault()
        const mess = {
            sender: sender.username,
            recipient: recipient.username,
            message: formData
        };
        axios.post("http://localhost:5000/message/send", mess)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    function change(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    useEffect(() => {
        getMessages()
        console.log(sender)
        console.log(recipient)
    }, [])
    return(
        <div className="compose">
            <div className="message-list-div">
                <ul className="message-list">
                {messages.length > 0 ? messages.map((mess, idx) => {
                    return(
                        <MessageBubble message={mess} key={idx} sender={sender} />
                        )
                    }): null}
                    </ul>
            </div>
            <div className="compose-form-div">
                <form onSubmit={submit}>
                    <input className="compose-input" type="text" name="newMessage" value={formData.newMessage} onChange={change} />
                    <button className="send-btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Chat;