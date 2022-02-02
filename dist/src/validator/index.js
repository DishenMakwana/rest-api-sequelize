"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TodoValidator {
    checkCreateTodo() {
        return [
            (0, express_validator_1.body)('id')
                .optional()
                .isUUID(4)
                .withMessage('The value should be UUIDv4'),
            (0, express_validator_1.body)('title')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            (0, express_validator_1.body)('completed')
                .optional()
                .isBoolean()
                .withMessage('The value should be boolean')
                .isIn([0, false])
                .withMessage('The value should be zero or false'),
        ];
    }
    checkReadTodo() {
        return [
            (0, express_validator_1.query)('limit')
                .notEmpty()
                .withMessage('Limit value should not be empty')
                .isInt({ min: 1, max: 10 })
                .withMessage('The limit value should be number and between 1-10'),
            (0, express_validator_1.query)('offset')
                .optional()
                .isNumeric()
                .withMessage('Offset value should be numeric'),
        ];
    }
    checkIdParam() {
        return [
            (0, express_validator_1.param)('id')
                .notEmpty()
                .withMessage('Id value should not be empty')
                .isUUID(4)
                .withMessage('The value should be UUIDv4'),
        ];
    }
}
exports.default = new TodoValidator();
