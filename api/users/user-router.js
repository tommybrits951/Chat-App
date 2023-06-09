const router = require('express').Router();
const Users = require('./user-model');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


function buildToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role_id: 3
    }
    const options = {
        expiresIn: "1d"
    }
    return jwt.sign(payload, "shhh", options)
}


router.post("/register", async (req, res, next) => {
    try {
        let user = req.body
        const hash = bcrypt.hashSync(user.password, 8)
        user.password = hash
        const newUser = await Users.insertUser(user)
        if (newUser) {
            res.status(201).json(newUser)
        } else {
            res.status(401).json({message: "your creds are messed up"})
        }
    } catch (err) {
        next(err)
    }
})



router.post("/login", async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await Users.getByEmail(email)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.getAll()
        if (users) {
            res.status(200).json(users)
        } else {
            res.status(404).json({message: "not found"})
        }
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({message: "you messed up dont blame me"})
})
module.exports = router