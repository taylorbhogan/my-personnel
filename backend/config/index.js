module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  mongoURI: process.env.MONGOURI
}
