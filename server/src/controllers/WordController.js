const {Word} = require('../../models')

module.exports = {
    async create (req, res) {
        try {
          const word = await Word.create(req.body)
          res.send({
            message: word.toJSON()
          })
        }
        catch(err) {
            console.log(err)
            res.status(400).send({
               error: 'This word already exists'
            })
        }
    },
    findById (req, res) {
      try {
        Word.findById(req.params.id).then(word => {
          res.send({
            message: word.toJSON()
          })
        })
      } catch(err) {
          console.log(err)
          rest.status(400).send({
              error: 'Could not find word'
          })
      }
    },
    findAll (req, res) {
        try {
          Word.findAll().then(words => {
            res.send({
              message: JSON.stringify(words)
            })
          })
        } catch (err) {
          console.log(err)
          rest.status(400).send({
              error: 'Could not retrieve all words'
          })
        }
    }
}