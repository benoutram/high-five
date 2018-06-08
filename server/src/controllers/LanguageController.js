const {Language} = require('../../models')

module.exports = {
    async create (req, res) {
        try {
          const language = await Language.create(req.body)
          res.send({
            message: language.toJSON()
          })
        } catch(err) {
            console.log(err)
            res.status(400).send({
               error: 'This language already exists'
            })
        }
    },
    findById (req, res) {
      try {
        Language.findById(req.params.id).then(language => {
          res.send({
            message: language.toJSON()
          })
        })
      } catch(err) {
          console.log(err)
          rest.status(400).send({
              error: 'Could not find language'
          })
      }
    },
    findAll (req, res) {
        try {
            Language.findAll().then(languages => {
            res.send({
              message: JSON.stringify(languages)
            })
          })
        } catch (err) {
          console.log(err)
          rest.status(400).send({
              error: 'Could not retrieve all languages'
          })
        }
    }
}