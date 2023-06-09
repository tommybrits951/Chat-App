const express = require('express');
const Messages = require('./message-model');
const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const { sender_id, rec_id } = req.body;
        const messages = await Messages.getMessages(sender_id, rec_id)
            res.status(200).json(messages)
    } catch (err) {
        next(err);
    }
})

router.post("/send", async (req, res, next) => {
    try {
        const message = req.body;
        const response = await Messages.insertMessage(message);
        res.status(201).json(response)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(404).json({message: "not found"})
})

module.exports = router;