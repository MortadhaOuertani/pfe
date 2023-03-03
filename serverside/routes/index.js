var express = require("express");
//const aaa = require("../controllers/testing")
const {
  RegisterCompany,
  RegisterCandidate,
  LoginCandidate,
  LoginCompany,
  RegisterAdmin,
  LoginAdmin,
  ForgotPassword,
  ResetPassword,
  ForgotCompanyPassword,
  ResetCompanyPassword,

} = require("../controllers/users.controllers");


var router = express.Router();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const { Addoffers, FindAlloffers, FindSingleoffers, Deleteoffers, FindDate, GetCompanyData, GetCompanyoffers, ApplyForOffers, GetCandidates, acceptCandidate } = require("../controllers/offer.controllers");

/* users routes. */
router.post("/register/candidate", RegisterCandidate);
router.post("/register/company", RegisterCompany);
router.post("/register/admin", RegisterAdmin);

//router.get("/aaa",aaa);

router.post("/logincandidate",LoginCandidate);
router.post("/logincompany",LoginCompany);
router.post("/loginadmin",LoginAdmin);
router.post("/forgotpassword",ForgotPassword);
router.post('/reset-password',ResetPassword);
router.post('/forgotcompanypassword',ForgotCompanyPassword);
router.post('/reset-company-password',ResetCompanyPassword);





/* add offers route */
router.post("/offers", passport.authenticate("jwt", { session: false }), Addoffers);//passport pour donné l'autorisation
/* get all offers */
router.get("/offers", FindAlloffers);
router.post("/accept/:id",acceptCandidate)
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
router.get("/GetOfferApplicants/:id", passport.authenticate("jwt", { session: false }), GetCandidates);

module.exports = router;