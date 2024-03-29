const { check, validationResult } = require("express-validator");





exports.registerRules = () => [
     check('fullName','this field is required').notEmpty(),
     check('email','this field is required').notEmpty(),
     check('email','this field should be a valid email').isEmail(),
     check('password','this field should have more than 6 character').isLength({min:6 })
]
exports.validator= (req,res,next) => {
    const errors= validationResult(req)
    errors.isEmpty() ? next() : res.status(400).json({msg:errors.array()})
}