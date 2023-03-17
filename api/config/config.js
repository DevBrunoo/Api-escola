module.exports = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || 'mongodb://localhost/mydb',
    secretKey: process.env.SECRET_KEY || 'mysecretkey'
  }
  