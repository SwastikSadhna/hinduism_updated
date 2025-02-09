const authModel = require('../model/authmodel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role },
        process.env.AUTH_TOKEN,
        { expiresIn: "1h" }
    );
};

const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await authModel.getUserByEmail(email);
        if(!user){
            return res.status(401).json({message: "Invalid email or Password"});
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(401).json({message: "Invalid email or Password"});
        }
        const permissions = await authModel.getPermissions(user.role);
        const stringPermissions = permissions.map(p=>`${p.action}:${p.resource}`);
        const token = generateToken(user)

        res.status(200).json({token, role: user.role, permissions: stringPermissions});
    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message});
    }
}

const register = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        
        if(name != "" && email != "" && password != ""){
        const user = await authModel.getUserByEmail(email);
        if(user){
            return res.status(400).json({message: "Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await authModel.createUser(name, email, hashedPassword);
        res.status(200).json({message:"Account created successfully"});
        }
        else{
            return res.status(400).json({message: "Please fill all fields"});
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message});
    }
}

module.exports = {login, register}