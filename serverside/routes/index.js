var express = require("express");
//const aaa = require("../controllers/testing")
const {
  Login,
  Test,
  Admin,
  RegisterCompany,
  RegisterCandidate,
  LoginCandidate,
  LoginCompany,
} = require("../controllers/users.controllers");

var router = express.Router();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const { Addoffers, FindAlloffers, FindSingleoffers, Deleteoffers, FindDate, GetCompanyData, GetCompanyoffers, ApplyForOffers } = require("../controllers/offer.controllers");

/* users routes. */
router.post("/register/candidate", RegisterCandidate);
router.post("/register/company", RegisterCompany);


//router.get("/aaa",aaa);

router.post("/logincandidate", LoginCandidate);
router.post("/logincompany", LoginCompany);

/* add offers route */
router.post("/offers", passport.authenticate("jwt", { session: false }), Addoffers);//passport pour donné l'autorisation
/* get all offers */
router.get("/offers", FindAlloffers);
/* get one offers */
router.get("/offers/:id",
  FindSingleoffers);
router.delete("/offers/:id",
  Deleteoffers);
router.get("/date", passport.authenticate("jwt", { session: false }), FindDate);
router.get("/companydata/:id", GetCompanyData);  /* get the data of a company */
router.get("/getcompanyoffers", passport.authenticate("jwt", { session: false }), GetCompanyoffers);
router.get("/offers/:id",
  FindSingleoffers);
router.post("/applyforOffer/:id", passport.authenticate("jwt", { session: false }), ApplyForOffers);

module.exports = router;