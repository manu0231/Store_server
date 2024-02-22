module.exports = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: '3alphaat@gmail.com',
    pass: process.env.SMTP_PASSWORD,
  },
}
