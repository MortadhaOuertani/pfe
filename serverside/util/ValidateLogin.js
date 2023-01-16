const isEmpty = require("./IsEmpty");
const validator = require("validator");

module.exports = function ValidateLogin(data) {
    let errors = {};


    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.Password = !isEmpty(data.Password) ? data.Password : "";


    if (!validator.isEmail(data.Email)) {
        errors.Email = "Required format Email";
    }
    if (validator.isEmpty(data.Email)) {
        errors.Email = "Required Email";
    }
    if (validator.isEmpty(data.Password)) {
        errors.Password = "Required Password";
    }



    return {
        errors,
        isValid: isEmpty(errors)
    }
};