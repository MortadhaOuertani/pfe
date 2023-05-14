const offersModels = require('../models/offers.models')
const OffersModule = require('../models/offers.models')
const companyModel = require('../models/users/company.model')
const usersModels = require('../models/users/users.models')
const uploadFile = require("../middleware/multer");
const nodemailer = require('nodemailer');
const fs = require("fs");
const { ObjectID } = require('mongodb');
const { Blob } = require('buffer');
const adminModel = require('../models/users/admin.model');
const pdf = require('pdf-parse');

const AdminSettingsRemove = async (req, res) => {
    try {
        await adminModel.updateOne(
            {},
            { $pull: { acceptList: { title: req.body.title, company: req.body.company } } }
        );

        res.status(200).json({ message: "success" });
    }
    catch (err) {
        res.status(404).json(err.message);
    }
}
const Addoffers = async (req, res) => {

    try {
        // create the offer using the object in req.body
        const offer = await OffersModule.create(req.body);

        // remove the object from adminModel.acceptList
        await adminModel.updateOne(
            {},
            { $pull: { acceptList: { title: req.body.title, company: req.body.company } } }
        );

        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(404).json(error.message);
    }
};



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
        companyModel.findOne({ _id: req.params.id }, (err, data) => {
            if (err) res.status(404).json({ message: "not found" })
            else { res.status(200).json(data) }
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleoffers = (req, res) => {
    try {
        OffersModule.findOne({ _id: req.params.id }, async (err, data) => {
            if (err) res.status(404).json({ message: "not found" })
            else {
                const company = await companyModel.findOne({ _id: data.company })
                const cpid = company._id
                data.company = cpid
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
const checkForExpiredOffers = () => {
    setInterval(() => {
        offersModels.find({}, (err, offers) => {
            if (err) {
                console.error(err);
                return;
            }

            offers.forEach(offer => {

                const expirationDate = new Date(offer.dateExpiration);
                const currentDate = new Date();

                if (currentDate >= expirationDate) {

                    offersModels.findByIdAndRemove(offer._id, (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }

                        console.log(`Offer with ID ${offer._id} has been removed.`);
                    });
                }
            });
        });
    }, 3600000); // Check for expired offers every 1 hour


}

const CountWordsInPDF = async (req, res, array) => {
    const filePath = req.file.destination + '/' + req.file.filename;
    const dataBuffer = fs.readFileSync(filePath);
    let count = 0;
    const data = await pdf(dataBuffer); //traiter le fonction pdf et récupére les données générées et les stockés dans data 
    const text = data.text.split(/[^\w]+/); // split by non-alphanumeric characters and space
    const search = array || [];
    const found = new Set(); //stocke une collection des valeurs uniques (n'acceptent pas les doublons)
    for (let i = 0; i < text.length; i++) {
        const word = text[i].toLowerCase(); // converte les mots en miniscules
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
        console.log(req.file)
        offersModels.findOne({ _id: req.params.id }, async (err, data) => {
            if (err) {
                return res.status(404).json(err.message);
            } else {
                const count = await CountWordsInPDF(req, res, data.search);
                console.log(count)
                if (count >= Math.floor(data.search.length / 2)) {
                    const candidate = await usersModels.findOne({ _id: req.user.id });
                    if (data.candidates.some((c) => c._id.equals(candidate._id))) {
                        return res
                            .status(309)
                            .json("You have already applied for this offer");
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
                                return res.status(500).json(err.message);
                            }

                            return res
                                .status(200)
                                .json('You have successfully applied for this offer');
                        });
                    }
                } else {
                    res
                        .status(409)
                        .json(
                            "You failed to match the offer's standards. Good luck next time!",
                        );
                }
            }
        });
    } catch (err) {
        console.log(err.message);

        res.status(500).send(
            `Could not upload the file: ${req.file.originalname}. ${err.message}`,
        );
    }
};

const EditOffer = (req, res) => {

    try {
        offersModels.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, offer) => {
            if (err) res.status(404).json(err.message);
            res.status(200).json("Edited successfully");
        });
    } catch (err) {
        res.status(404).json(err);
    }
}

const GetOffer = (req, res) => {

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

        if (candidateIndex === -1) {  //-1 : signifie que le candidat n'est pas trouvé dans la liste des candidats réussites dans le test tech
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

const EmailRefuse = (req, res) => {
    try {
        usersModels.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(404).json({ message: "Candidate not found" })
            }
            else {

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: "projetpfe885@gmail.com",
                        pass: "mkogokrpyiovokvw"
                    }
                });

                const mailOptions = {
                    from: "projetpfe885@gmail.com",
                    to: data.email,
                    subject: 'Notification of HR Test Results',
                    text: `Dear ${data.name},\n\nWe regret to inform you that your performance in the HR test was not sufficient to proceed to the next stage of our recruitment process. We received a high volume of applications and had to make some tough decisions. Please note that this decision does not reflect on your qualifications or potential, and we encourage you to apply for other positions in the future.\n\nThank you for your interest in the role and for taking the time to participate in our recruitment process. We wish you the best of luck in your future endeavors.\n\nBest regards,`
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Error sending email' });
                    }
                    console.log(`Email sent: ${info.response}`);
                    res.status(200).json({ message: 'Email sent successfully' });
                })
            }
        })
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const EmailRefuseTech = async (req, res) => {
    try {
        usersModels.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(404).json({ message: "Candidate not found" })
            } else {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: "projetpfe885@gmail.com",
                        pass: "mkogokrpyiovokvw"
                    }
                });

                const mailOptions = {
                    from: "projetpfe885@gmail.com",
                    to: data.email,
                    subject: 'Notification of Technical Test Results',
                    text: `Dear ${data.name},\n\n I regret to inform you that your performance in the Technical Test was not sufficient to proceed to the next stage of our recruitment process. We received a high volume of applications and had to make some tough decisions. Please note that this decision does not reflect on your qualifications or potential, and we encourage you to apply for other positions in the future.\n\nThank you for your interest in the role and for taking the time to participate in our recruitment process. We wish you the best of luck in your future endeavors.\n\nBest regards,`
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Error sending email' });
                    }
                    console.log(`Email sent: ${info.response}`);
                    res.status(200).json({ message: 'Email sent successfully' });
                })
            }
        })
    } catch {

    }
}

