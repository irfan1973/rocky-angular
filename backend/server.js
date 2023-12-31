const http = require("http");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const express = require("express");
const formidable = require("formidable");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,UPDATE,DELETE,PATCH,OPTIONS"
  );
  next();
});

// Creating object of key and certificate
// for SSL
const options = {
  key: fs.readFileSync("Lets_Encrypt_certificate.pem"),
  cert: fs.readFileSync("Lets_Encrypt_certificate.pem"),
};

// Creating https server by passing
// options and app object

const server = http
  .createServer(options, app)
  .listen(3000, function (req, res) {
    console.log("server started at port 3000");
  });

app.get("/test", (req, res, next) => {
  res.status(200).json("Node is active and working");
});

app.post("/upload", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files["uploads[]"][0].filepath;
    var newpath = "cvs/" + files["uploads[]"][0].originalFilename;
    fs.copyFile(oldpath, newpath, function (err) {
      if (err) {
        res
          .status(200)
          .send({ Status: "Error", message: "Email not sent", err: err });
      }
    });
    res
      .status(200)
      .send({ Status: "Success", message: "File sent successfully" });
  });
});

// sending email

app.post("/email", (req, res) => {
  var err = "";
  if (req.body.from == undefined || req.body.from == "")
    err = "Please enter from email address";
  if (req.body.to == undefined || req.body.to == "")
    err = "Please enter to email address";
  if (req.body.subject == undefined || req.body.subject == "")
    err = "Please enter subject";
  if (req.body.message == undefined || req.body.message == "")
    err = "Please enter message body";

  if (err != "")
    res.status(401).send({ Status: "Error", Message: err, err: undefined });

  if (err == "") {
    var transporter = nodemailer.createTransport({
      host: "smtp.office365.com",

      Port: "587",
      secure: false,

      //Encryption method: STARTTLS,
      auth: {
        user: "contact@rockyroadsolutions.com",
        pass: "Mirgill786$",
      },
    });

    // Define the email content
    const mailOptions = {
      from: "contact@rockyroadsolutions.com",
      to: "irfan.gill@gmail.com",
      cc: "iffaygill@hotmail.com",
      subject: req.body.subject,
      message: req.body.message,
      name: req.body.name,
      cell: req.body.cell,
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(401).json({
          error: error,
          message: "email sending issues",
        });
      } else {
        console.log("Email sent: " + info);
        res.status(200).json({
          message: "Email sent Successful",
        });
      }
    });
  }
});
