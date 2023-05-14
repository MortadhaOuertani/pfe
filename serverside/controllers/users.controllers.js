const UserModel = require("../models/users/users.models");
const CompanyModel = require("../models/users/company.model");
const ValidateLogin = require("../validation/Login")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const adminModel = require("../models/users/admin.model");
const fs = require('fs');
const usersModels = require("../models/users/users.models");
const companyModel = require("../models/users/company.model");
const uploadFileMiddleware = require("../middleware/multerImages");
const uploadProfilepicture = require("../middleware/multerImagesCandidat");

const RegisterCandidate = async (req, res) => {
  const { token } = req.body; //extraire le jeton 
  const account = jwt.verify(token, process.env.PRIVATE_KEY); //vérifier le jeton à l'aide de la clé privée spécifiée dans les variables d'environnement
  try {
  
    UserModel.findOne({ email: req.body.email }).then(async (exist) => {
      if (exist) {
        res.status(404).json("User already exists");
      } else {
        const salt = bcrypt.genSaltSync(10)  //la complexité du cryptage 
        const hash = bcrypt.hashSync(account.password, salt)//hashed password
        account.password = hash;
        account.role = "USER";
        await UserModel.create(account); 
        res.status(200).json({ message: "success" });
      }
    });
  }
  catch (error) {
    res.status(404).json("error");
  }
};

const RegisterCompany = async (req, res) => {
  const { token } = req.body;
  const account = jwt.verify(token, process.env.PRIVATE_KEY);
  try {
    CompanyModel.findOne({ email: req.body.email }).then(async (exist) => {
      if (exist) {
        res.status(404).json("user already exists");
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(account.password, salt)//hashed password
        account.password = hash;
        account.role = "COMPANY";
        await CompanyModel.create(account);
        res.status(200).json({ message: "success" });
      }
    });
  }
  catch (error) {
    res.status(404).json("error");
  }
};

const RegisterMailCompany = async (req, res) => {
  try {
    await uploadFileMiddleware(req, res);    //pour l'upload d'image
    CompanyModel.findOne({ email: req.body.email }).then(async (exist) => {
      if (exist) {
        res.status(404).json("user already exists");
      } else {
        var token = jwt.sign({       //créer un token et en suite en va envoyer ce token par un email
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          email: req.body.email,
          role: "COMPANY",
          password: req.body.password,
          logo: req.file.filename,
        }, "HDYHHSY6", { expiresIn: '15m'  });
        res.status(200).json({
          message: "An email has been sent to your account",
          token: "Bearer "+ token
        });

        // cretae a transporter 
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "projetpfe885@gmail.com",
            pass: "mkogokrpyiovokvw"
          }
        });

        const mailOptions = {
          from: "projetpfe885@gmail.com",
          to: req.body.email,
          subject: 'Finish registering',
          text: `Click on this link to Register : ${process.env.CLIENT_URL}/registercompany/${token}` 
        };
        transporter.sendMail(mailOptions, (error, info) => {  //envoi du token dans un mail
          if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending email' });
          }
          console.log(`Email sent: ${info.response}`);
          res.status(200).json({ message: 'Password reset email sent' });
        });
      }
    });
  } catch (error) {
    res.status(404).json("error");
  }
};

