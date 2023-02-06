const OffersModule = require('../models/offers.models')

const Addoffers = async (req, res) => {
    try {
        OffersModule.findOne({ user: req.user.id })
            .then(async (offers) => {
                if (!offers) {
                    req.body.user = req.user.id
                    await OffersModule.create(req.body)
                    res.status(200).json({ message: "success" })
                } else {
                    await OffersModule.findOneAndUpdate(
                        { _id: offers._id },
                        req.body,
                        { new: true }
                    ).then(result => {
                        res.status(200).json(result)
                    })
                }
            })
    
    } catch (error) {
    res.status(404).json(error.message)
}
}

const FindAlloffers = async (req, res) => {
    try {
        const data = await OffersModule.find().populate('user', ["name", "email", "role"])
        res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleoffers = async (req, res) => {
    try {
        const data = await OffersModule.findOne({ user: req.user.id }).populate('user', ["name", "email", "role"])
        res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const Deleteoffers = async (req, res) => {
    try {
        const data = await OffersModule.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "deleted" })

    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = {
    Addoffers,
    FindAlloffers,
    FindSingleoffers,
    Deleteoffers
}