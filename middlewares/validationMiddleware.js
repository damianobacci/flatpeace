import mongoose from "mongoose";
import { body, param, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ]; // In Express if you want to return multiple middlewares together you must return an array
};

export const validateFlatshare = withValidationErrors([
  body("name").notEmpty().withMessage("A name is required."),
]);

export const validateIdParam = withValidationErrors([
  param("id")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid MongoDb ID"),
]);

// Structure for reference

// export const validateTest = withValidationErrors([
//   body("name")
//     .notEmpty()
//     .withMessage("Name is required")
//     .isLength({ min: 3 })
//     .withMessage("Name must be at least 3 characters long"),
// ]);
