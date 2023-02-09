var express = require("express");
//const aaa = require("../controllers/testing")
const {
  Login,
  Test,
  Admin,
  RegisterCompany,
  RegisterCandidate,
} = require("../controllers/users.controllers");
var router = express.Router();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const { Addoffers, FindAlloffers, FindSingleoffers, Deleteoffers } = require("../controllers/offer.controllers");

/* users routes. */
router.post("/register/candidate", RegisterCandidate);
router.post("/register/company", RegisterCompany);


//router.get("/aaa",aaa);

router.post("/login",Login);

/* add offers route */
router.post("/offers",passport.authenticate("jwt",{ session: false }),Addoffers);//passport pour donné l'autorisation
/* get all offers */
router.get("/offers", 
passport.authenticate("jwt", { session: false }),
FindAlloffers);
/* get one offers */
router.get("/offers", 
passport.authenticate("jwt", { session: false }),
FindSingleoffers);
/* delete offers */
router.delete("/offers/:id", 
passport.authenticate("jwt", { session: false }),
Deleteoffers);

module.exports = router;
