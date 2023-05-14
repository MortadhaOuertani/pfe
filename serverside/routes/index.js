var express = require("express"); //importe la biblio express
                                 //require: pour charge un module(ex: users.controller) et envoie ces exports 
const multer = require("multer")  //importe la biblio multer( un middleware utilisé pour traiter 
                                      //les données envoyées avec un formulaire de type multipart/form-data)
const storage = require('../middleware/multerImages'); //importe une fonction middleware pour 
                                                       //configurer les options de stockage pour les images téléchargées 
const uploadpicture = multer({ storage: storage })
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
  checkType,

} = require("../controllers/users.controllers");   //importe les fonctions qui se trouvent dans users.controller 


var router = express.Router(); 
const passport = require("passport");


const { Addoffers, FindAlloffers, FindSingleoffers, Deleteoffers, FindDate, GetCompanyData, GetCompanyoffers, ApplyForOffers, Getffer, acceptCandidate, refuseCandidate, acceptCandidateTechnical, refuseCandidateTechnical, CountWordsInPDF, GetAdmin, AddToAdmin, GetCompanies, GetAllCandidates, AdminSettingsRemove,
  EmailRefuse,
  AcceptRHEmail,
  AcceptTechnEmail,
  EmailRefuseTech,
  EditOffer,
  GetOffer } = require("../controllers/offer.controllers");


/* users routes. */
router.get("/candidat/info/:id", GetCandidatinfo);  //obtenir les informations d'un candidat à partir de son ID
router.post("/register/candidate", RegisterCandidate); // enregistrer un nouveau candidat
router.post("/register/company", RegisterCompany); // enregistrer une nouveau société

router.post("/registercompany", RegisterMailCompany); //envoyer un e-mail de confirmation d'inscription à une société
router.post("/registercandidat", RegisterMailCandidat); //envoyer un e-mail de confirmation d'inscription à un candidat
router.put("/candidat/edit", passport.authenticate("jwt", { session: false }), EditCandidat); //modifier les informations d'un candidat, et utilise le middleware Passport pour l'authentification
router.put("/company/edit", passport.authenticate("jwt", { session: false }), EditCompany);//modifier les informations d'un société, et utilise le middleware Passport pour l'authentification

///////////////////////////////////////
router.post("/testPDf", CountWordsInPDF,
); //compter le nombre de mots dans un fichier PDF

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

/* delete one offers */
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
router.post("/applyforOffer/:id", passport.authenticate("jwt", { session: false }), ApplyForOffers);
router.post("/editoffer/:id", EditOffer);
router.post("/posttoadmin", passport.authenticate("jwt", { session: false }), AddToAdmin); // envoyer les offres à postuler à l'admin


router.get("/checkType/:id", checkType)
router.get("/date", passport.authenticate("jwt", { session: false }), FindDate); //si lutilisateur est connecté : la fonction finDate est appelée 
router.get("/companydata/:id", GetCompanyData);  /* get the data of a company */
router.get("/getcompanyoffers", passport.authenticate("jwt", { session: false }), GetCompanyoffers); 
router.get("/offers/:id", FindSingleoffers);
router.get("/GetOfferApplicants/:id", passport.authenticate("jwt", { session: false }), GetOffer);
router.get("/getCandidates", GetAllCandidates);
router.get("/getcompanies", GetCompanies); 
router.get("/getAdmin", GetAdmin);
module.exports = router;