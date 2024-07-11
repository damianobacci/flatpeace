import { Router } from "express";
import {
  validateIdParam,
  validateFlatshare,
} from "../middlewares/ValidationMiddleware.js";

const router = Router();

import {
  getAllFlatshares,
  getSingleFlatshare,
  createFlatshare,
  updateFlatshare,
  deleteFlatshare,
} from "../controllers/flatsharesController.js";

router
  .route("/")
  .get(getAllFlatshares)
  .post(validateFlatshare, createFlatshare);
router
  .route("/:id")
  .get(validateIdParam, getSingleFlatshare)
  .patch(validateFlatshare, validateIdParam, updateFlatshare)
  .delete(validateIdParam, deleteFlatshare);

export default router;
