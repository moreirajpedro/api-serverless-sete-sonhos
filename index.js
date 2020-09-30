const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./nodemailer');
const cors = require('cors');
const app = express();


const PORT = 444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(PORT, () => {
    console.log('We are live on port 444')
});

app.get('/', (req, res) => {
    res.send('Welcome to my api');
});

app.post('/api/v1', (req, res) => {
    const { email } = req.body;

    sendMail(email, function (err, data) {
        if (err) {
            res.status(500).json({
                message: 'Deu algum erro na hora de cadastrar seu email. Poderia tentar de novo, por favor?'
            });
        } else {
            t: res.json({ message: 'Email enviado! Obrigado =)' })
        }
    });
});