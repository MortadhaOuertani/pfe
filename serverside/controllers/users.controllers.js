const UserModel = require("../models/users/users.models");
const CompanyModel = require("../models/users/company.model");
const ValidateLogin = require("../validation/Login")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const adminModel = require("../models/users/admin.model");
const fs = require('fs');

const RegisterCandidate = async (req, res) => {
  try {
    console.log(req.body)
    // Convert image to base64-encoded string

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

const RegisterAdmin = (req, res) => {
  try {
    adminModel.findOne({ email: req.body.email }).then(async (exist) => {
      if (exist) {
        errors.email = "user exist";
        res.status(404).json(errors);
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)//hashed password
        req.body.password = hash;
        req.body.role = "ADMIN";
        await adminModel.create(req.body);
        res.status(200).json({ message: "success" });
      }
    });
  }
  catch (error) {
    res.status(404).json(error.message);
  }
}

const LoginAdmin = (req, res) => {
  const { errors, isValid } = ValidateLogin(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      adminModel.findOne({ email: req.body.email })
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
};

const ForgotPassword = async (req, res) => {
  try {
    UserModel.findOne({ email: req.body.email }, (err, user) => {  //find user by email
      if (err) {
        res.status(404).json(err.message);
      }
      else if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      else {
        var token = jwt.sign({           //generate token 
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }, "HDYHHSY6", { expiresIn: '15m' });
        res.status(200).json({
          message: "An email has been sent to your account",
          token: "Bearer " + token
        })

        // Send password reset email to user
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "projetpfe885@gmail.com",
            pass: "mkogokrpyiovokvw"
          }
        });

        const mailOptions = {
          from: "projetpfe885@gmail.com",
          to: user.email,
          subject: 'Reset your password',
          text: `Click on this link to reset your password: ${process.env.CLIENT_URL}/reset-password/${user._id}/${token}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending email' });
          }
          console.log(`Email sent: ${info.response}`);
          res.status(200).json({ message: 'Password reset email sent' });
        });

      }
    }
    )
  } catch (error) {
    res.status(404).json(error.message);
  }
};


const ResetPassword = (req, res) => {  //Reset candidate's password 
  try {
    // Verify JWT token
    const { token, password } = req.body;
    const { email } = jwt.verify(token, process.env.PRIVATE_KEY);
    console.log(email);
    // Find user by email

    UserModel.findOne({ email }, (err, user) => {
      if (err) {
        return res.status(400).json({ message: 'User not found' });
      }
      else if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update user's password
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)//hashed password
      user.password = hash;
      user.save();

      res.status(200).json({ message: 'Password updated successfully' });
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating password' });
  }
};

const ForgotCompanyPassword = async (req, res) => {
  try {
    CompanyModel.findOne({ email: req.body.email }, (err, user) => {  //find user by email
      if (err) {
        res.status(404).json(err.message);
      }
      else if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      else {
        var token = jwt.sign({           //generate token 
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }, "HDYHHSY6", { expiresIn: '15m' });
        res.status(200).json({
          message: "An email has been sent to your account",
          token: "Bearer " + token
        })

        // Send password reset email to user
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "projetpfe885@gmail.com",
            pass: "mkogokrpyiovokvw"
          }
        });

        const mailOptions = {
          from: "projetpfe885@gmail.com",
          to: user.email,
          subject: 'Reset your password',
          text: `Click on this link to reset your password: ${process.env.CLIENT_URL}/reset-password/${user._id}/${token}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending email' });
          }
          console.log(`Email sent: ${info.response}`);
          res.status(200).json({ message: 'Password reset email sent' });
        });

      }
    }
    )
  } catch (error) {
    res.status(404).json(error.message);
  }
};


const ResetCompanyPassword = (req, res) => {  //Reset candidate's password 
  try {
    // Verify JWT token
    const { token, password } = req.body;
    const { email } = jwt.verify(token, process.env.PRIVATE_KEY);
    console.log(email);
    // Find user by email
    CompanyModel.findOne({ email }, (err, user) => {
      if (err) {
        return res.status(400).json({ message: 'User not found' });
      }
      else if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update user's password
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)//hashed password
      user.password = hash;
      user.save();

      res.status(200).json({ message: 'Password updated successfully' });
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating password' });
  }
}

const ContactUs = (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const content = req.body.content;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "projetpfe885@gmail.com",
        pass: "mkogokrpyiovokvw"
      }
    });

    const mailOptions = {
      from: "projetpfe885@gmail.com",
      to: "hirelabContactus@gmail.com",
      subject: `New contact us submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nContent: ${content}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      console.log(`Email sent: ${info.response}`);
      res.status(200).json({ message: 'Email sent successfully ' });
    })
  } catch {
    console.log(error);
    res.status(500).json({ message: 'Error' });
  }
}


module.exports = {
  RegisterCandidate,
  RegisterCompany,
  LoginCandidate,
  LoginCompany,
  RegisterAdmin,
  LoginAdmin,
  ForgotPassword,
  ResetPassword,
  ForgotCompanyPassword,
  ResetCompanyPassword,
  ContactUs
};