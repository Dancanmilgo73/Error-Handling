require('dotenv').config()
const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: process.env.emailUser,
            pass: process.env.pass
        }
    }
)
const sendEmail = async(message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                return reject(err)
            }

            console.log(info.response)
            resolve(info.response)
        })
    })
}

module.exports = sendEmail