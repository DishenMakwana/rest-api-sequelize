import { body, query, param } from 'express-validator';

class TodoValidator {
    checkCreateTodo() {
        return [
            body('id')
                .optional()
                .isUUID(4)
                .withMessage('The value should be UUIDv4'),

            body('title')
                .notEmpty()
                .withMessage('The title value should not be empty'),

            body('completed')
                .optional()
                .isBoolean()
                .withMessage('The value should be boolean')
                .isIn([0, false])
                .withMessage('The value should be zero or false'),
        ];
    }

    checkReadTodo() {
        return [
            query('limit')
                .notEmpty()
                .withMessage('Limit value should not be empty')
                .isInt({ min: 1, max: 10 })
                .withMessage(
                    'The limit value should be number and between 1-10'
                ),
            query('offset')
                .optional()
                .isNumeric()
                .withMessage('Offset value should be numeric'),
        ];
    }

    checkIdParam() {
        return [
            param('id')
                .notEmpty()
                .withMessage('Id value should not be empty')
                .isUUID(4)
                .withMessage('The value should be UUIDv4'),
        ];
    }
}

export default new TodoValidator();
