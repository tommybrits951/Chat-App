import { useState } from "react";
import axios from 'axios';
const initForm = {
    newMessage: ''
}

function Chat(props) {
    const [formData, setFormData] = useState(initForm)
    const { sender, recipient, messages } = props;

    function submit(e) {
        e.preventDefault()
        const mess = {
            sender: sender,
            recipient: recipient,
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


    return(
        <div className="compose">
            <div className="message-list-div">
                <ul className="message-list">

                {messages ? messages.map((mess, idx) => {
                    return(
                        <li key={idx} className={`${mess.sender_name === sender ? "sent": "received"}`}>
                            <h4>{mess.message}</h4>
                            <p><i>{mess.time}</i></p>
                        </li>
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