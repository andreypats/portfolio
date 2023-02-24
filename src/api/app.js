const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
// const port = "https://portfolio-andreypats.vercel.app/";

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "andrey.it.work@gmail.com", // generated ethereal user
        pass: "ehclhtgvtajgsxag", // generated ethereal password
    }
});

app.get("/", function (request, response) {
    response.send('OK');
});

app.post('/sendMessage', async (req, res) => {

    let {message, phone, email, name} = req.body;

    // send mail with defined transport object
    await transporter.sendMail({
        from: 'My Profile page', // sender address
        to: "andrey.it.work@gmail.com", // list of receivers
        subject: "HR wants me", // Subject line
        // text: "Hello world?", // plain text body
        html: `<b>Message from portfolio:</b>
            <div>name: ${name}</div>
            <div>email: ${email}</div>
            <div>phone: ${phone}</div>
            <div>message: ${message}</div>
        `, // html body
    });

    res.send('Sending message!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

//node src/api/app.js