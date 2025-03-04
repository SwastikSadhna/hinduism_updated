
const limitdata = (req, res, next)=>{
    console.log(req.query)
    console.log(req.body)
    next()
}

module.exports = {limitdata}