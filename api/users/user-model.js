const db = require('../data/db-config')



async function getById(id) {
    const user = await db("users").where("id", id).first()
    return user
}
async function insertUser(user) {
    const [id] = await db("users").insert(user)
    const newUser = await getById(id)
    return newUser
}
async function getByEmail(email) {
    const user = await db("users").where("email", email).first()
    return user
}
async function getByName(username) {
    const user = await db('users').where("username", username).first()
    return user
}
async function getAll() {
    const users = await db("users")
    return users
}
module.exports = {
    getById,
    insertUser,
    getByName,
    getAll,
    getByEmail
}