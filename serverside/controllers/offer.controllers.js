const offersModels = require('../models/offers.models')
const OffersModule = require('../models/offers.models')
const companyModel = require('../models/users/company.model')
const usersModels = require('../models/users/users.models')
const uploadFile = require("../middleware/multer");
const fs = require("fs");
const { ObjectID } = require('mongodb');
const { Blob } = require('buffer');
const adminModel = require('../models/users/admin.model');
const pdf = require('pdf-parse');

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

const CountWordsInPDF = async (req, res, array) => {
    const filePath = req.file.destination + '/' + req.file.filename;
    const dataBuffer = fs.readFileSync(filePath);
    let count = 0;
    const data = await pdf(dataBuffer);
    const text = data.text.split(/[^\w]+/); // split by non-alphanumeric characters and space
    const search = array || [];
    const found = new Set();
    for (let i = 0; i < text.length; i++) {
        const word = text[i].toLowerCase(); // remove normalization since we're using includes
        for (let j = 0; j < search.length; j++) {
            if (word.includes(search[j].toLowerCase())) { // use includes instead of exact match
                if (!found.has(search[j].toLowerCase())) {
                    count++;
                    found.add(search[j].toLowerCase());
                }
                break; // stop checking for other search words since this word is already counted
            }
        }
    }
    return count;
};


const ApplyForOffers = async (req, res) => {
    try {
        //call uploadFile middleware(multer)
        await uploadFile(req, res);

        // Check if there is a file uploaded
        offersModels.findOne({ _id: req.params.id }, async (err, data) => {
            if (err) {
                return res.status(404).json({ error: err.message });
            } else {
                const count = await CountWordsInPDF(req, res, data.search);
                if (count >= data.search.length) {
                    const candidate = await usersModels.findOne({ _id: req.user.id });
                    if (data.candidates.some((c) => c._id.equals(candidate._id))) {
                        return res
                            .status(409)
                            .json({ error: "You have already applied for this offer" });
                    } else {
                        // Add the CV file to the candidate
                        const Filename = req.file.filename;

                        candidate.cv = {
                            data: Filename,
                            contentType: req.file.mimetype,
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

                            return res
                                .status(200)
                                .json({ message: "You have successfully applied for this offer" });
                        });
                    }
                } else {
                    res
                        .status(409)
                        .json({
                            message:
                                "You failed to match the offer's standards. Good luck next time!",
                        });
                }
            }
        });
    } catch (err) {
        console.log(req.file);

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


const refuseCandidate = async (req, res) => {
    const { offerId, candidateId } = req.params;
    console.log(offerId, candidateId)
    try {
        const result = await offersModels.updateOne(
            { _id: ObjectID(offerId) },
            { $pull: { candidates: { _id: ObjectID(candidateId) } } }
        ); // Use the updateOne method on the offersModel to remove the candidate with the given ID from the candidates array in the offer with the given ID

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Offer or candidate not found' });
        }

        res.json({ message: 'Candidate removed successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
const refuseCandidateTechnical = async (req, res) => {
    const { offerId, candidateId } = req.params;
    console.log(offerId, candidateId)
    try {
        const result = await offersModels.updateOne(
            { _id: ObjectID(offerId) },
            { $pull: { technicalTest: { _id: ObjectID(candidateId) } } }
        ); // Use the updateOne method on the offersModel to remove the candidate with the given ID from the candidates array in the offer with the given ID

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Offer or candidate not found' });
        }

        res.json({ message: 'Candidate removed successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const acceptCandidate = async (req, res) => {
    const { offerId, candidateId } = req.params;
    try {
        const offer = await offersModels.findOne({ _id: ObjectID(offerId) });
        const candidateIndex = offer.candidates.findIndex(candidate => candidate._id.toString() === candidateId);

        if (candidateIndex === -1) {
            return res.status(404).json({ message: 'Candidate not found in offer' });
        }

        const candidateObject = offer.candidates[candidateIndex];
        offer.technicalTest.push(candidateObject);
        offer.candidates.splice(candidateIndex, 1);

        const result = await offer.save();

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Offer or candidate not found' });
        }

        res.json({ message: 'Candidate accepted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const acceptCandidateTechnical = async (req, res) => {
    const { offerId, candidateId } = req.params;
    try {
        const offer = await offersModels.findOne({ _id: ObjectID(offerId) });
        const candidateIndex = offer.technicalTest.findIndex(candidate => candidate._id.toString() === candidateId);

        if (candidateIndex === -1) {
            return res.status(404).json({ message: 'Candidate not found in technical test' });
        }

        const candidateObject = offer.technicalTest[candidateIndex];
        offer.accepted.push(candidateObject);
        offer.technicalTest.splice(candidateIndex, 1);

        const result = await offer.save();

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Offer or candidate not found' });
        }

        res.json({ message: 'Candidate accepted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    CountWordsInPDF,
    refuseCandidateTechnical,
    acceptCandidateTechnical,
    GetCandidates,
    AddToAdmin,
    GetAdmin,
    GetCompanyoffers,
    Addoffers,
    GetAllCandidates,
    GetCompanies,
    acceptCandidate,
    FindAlloffers,
    FindSingleoffers,
    Deleteoffers,
    FindDate,
    GetCompanyData,
    ApplyForOffers,
    refuseCandidate,
}