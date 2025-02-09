const {authQuery} = require("../query/authqueries")
const pool = require("../db")

const getAllUsers = async ()=>{
    const response = await pool.query(authQuery.GetAllUsers)
    return response.rows
}

const getUserByEmail = async (email)=>{
    const response = await pool.query(authQuery.GetUserByEmail, [email])
    return response.rows[0]
}

const createUser = async (name, email, password)=>{
    const response = await pool.query(authQuery.CreateUser, [name, email, password])
    return response.rows[0]
}

const updateUser = async (id, name, password, role)=>{
    const response = await pool.query(authQuery.UpdateUser, [id, name, password, role])
    return response.rows[0]
}

const deleteUser = async (id)=>{
    const response = await pool.query(authQuery.DeleteUser, [id])
    return response.rows[0]
}

const searchUser = async (name)=>{
    const response = await pool.query(authQuery.SearchUser, [name])
    return response.rows
}

const getPermissions = async (role)=>{
    const response = await pool.query(authQuery.GetPermissions, [role])
    return response.rows[0]
}

module.exports = {getAllUsers, getUserByEmail, createUser, updateUser, deleteUser, searchUser, getPermissions}