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
    async login (req, res) {
      try {
        const {email, password} = req.body
        const user = await User.findOne({
          where: {
            email: email
          }
        })
        if (!user) {
          res.status(403).send({
            error: [
              {
                key: 'global',
                message: 'The login information was incorrect'
              }
            ]
          })
        }

        if (!await user.comparePassword(password)) {
          return res.status(403).send({
            error: [
              {
                key: 'global',
                message: 'The login information was incorrect'
              }
            ]
          })
        }

        const userJson = user.toJSON()
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })
      } catch (err) {
        console.log(err)
        res.status(500).send({
          error: [
            {
              key: 'global',
              message: 'An error has occurred trying to login'
            }
          ]
        })
      }
    }
}