const {Score} = require('../../models')

module.exports = {
    findByUserId (req, res) {
      try {
        Score.findAll({
          where: {
            user: req.params.user
          }
        }).then(scores => {
          res.send({
            message: JSON.stringify(scores)
          })
        })
      } catch(err) {
        res.status(400).send({
          error: 'Could not find scores for user'
        })
      }
    },
    findAll (req, res) {
      try {
        Score.findAll().then(scores => {
          res.send({
            message: JSON.stringify(scores)
          })
        })
      } catch (err) {
        res.status(400).send({
          error: 'Could not retrieve all scores'
      })
    }
  }
}