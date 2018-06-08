const Joi = require('joi')

const messages = {
    'email': 'This e-mail address provided was not valid',
    'password': 'This password provided did not match the allowed rules',
}

module.exports = {
    login (req, res, next) {
        const schema = {
            email: Joi.string().required(),
            password: Joi.string().required()
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