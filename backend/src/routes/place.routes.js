import { Router } from "express";
import {
  registerPlace,
  getAllPlaceNameAndSlug,
  getExploreMoreCardData,
  getPlacesCardData,
  getOnePlaceData,
  getSearchPlaces
} from "../controllers/place.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/registerPlace").post(
  upload.fields([
    {
      name: "cardImg",
      maxCount: 1,
    },
    {
      name: "images",
      maxCount: 10,
    },
  ]),   
  registerPlace
);

router.route("/getplaceInfo/:placeslug").get(getOnePlaceData);
router.route("/getAllPlaceNameAndSlug").get(getAllPlaceNameAndSlug);
router.route("/getExploreMoreCardData").get(getExploreMoreCardData);
router.route("/getPlacesCardData").get(getPlacesCardData);
router.route("/getSearchPlaces/:text").get(getSearchPlaces)

export default router;
