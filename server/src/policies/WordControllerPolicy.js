const Joi = require('joi')

const messages = {
    'label': 'The label must be less than 30 chararacters'
}

module.exports = {
    create (req, res, next) {
        const schema = {
            label: Joi.string().alphanum().max(30).required()
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