const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRegister(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirm = !isEmpty(data.confirm) ? data.confirm : "";
    data.diplome = !isEmpty(data.diplome) ? data.diplome : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";
    data.age = !isEmpty(data.age) ? data.age : "";
    data.anneeObtentionDiplome = !isEmpty(data.anneeObtentionDiplome) ? data.anneeObtentionDiplome : "";
    data.diplome = !isEmpty(data.diplome) ? data.diplome : "";




    if (validator.isEmpty(data.name)) {
        errors.name = "Required name";
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "Required format email";
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Required email";
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Required password";
    }
    if (!validator.equals(data.password, data.confirm)) {
        errors.confirm = "Passwords not matches";
    }
    if (validator.isEmpty(data.address)) {
        errors.address = "Required address";
    }
    if (validator.isEmpty(data.phone)) {
        errors.phone = "Required phone";
    }
    if (validator.isEmpty(data.age)) {
        errors.age = "Required age";
    }
    if (validator.isEmpty(data.anneeObtentionDiplome)) {
        errors.anneeObtentionDiplome = "Required anneeObtentionDiplome";
    }
    if (validator.isEmpty(data.diplome)) {
        errors.diplome = "Required diplome";
    }
    if (validator.isEmpty(data.confirm)) {
        errors.confirm = "Required confirm";
    }



    return {
        errors,
        isValid: isEmpty(errors)
    }
};