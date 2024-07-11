import { Router } from "express";
import { validateFlatshare } from "../middlewares/ValidationMiddleware.js";

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
  .get(getSingleFlatshare)
  .patch(validateFlatshare, updateFlatshare)
  .delete(deleteFlatshare);

export default router;
