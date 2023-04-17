var express = require("express");
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
  ContactUs,
  RegisterMailCompany,
  RegisterMailCandidat,
  EditCandidat,
  EditCompany,
  GetCandidatinfo,

} = require("../controllers/users.controllers");


var router = express.Router();
const passport = require("passport");


const { Addoffers, FindAlloffers, FindSingleoffers, Deleteoffers, FindDate, GetCompanyData, GetCompanyoffers, ApplyForOffers, GetCandidates, acceptCandidate, refuseCandidate, acceptCandidateTechnical, refuseCandidateTechnical, CountWordsInPDF, GetAdmin, AddToAdmin, GetCompanies, GetAllCandidates, AdminSettingsRemove,
  EmailRefuse,
  AcceptRHEmail,
  AcceptTechnEmail,
  EmailRefuseTech, 
  EditOffer} = require("../controllers/offer.controllers");


/* users routes. */
router.get("/candidat/info/:id",GetCandidatinfo);
router.post("/register/candidate", RegisterCandidate);
router.post("/register/company", RegisterCompany);
router.post("/register/admin", RegisterAdmin);
router.post("/registercompany", RegisterMailCompany);
router.post("/registercandidat", RegisterMailCandidat);
router.put("/candidat/edit", passport.authenticate("jwt", { session: false }), EditCandidat);
router.put("/company/edit", passport.authenticate("jwt", { session: false }), EditCompany);

///////////////////////////////////////
router.post("/testPDf", CountWordsInPDF,
);

router.post("/logincandidate", LoginCandidate);
router.post("/logincompany", LoginCompany);
router.post("/loginadmin", LoginAdmin);
router.post("/forgotpassword", ForgotPassword);
router.post('/reset-password', ResetPassword);
router.post('/forgotcompanypassword', ForgotCompanyPassword);

/* add offers route */
router.post("/offers", Addoffers);
router.post("/offersdelete", AdminSettingsRemove);
/* get all offers */
router.get("/offers", FindAlloffers);
/* get one offers */
router.get("/offers/:id",
  FindSingleoffers);
router.delete("/offers/:id",
  Deleteoffers);
router.post("/refuse/:offerId/:candidateId", refuseCandidate)
router.post("/refuseTechnical/:offerId/:candidateId", refuseCandidateTechnical)
router.post("/accept/:offerId/:candidateId", acceptCandidate)
router.post("/acceptTechnical/:offerId/:candidateId", acceptCandidateTechnical)
router.post("/ContactUs", ContactUs)
router.post("/EmailRefuse/:id", EmailRefuse)
router.post("/EmailRefuseTech/:id", EmailRefuseTech)
router.post("/AcceptRHEmail/:id", AcceptRHEmail)
router.post("/AcceptTechnEmail/:id", AcceptTechnEmail)
router.get("/date", passport.authenticate("jwt", { session: false }), FindDate);
router.get("/companydata/:id", GetCompanyData);  /* get the data of a company */
router.get("/getcompanyoffers", passport.authenticate("jwt", { session: false }), GetCompanyoffers);
router.get("/offers/:id", FindSingleoffers);
router.post("/applyforOffer/:id", passport.authenticate("jwt", { session: false }), ApplyForOffers);
router.post("/editoffer/:id", EditOffer);
router.get("/GetOfferApplicants/:id", passport.authenticate("jwt", { session: false }), GetCandidates);
router.get("/getCandidates", GetAllCandidates);
router.get("/getcompanies", GetCompanies); //zedt hedhy
router.post("/posttoadmin", passport.authenticate("jwt", { session: false }), AddToAdmin); // envoyer les offres à postuler à l'admin
router.get("/getAdmin", GetAdmin);
module.exports = router;