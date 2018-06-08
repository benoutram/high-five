const Joi = require('joi')

const messages = {
    'email': 'This e-mail address provided was not valid',
    'name' : 'This name provided was not valid',
    'language': 'The language provided was not valid'
}

module.exports = {
    update (req, res, next) {
        const schema = {
            id: Joi.number().integer().required(),
            email: Joi.string().email(),
            name: Joi.string().required(),
            language: Joi.number().integer().required(),
        }

        const {error, value} = Joi.validate(req.body, schema, {
            abortEarly: false
        })
        const errors = []

        if (error) {
            error.details.forEach(function(detail) {
                var message = messages[detail.context.key] ? messages[detail.context.key] : 'Invalid request'
                errors.push({
                    key: detail.path[0],
                    message: message
                });
            });
            
            res.status(400).send({
                error: errors
            })
        } else {
            next()
        }
    }
}