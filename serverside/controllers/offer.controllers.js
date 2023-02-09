const OffersModule = require('../models/offers.models')
const companyModel = require('../models/users/company.model')

const Addoffers = async (req, res) => {
    try {
        
        req.body.company = req.user.id //creation d'un champ company et l"effectuer  l'id de la company qui a crée l'offre(req.user.id from passport)
        OffersModule.create(req.body, (err, data) => {
            if (err) res.status(400).json({ message: "bad request" })
         else  {res.status(200).json({ message: "success" })}
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindAlloffers = (req, res) => {
    try {
            OffersModule.find({}, async (err, data) => {
            if (err) res.status(400).json({ message: err.message })
            else{const company = await companyModel.findOne({ _id: data.company })//await is used to return a true or false//retourner les donnée de la company qui crée les offres
            res.status(200).json({...data,company:company})//met les donnnée de company dans le objet data
        }
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleoffers =  (req, res) => {
    try {
        OffersModule.findOne({_id:req.params.id },(err,data)=>{
            if(err)res.status(404).json({message:"not found"})
            else{
                const company = companyModel.findOne({_id:data.company})
                res.status(200).json({...data,company:company})
            }
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const Deleteoffers = async (req, res) => {
        try{
            OffersModule.findOneAndRemove({_id:req.params.id},(err,data)=>{
            if(err)res.status(404).json({message:"not found"})
            else res.status(200).json({message:"deleted successfully"})
            })
        }
        catch(err){
            res.status(404).json(err.message)
        }
}

module.exports = {
    Addoffers,
    FindAlloffers,
    FindSingleoffers,
    Deleteoffers
}