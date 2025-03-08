const granthModel = require("../model/granthModel")
const { getGranthItems } = require("../model/granthitemmodel")

const getAllGranth = async (req, res) => {
    try {
        const result = await granthModel.getAllGranth()
        if (result.length > 0)
            res.status(200).json(result)
        else
            res.status(404).json({ message: "No granth found" })
    }
    catch (err) {
        res.status(500).json({ message: "Error in fetching granth" })
    }
}

const getGranthDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await granthModel.getGranthDetails(id);
        if (result.length > 0) {
            res.status(200).json(result)
        }
        else
            res.status(404).json({ message: "No granth found" })
    } catch (err) {
        res.status(500).json({ message: "Error in fetching granth" })
    }
}

const addGranth = async (req, res) => {
    try {
        const data = {
            title: req.body?.title || '',
            description: req.body?.description || '',
            image: '',
        }
        console.log(req.body)

        if (data.title != "" && data.description != "") {
            const result = await granthModel.addGranth({ ...data });
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({ message: "granth not found" });
            console.log("yoyo")
        }
    } catch (error) {
        res.status(500).json({ error: error, message: "something gone wrong" });
    }
}

const updateGranth = async (req, res) => {
    try {
        const data = {
            id: req.params.id,
            title: req.body.title,
            description: req.body?.description || '',
            image: req.body?.image || '',
        }

        if(data.title != "" && data.description != "") {
            const result = await granthModel.updateGranth({...data});
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({ message: "granth not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error, message: "something gone wrong" });
    }
}

const deleteGranth = async (req, res) => {
    try {
        const result = await granthModel.deleteGranth(req.params.id);
        res.status(200).json({message: "granth deleted successfuly"});
    } catch(error) {
        res.status(500).json({ error: error, message: "something gone wrong" });
    }
}

module.exports = { getAllGranth, getGranthDetails, addGranth, updateGranth, deleteGranth };

