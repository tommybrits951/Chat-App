const db = require('../data/db-config');
const { getById, getByName } = require("../users/user-model")
async function getSent(id, rec) {
    let sender = await getById(id)
    sender = sender.username;
    let receiver = await getById(rec)
    receiver = receiver.username;
    let sent = await db("messages").where({
        sender: id,
        recipient: rec
    });
    for (let i = 0; i < sent.length; i++) {
        sent[i].sender_name = sender
        sent[i].recipient_name = receiver
    }
    return sent;
}

async function getRec(id, rec) {
    let sender = await getById(rec)
    sender = sender.username;
    let receiver = await getById(id)
    receiver = receiver.username;
    let recs = await db("messages").where({
        sender: rec,
        recipient: id
    });
    for (let i = 0; i < recs.length; i++) {
        recs[i].sender_name = sender
        recs[i].recipient_name = receiver
    }
    return recs;
}
async function getMessages(id, rec) {
    const received = await getRec(id, rec);
    const sent = await getSent(id, rec)
    let arr = received;
    for (let i = 0; i < sent.length; i++) {
        arr.push(sent[i]);
    }
    arr = arr.sort((a, b) => {
        return a.time - b.time
    })   
    return arr 
}
async function insertMessage(mess) {
    const { sender, recipient } = mess
    const sender_id = await db("users").where("username", sender).select("id").first()
    const rec_id = await db("users").where("username", recipient).select("id").first()
    let message = {
        message: mess.message,
        sender: sender_id,
        recipient: rec_id
    }
    const [id] = await db("messages").insert(message);
    const response = await db("messages").where("message_id", id).first()
    return response;
}
module.exports = {
    getMessages,
    insertMessage
}