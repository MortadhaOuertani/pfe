const offersModels = require('../models/offers.models')
const OffersModule = require('../models/offers.models')
const companyModel = require('../models/users/company.model')

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
      companyModel.find({_id:req.params.id}, (err, data) =>{
        if (err) res.status(404).json({ message: "not found" })
        else{ res.status(200).json(data)}
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

    offersModels.find({company:req.user.id},(err,data)=>{
    if(err) res.status(404).json(err.message)
    if(data) res.status(200).json(data)
    })
}
module.exports = {
    GetCompanyoffers,
    Addoffers,
    FindAlloffers,
    FindSingleoffers,
    Deleteoffers,
    FindDate,
    GetCompanyData
}