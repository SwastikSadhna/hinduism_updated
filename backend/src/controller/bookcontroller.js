const bookmodel = require("../model/bookmodel");

const GetAllBooks = async (req, res) => {
    try {
        const data = await bookmodel.GetAllBooks();

        if(data) {
        res.status(200).json(data);
        } else {
            res.status(404).json({message: "data not found"})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

module.exports = {GetAllBooks};