import { Router } from "express";

const router = Router();

import {
  getAllFlatshares,
  getSingleFlatshare,
  createFlatshare,
  updateFlatshare,
  deleteFlatshare,
} from "../controllers/flatsharesController.js";

router.route("/").get(getAllFlatshares).post(createFlatshare);
router
  .route("/:id")
  .get(getSingleFlatshare)
  .patch(updateFlatshare)
  .delete(deleteFlatshare);

export default router;
