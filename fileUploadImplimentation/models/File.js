/** @format */

const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: [String],
        default: [],
    },
    email: {
        type: String,
        required: true,
    },
});

// Post-Middleware
fileSchema.post("save", async function (doc) {
    try {
        console.log("DOC", doc);

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });
        // send email
        let info = await transporter.sendMail({
            from: "Developer- By Akram",
            to: doc.email,
            subject: "New File Uploaded on Cloudinary Server",
            html: `<h1>Hello from Server Side: </h1> <p>File uploaded on Cloudinary Server: <a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
        });

        console.log("INFO", info);
    } catch (err) {
        console.log("ERROR", err);
    }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