const RegisterMailCandidat = async (req, res) => {
  try {
    await uploadProfilepicture(req, res);  
    console.log(req.files)

    usersModels.findOne({ email: req.body.email }).then(async (exist) => {
      if (exist) {
        res.status(404).json("user already exists");
      } else {
        var token = jwt.sign({
          name: req.body.name,
          lastname: req.body.lastname,
          niveauEtude: req.body.niveauEtude,
          anneeObtentienDiplome: req.body.anneeObtentienDiplome,
          diplome: req.body.diplome,
          age: req.body.age,
          address: req.body.address,
          phone: req.body.phone,
          email: req.body.email,
          role: "USER",
          password: req.body.password,
          profile: req.file.filename,
        }, "HDYHHSY6", { expiresIn: '15m' });
        res.status(200).json({
          message: "An email has been sent to your account",
          token: "Bearer " + token
        });

        // create a transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "projetpfe885@gmail.com",
            pass: "mkogokrpyiovokvw"
          }
        });

        const mailOptions = {
          from: "projetpfe885@gmail.com",
          to: req.body.email,
          subject: 'Finish registering',
          text: `Click on this link to Register : ${process.env.CLIENT_URL}/registercandidat/${token}`
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
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};


const checkType = async (req, res) => { //pour vérifier le type de l'utilisateur
  const id = req.params.id; // a partir de son id qui est passé en paramètre

  try {
    const candidat = await UserModel.findById(id);
    if (candidat) {
      return res.json({ type: 'candidat' });
    }

    const company = await companyModel.findById(id);
    if (company) {
      return res.json({ type: 'company' });
    }

    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const EditCompany = async (req, res) => {
  try {         
    await uploadFileMiddleware(req, res); 
    const id = req.user.id; //recupére l'id d'utilisateur 
  req.body.logo=req.file.filename //remplace le nom de fichier du logo de l'entreprise dans le corps de la demande par le nom de fichier du logo qui a été téléchargé
    const updatedUser = await companyModel.findByIdAndUpdate(id, req.body, { //mettre a jour les infos avec l'id
      new: true,  //renvoie le document modifié 
    });
    res.status(200).json(updatedUser); //renvoie une réponse JSON avec le document mis à jour
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


const EditCandidat = async (req, res) => {
  try {
    await uploadProfilepicture(req, res);
    const id = req.user.id;
    if (req.body.profile){
    req.body.profile=req.file.filename}
    console.log(req.body)

    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};


const LoginCandidate = (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        res.status(404).json("incorrect password or email")
      } else {
        bcrypt.compare(req.body.password, user.password)
          .then(isMatch => {
            if (!isMatch) {
              res.status(404).json("incorrect password or email")
            } else {
              var token = jwt.sign({
                id: user._id,
                name: user.name,
                lastname: user.lastName,
                email: user.email,
                role: user.role,
                profile: user.profile,
                niveauEtude: user.niveauEtude,
                phone: user.phone,
                address: user.address,
                age: user.age,
                diplome: user.diplome,
                skills: user.skills,
              }, "HDYHHSY6", { expiresIn: '1h' });
              res.status(200).json({
                message: "success",
                token: "Bearer " + token
              })
            }
          })
      }
    })
    .catch(error => {
      res.status(500).json("error");
    });
}

const GetCandidatinfo = async (req, res) => {
  console.log(req.params.id)
  usersModels.findById({ _id: req.params.id }, (err, data) => {
    if (err) res.status(404).json({ message: "Not found" })
    res.status(200).json(data)
  })
}

const LoginCompany = async (req, res) => {
  try {
    const company = await CompanyModel.findOne({ email: req.body.email });
    if (!company) {
      res.status(401).json("Incorrect email or password");
    } else {
      const isMatch = await bcrypt.compare(req.body.password, company.password);
      if (!isMatch) {
        res.status(401).json("Incorrect email or password");
      } else {
        const token = jwt.sign({
          id: company._id,
          name: company.name,
          email: company.email,
          role: company.role,
          logo: company.logo,
          address: company.address,
          phone: company.phone,
        }, "HDYHHSY6", { expiresIn: '1h' });
        res.status(200).json({
          message: "success",
          token: "Bearer " + token
        });
      }
    }
  } catch (error) {
    res.status(500).json("error");
  }
};


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
    res.status(404).json("error");
  }
}

const LoginAdmin = (req, res) => {
  adminModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "incorrect password or email" })
      }

      bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(404).json({ message: "incorrect password or email" })
          }

          const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          }, "HDYHHSY6", { expiresIn: '1h' });

          return res.status(200).json({
            message: "success",
            token: "Bearer " + token
          })
        })
        .catch(error => {
          console.error(error)
          return res.status(500).json({ message: "internal server error" })
        })
    })
    .catch(error => {
      console.error(error)
      return res.status(500).json({ message: "internal server error" })
    })
}

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
    res.status(404).json("error");
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
    res.status(404).json("error");
  }
};


const ResetCompanyPassword = (req, res) => {  //Reset company's password 
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
  EditCandidat,
  EditCompany,
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
  ContactUs,
  RegisterMailCompany,
  RegisterMailCandidat,
  GetCandidatinfo,
  checkType
};