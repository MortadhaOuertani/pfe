const offersModels = require('../models/offers.models')
const OffersModule = require('../models/offers.models')
const companyModel = require('../models/users/company.model')
const usersModels = require('../models/users/users.models')
const uploadFile = require("../middleware/multer");

const Addoffers = async (req, res) => {
    try {

        req.body.company = req.user.id //creation d'un champ company et l"effectuer l'id de la company qui a crée l'offre(req.user.id from passport)
        OffersModule.create(req.body, (err, data) => {
            if (err) res.status(400).json(err.message)
            else { res.status(200).json({ message: "success" }) }

        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindAlloffers = (req, res) => {
    try {
        OffersModule.find({}, async (err, data) => {
            if (err) res.status(400).json({ message: err.message })
            else {
                company = await companyModel.findOne({ _id: data.company },)//await is used to return a true or false//retourner les donnée de la company qui crée les offres
                console.log(company)
                data.company = company
                res.status(200).json(data)//met les donnnée de company dans le objet data
            }
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const GetCompanyData = (req, res) => { //
    try {
        companyModel.find({ _id: req.params.id }, (err, data) => {
            if (err) res.status(404).json({ message: "not found" })
            else { res.status(200).json(data) }
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleoffers = (req, res) => {
    try {
        OffersModule.findOne({ _id: req.params.id }, (err, data) => {
            if (err) res.status(404).json({ message: "not found" })
            else {
                const company = companyModel.findOne({ _id: data.company })
                data.company = company
                res.status(200).json(data)
            }
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const Deleteoffers = async (req, res) => {
    try {
        OffersModule.findOneAndRemove({ _id: req.params.id }, (err, data) => {
            if (err) res.status(404).json({ message: "not found" })
            else res.status(200).json({ message: "deleted successfully" })
        })
    }
    catch (err) {
        res.status(404).json(err.message)
    }
}

const FindDate = (req, res) => {
    try {
        companyModel.findOne({ _id: req.user.id }, (err, data) => {
            if (err) res.status(404).json(err.message)

            if (data) res.status(200).json({ result: true })
            if (!data) res.status(200).json({ result: false })

        })
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const GetCompanyoffers = (req, res) => {

    offersModels.find({ company: req.user.id }, (err, data) => {
        if (err) res.status(404).json(err.message)
        if (data) res.status(200).json(data)
    })
}
const ApplyForOffers = async (req, res) => {
    try {
        await uploadFile(req, res);

        offersModels.findOne({ _id: req.params.id }, async (err, data) => {
            if (err) {
                return res.status(404).json({ error: err.message });
            }

            const candidate = await usersModels.findOne({ _id: req.user.id });
            if (data.candidates.some((c) => c._id.equals(candidate._id))) {
                return res.status(409).json({ error: "You have already applied for this offer" });
            } else {

                // Check if there is a file uploaded
               
                console.log(req.file)

                    // Add the CV file path to the candidate
                    candidate.cv =req.file.path;
                    // Add the letter text to the candidate
                    candidate.letter = req.body.letter;
                    // Push the candidate to the data candidates array
                    data.candidates.push(candidate);
                    console.log(candidate.cv)
                    // Save the data to the database
                    data.save((err) => {
                        if (err) {
                            return res.status(500).json({ error: err.message });
                        }

                        return res.status(200).json({ message: "You have successfully applied for this offer" });
                    });
                
            }
        });
    }
    catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

const Upload = async (req, res) => {

    try {

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
        });
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

module.exports = {
    Upload,
    GetCompanyoffers,
    Addoffers,
    FindAlloffers,
    FindSingleoffers,
    Deleteoffers,
    FindDate,
    GetCompanyData,
    ApplyForOffers
}