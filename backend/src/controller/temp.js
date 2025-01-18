const TempDataModel = require("../model/temp");

const Controller1 = async (req, res) => {
    const data = await TempDataModel.Model1();
    try {
        res.status(200).json(data);
    } catch(error) {
        res.status(500).send('something gone wrong');
    }
};

module.exports = { Controller1 };