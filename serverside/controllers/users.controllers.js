const UserModel = require("../models/users/users.models");
const CompanyModel = require("../models/users/company.model");
const ValidateLogin = require("../validation/Login")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const RegisterCandidate = async (req, res) => {
  try {
    UserModel.findOne({ email: req.body.email }).then(async (exist) => {
      if (exist) {
        errors.email = "user exist";
        res.status(404).json(errors);
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)//hashed password
        req.body.password = hash;
        req.body.role = "USER";
        await UserModel.create(req.body);
        res.status(200).json({ message: "success" });
      }
    });
  }
  catch (error) {
    res.status(404).json(error.message);
  }
};

const RegisterCompany = async (req, res) => {
  try {
    CompanyModel.findOne({ email: req.body.email }).then(async (exist) => {
      if (exist) {
        errors.email = "user exist";
        res.status(404).json(errors);
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)//hashed password
        req.body.password = hash;
        req.body.role = "USER";
        await CompanyModel.create(req.body);
        res.status(200).json({ message: "success" });
      }
    });
  }
  catch (error) {
    res.status(404).json(error.message);
  }
};

const LoginCandidate = async (req, res) => {
  const { errors, isValid } = ValidateLogin(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      UserModel.findOne({ email: req.body.email }).then(user => {
        if (!user) {
          errors.email = "user not found "
          res.status(404).json(errors)

        } else {
          bcrypt.compare(req.body.password, user.password)
            .then(isMatch => {
              if (!isMatch) {
                errors.password = "incorrect password"
                res.status(404).json(errors)
              } else {
                var token = jwt.sign({
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  role: user.role
                }, "HDYHHSY6", { expiresIn: '1h' });
                res.status(200).json({
                  message: "success",
                  token: "Bearer " + token
                })
              }
            })
        }
      })
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
}
//

const LoginCompany = async (req, res) => {
  const { errors, isValid } = ValidateLogin(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      CompanyModel.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            errors.email = "user not found "
            res.status(404).json(errors)

          } else {
            bcrypt.compare(req.body.password, user.password)
              .then(isMatch => {
                if (!isMatch) {
                  errors.password = "incorrect password"
                  res.status(404).json(errors)
                } else {
                  var token = jwt.sign({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                  }, "HDYHHSY6", { expiresIn: '1h' });
                  res.status(200).json({
                    message: "success",
                    token: "Bearer " + token
                  })
                }
              })
          }
        })
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const Test = (req, res) => {
  res.send("welcome user")
}

const Admin = (req, res) => {
  res.send("welcome admin")
}

module.exports = {
  RegisterCandidate,
  RegisterCompany,
  LoginCandidate,
  LoginCompany,
  Test,
  Admin
};