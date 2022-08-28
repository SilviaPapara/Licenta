var nodemailer = require("nodemailer");

const sendEmail = (data) => {
  console.log(process.env.SEND_EMAIL_USER);
  console.log(process.env.SEND_EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SEND_EMAIL_USER,
      pass: process.env.SEND_EMAIL_PASS,
    },
  });
  console.log("asdasdas");
  const mailOptions = {
    from: "Order",
    to: process.env.SEND_EMAIL_USER,
    subject: "You have new order",
    text: JSON.stringify(data),
    // text: 'primul rand \n al doilea',
  };

  transporter.sendMail(mailOptions, (error) => {
    console.log(error);
    console.log("EMAIL SENT");
  });
};

module.exports = {
  sendEmail,
};
