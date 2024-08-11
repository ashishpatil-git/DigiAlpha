import Joi from "joi";

const register = Joi.object({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true },allowFullyQualified:true }),
    phone: Joi.string().pattern(/^\d+$/).min(10).max(15).required().messages({
        'string.pattern.base': `Phone number must have 10 digits.`,
        'string.min':"Invalid Phone number"
    })
})

const update = Joi.object({
    firstName: Joi.string().optional().min(3),
    lastName: Joi.string().optional().min(3),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true },allowFullyQualified:true }),
    phone: Joi.string().pattern(/^\d+$/).min(10).max(15).optional().messages({
        'string.pattern.base': `Phone number must have 10 digits.`,
        'string.min':"Invalid Phone number"
    })
})

export {
    register,
    update
}