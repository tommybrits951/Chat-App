const express = require("express")
const cors = require('cors')
const server = express()
const userRouter = require("./users/user-router");
const messageRouter = require("./messages/message-router");
server.use(cors())
server.use(express.json())
server.use("/users", userRouter)
server.use("/message", messageRouter)
server.listen(5000, () => {
    console.log("server running on port 5000")
})