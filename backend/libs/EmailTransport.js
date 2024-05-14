const nodeMailer = require("nodemailer")
require("dotenv").config()

const EmailTransport = async(email, subject, text) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "ifenowoifesegun@gmail.com",
          pass: process.env.APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: "{finsweet.com",
        to: email,
        subject: `${subject}`,
        text: `${text}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("error sending email", error);
    }
}

module.exports = EmailTransport