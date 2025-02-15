const jwt = require("jsonwebtoken");
const pool = require("../db")
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token)
    if (!token) return res.status(403).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.AUTH_TOKEN);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

const checkPermission = (action, resource) => async (req, res, next) => {
    console.log(`${action} on ${resource} by user id:${req.user.id}`)
    if (!req.user) return res.status(403).json({ message: "Unauthorized" });
        const permission = await pool.query(`SELECT * FROM public."permissions" WHERE "role_id" = $1 AND "action" = $2 AND "resource" = $3`, [req.user.role, action, resource]);
        if(permission.rows)
            next();
        else
            return res.status(404).json({ message: "Forbidden: No permission" });
};

module.exports = {verifyToken, checkPermission};