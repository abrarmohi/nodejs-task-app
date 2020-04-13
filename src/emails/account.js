const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'widag14849@2go-mail.com',
    subject: 'Welcome to the app!',
    text: `I hope you like it, ${name}`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'widag14849@2go-mail.com',
    subject: 'Sorry to see you go!',
    text: `We are really sorry if anything went wrong, ${name}`
  })
} 

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}



