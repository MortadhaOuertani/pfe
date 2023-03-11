const offersModels = require('../models/offers.models')
const OffersModule = require('../models/offers.models')
const companyModel = require('../models/users/company.model')
const usersModels = require('../models/users/users.models')
const uploadFile = require("../middleware/multer");
const fs = require("fs");
const { Blob } = require('buffer');
const adminModel = require('../models/users/admin.model');

const Addoffers = async (req, res) => {
    try {
        OffersModule.create(req.body, (err, data) => {
            if (err) res.status(400).json(err.message)
            else { res.status(200).json({ message: "success" }) }
        }) 
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const AddToAdmin = async (req, res) => {
    try {                         
        adminModel.findOne({ _id: "63f32a615651cfea0ca3eab8" }, (err, data) => {
            console.log(data.company)
            if (err) res.status(400).json(err.message)
            req.body.company = req.user.id  // nejbdou l infos mtaa l comp bel id 
            req.body.name = req.user.name
            data.acceptList.push(req.body)
            data.save(), res.status(200).json({ message: "success" })
        })

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const GetAdmin = async (req, res) => {
    try {
        adminModel.findOne({ _id: "63f32a615651cfea0ca3eab8" }, (err, data) => {
            if (err) res.status(400).json(err.message)
            res.status(200).json(data)
        })
    } catch (error) {
        res.status(400).json(error.message)
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


const ApplyForOffers = async (req, res) => {         //l affchage de cv : kent tabaath cv m cryptia lel bd, tawa nabaathou l filename bark , wel fichier yetsajel aana serveur 
    try {
        //call uploadFile middleware(multer)
        await uploadFile(req, res);     //multer : ki n uploadi fichier yethat f req.file

        // Check if there is a file uploaded
        offersModels.findOne({ _id: req.params.id }, async (err, data) => {     //ylawej aally offre hasb l id eli dakhlneh
            if (err) {
                return res.status(404).json({ error: err.message });
            }

            const candidate = await usersModels.findOne({ _id: req.user.id });    //nlawjou aal candidat elli aamel login
            if (data.candidates.some((c) => c._id.equals(candidate._id))) {
                return res.status(409).json({ error: "You have already applied for this offer" });
            } else {
                // Add the CV file to the candidate
                const Filename = req.file.filename;    //req.file : howa object 

                candidate.cv = {
                    data: Filename,  //nom de fichier
                    contentType: req.file.mimetype,  //type de fichier 
                };

                // Add the letter text to the candidate
                candidate.letter = req.body.letter;

                // Push the candidate to the data candidates array
                data.candidates.push(candidate);

                // Save the data to the database
                data.save((err) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }

                    return res.status(200).json({ message: "You have successfully applied for this offer" });
                });
            }
        });
    } catch (err) {
        console.log(req.file)

        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};


const GetCandidates = (req, res) => {
    try {
        offersModels.findOne({ _id: req.params.id }, (err, offer) => {
            if (err) res.status(404).json(err.message)
            res.status(200).json(offer)
        })
    }
    catch (err) {
        res.status(404).json(err)
    }
}

const GetAllCandidates = (req, res) => {
    try {
        usersModels.find({}, (err, candidate) => {
            if (err) res.status(404).json(err.message)
            res.status(200).json(candidate)
        })
    } catch (err) {
        res.status(404).json(err)
    }
}

const GetCompanies = (req, res) => {
    try {
        companyModel.find({}, (err, company) => {
            if (err) res.status(404).json(err.message)
            res.status(200).json(company)
        })
    }
    catch (err) {
        res.status(404).json(err)
    }
}

const refuseCandidate = (req, res) => {
    offersModels.findOne({ _id: req.params.id }, (err, offer) => {
        if (err) res.status(409).json(err.message)
        offer.candidates.findOneAndRemove({ _id: req.params.id }, (err, candidate) => {
            if (err) res.status(410).json(err.message)
            res.status(200).json({ message: "Candidate Refused" })

        })

    })
}

const acceptCandidate = (req, res) => {
    offersModels.findOne({ _id: req.params.id }, (err, offer) => {
        if (err) res.status(409).json(err.message)
        offer.candidates.findOneAndRemove({ _id: req.params.id }, (err, candidate) => {
            if (err) res.status(410).json(err.message)
            if (!candidate) {
                offer.technicalTest.findOneAndRemove({ _id: req.params.id }, (err, TechnicalCandidate) => {
                    if (err) res.status(411).json(err.message)
                    offer.accepted.push(TechnicalCandidate)
                })
            }
            else { offer.technicalTest.push(candidate) }

        })

    })
}

module.exports = {
    GetCandidates,
    GetCompanyoffers,
    Addoffers,
    acceptCandidate,
    FindAlloffers,
    FindSingleoffers,
    Deleteoffers,
    FindDate,
    GetCompanyData,
    ApplyForOffers,
    GetCompanies,
    GetAllCandidates,
    AddToAdmin,
    GetAdmin,
}