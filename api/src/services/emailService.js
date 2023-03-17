const nodemailer = require('nodemailer');

// Configuração do transporte de e-mail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'seuemail@gmail.com',
    pass: 'sua_senha'
  }
});

// Função para enviar e-mail
async function sendEmail(to, subject, text) {
  try {
    const info = await transporter.sendMail({
      from: 'seuemail@gmail.com',
      to: to,
      subject: subject,
      text: text
    });
    console.log('E-mail enviado: ' + info.response);
  } catch (err) {
    console.error('Erro ao enviar e-mail: ' + err.message);
  }
}

module.exports = {
  sendEmail
};
