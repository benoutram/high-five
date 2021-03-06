const {User} = require('../../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
    async register (req, res) {
        try {
          const user = await User.create(req.body)
          const userJson = user.toJSON()
          res.send({
            user: userJson,
            token: jwtSignUser(userJson)
          })
        }
        catch(err) {
            res.status(400).send({
               error: 'This e-mail address already exists' 
            })
        }
    }
}