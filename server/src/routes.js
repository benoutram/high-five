const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const LanguageController = require('./controllers/LanguageController')
const LanguageControllerPolicy = require('./policies/LanguageControllerPolicy')
const ProfileController = require('./controllers/ProfileController')
const ProfileControllerPolicy = require('./policies/ProfileControllerPolicy')
const RegistrationController = require('./controllers/RegistrationController')
const RegistrationControllerPolicy = require('./policies/RegistrationControllerPolicy')
const ScoreController = require('./controllers/ScoreController')
const WordController = require('./controllers/WordController')
const WordControllerPolicy = require('./policies/WordControllerPolicy')

module.exports = app => {
  app.post('/register',
    RegistrationControllerPolicy.register,
    RegistrationController.register)

  app.post('/login',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login
  )

  app.post('/profile',
    ProfileControllerPolicy.update,
    ProfileController.update)

  app.post('/word',
    WordControllerPolicy.create,
    WordController.create)

  app.get('/word/:id',
    WordController.findById)

  app.get('/words',
    WordController.findAll)

  app.post('/language',
    LanguageControllerPolicy.create,
    LanguageController.create)

  app.get('/language/:id',
    LanguageController.findById)

  app.get('/languages',
    LanguageController.findAll)

  app.get('/scores',
    ScoreController.findAll)

  app.get('/scores/:user',
    ScoreController.findByUserId)
}
