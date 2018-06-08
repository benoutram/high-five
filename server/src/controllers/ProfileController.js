const {User} = require('../../models')

module.exports = {
    async update (req, res) {
      console.log(req.body)
        try {
          const user = await User.findOne({
            where: {
              id: req.body.id
            }
          })
          user.update(req.body, {fields: ['email', 'name', 'language']})
          const userJson = user.toJSON()
          res.send(user.toJSON())
        }
        catch(err) {
            res.status(500).send({
               error: 'Unable to update the user' 
            })
        }
    }
}