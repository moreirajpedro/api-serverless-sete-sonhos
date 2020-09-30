const nodemailer = require('nodemailer');

const config = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "testandonodemailer123@gmail.com",
        pass: "hcqsvpyrdoxlwmvq"
    }
};

const transporter = nodemailer.createTransport(config);

const sendMail = (email, cb) => {
    const mailOptions = {
        from: 'Sete Sonhos <testandonodemailer123@gmail.com>',
        to: email,
        subject: 'Cadastro Realizado com Sucesso',
        html: 'Sempre que tivermos qualquer promoção, você será um dos(as) primeiros(as) a serem informados! Obrigado por confiar na Sete Sonhos.'
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
        transporter.close();
    });
};

module.exports = sendMail;