const AcceptRHEmail = (req, res) => {
    try {
        usersModels.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(404).json({ message: "Candidate not found" })
            }
            else {
                // Send password reset email to user
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: "projetpfe885@gmail.com",
                        pass: "mkogokrpyiovokvw"
                    }
                });

                const mailOptions = {
                    from: "projetpfe885@gmail.com",
                    to: data.email,
                    subject: 'Congratulations! You have been selected for the HR test',
                    text: "Congratulations on making it to the next stage of our recruitment process! You have been selected to take part in the HR test. We will be in touch soon with more details, including the date, time and location. Please prepare thoroughly for the test, as it is a crucial part of the selection process. If you perform well, we will consider you for the technical test. Thank you for your interest in the role and for taking the time to participate in our recruitment process. Best regards, "
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Error sending email' });
                    }
                    console.log(`Email sent: ${info.response}`);
                    res.status(200).json({ message: 'Email sent successfully' });
                })
            }
        })
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const AcceptTechnEmail = (req, res) => {
    try {
        usersModels.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(404).json({ message: "Candidate not found" })
            }
            else {
                // Send password reset email to user
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: "projetpfe885@gmail.com",
                        pass: "mkogokrpyiovokvw"
                    }
                });

                const mailOptions = {
                    from: "projetpfe885@gmail.com",
                    to: data.email,
                    subject: 'Congratulations! You have been selected for the Technical Test',
                    text: "Congratulations! You have been selected for the Technical Test. We were impressed with your performance in the HR test and believe you have the potential to excel in the role. We will be in touch shortly with more details about the date, time, and location of the Technical Test. Please prepare thoroughly and give yourself the best chance of success. Best of luck!"
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Error sending email' });
                    }
                    console.log(`Email sent: ${info.response}`);
                    res.status(200).json({ message: 'Email sent successfully' });
                })
            }
        })
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = {
    CountWordsInPDF,
    refuseCandidateTechnical,
    acceptCandidateTechnical,
    GetOffer,
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
    AdminSettingsRemove,
    refuseCandidate,
    checkForExpiredOffers,
    EmailRefuse,
    EmailRefuseTech,
    AcceptRHEmail,
    AcceptTechnEmail,
    EditOffer
}