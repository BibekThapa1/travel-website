import { Place } from "../models/place.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { removeAllFilesAsync } from "../utils/UnlinkAllFileAtOnce.js";

const registerPlace = asyncHandler(async (req, res, next) => {
  // TODO: To upload data in mongoDB atlas
  // Get data from user
  // Check wether the place name exists or not
  // Upload cover image in the coludinary
  // Upload gallery image of place in cloudinary
  // Assign the uploaded image url in the place model
  // Return response

  let { title, shortInfo, description, mapDescription, mapTag } = req.body;

  if (!(title && shortInfo && description && mapDescription && mapTag)) {
    throw new ApiError(400, "All the fields are necessary");
  }

  title = title.trim().toLowerCase();
  let slug = title.trim().replace(/\s+/g, "-");

  const placeExist = await Place.findOne({ title });

  if (placeExist) {
    await removeAllFilesAsync();
    throw new ApiError(400, "This place has already been registered");
  }

  const cardImgLocalFilePath = req.files?.cardImg[0]?.path;

  if (!cardImgLocalFilePath) {
    throw new ApiError(400, "Card Img is required");
  }

  const uploadedCardImg = await uploadOnCloudinary(cardImgLocalFilePath);

  if (!uploadedCardImg) {
    throw new ApiError(500, "Error occured while uploading on cloudinay");
  }

  const imagesLocalFilePath = req.files?.images;

  if (!imagesLocalFilePath) {
    throw new ApiError(400, "At least one images is required for carousel.");
  }

  let images = await Promise.all(
    imagesLocalFilePath.map(async (image) => {
      const uploadedImage = await uploadOnCloudinary(image?.path);
      if (!uploadedImage) {
        await removeAllFilesAsync();
        throw new ApiError(500, "Error occured while uploading in cloudinary");
      }
      return uploadedImage.url;
    })
  );

  const place = await Place.create({
    title,
    shortInfo,
    slug,
    cardImg: uploadedCardImg.url,
    images,
    description,
    mapDescription,
    mapTag,
  });

  if (!place) {
    throw new ApiError(500, "Error occured while registering place in DB");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, place, "Suscessfully inserted the place"));
});

const getAllPlaceNameAndSlug = asyncHandler(async (req, res, next) => {
  // TODO: to get the place name and slug for the search
  // Get all place and group them and project only the title and slug
  // Return the response

  const places = await Place.find({}, { title: 1, slug: 1, _id: 0 });

  if (!places) {
    throw new ApiError(500, "Error occured while fetching data");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, places, "Places fetched suscessfully"));
});

const getExploreMoreCardData = asyncHandler(async (req, res, next) => {
  // TODO: to get random 7 places from the database
  // Fetch random 7 data from mongoDB
  // Return response data

  const places = await Place.aggregate([
    {
      $sample: {
        size: 10,
      },
    },
    {
      $project: {
        cardImg: 1,
        title: 1,
        shortInfo: 1,
        slug: 1,
      },
    },
  ]);

  if (!places) {
    throw new ApiError(500, "Error occured while fetching card Data");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, places, "Suscesfully fetched data"));
});

const getPlacesCardData = asyncHandler(async (req, res, next) => {
  // TODO: To get the places Card Data using pagination
  // Get the query from the frontend i.e. limit
  // Fetch the data from mongoDB using pagination
  // Return the data

  const { limit = 10, page = 1 } = req.query;
  const skip = (page - 1) * limit;

  const places = await Place.find(
    {},
    {
      title: 1,
      cardImg: 1,
      shortInfo: 1,
      slug: 1,
    }
  )
    .skip(skip)
    .limit(limit);

  if (!places) {
    throw new ApiError(
      500,
      "Error occured while fetching random place card data"
    );
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, places, "Get Places Card Data fetched Suscessfully")
    );
});

const getOnePlaceData = asyncHandler(async (req, res, next) => {
  // TODO: To get a full data of a specific place
  // Get the title name from the frontend
  // Check wether it is valid or not
  // Fetch the data from the mongoDB
  // Return the response

  const { placeslug } = req.params;

  if (!placeslug) {
    throw new ApiError(400, "Place name is required");
  }

  const place = await Place.findOne({ slug: placeslug });

  if (!place) {
    throw new ApiError(400, "No such place found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, place, "Suscessfully fetched data"));
});

const getSearchPlaces = asyncHandler(async (req, res, next) => {
  // TODO: to get the matching place of the search text
  // Get the text from the frontend
  // Call for the Place model and look for it
  // Return response

  const { text } = req.params;

  if (!text) {
    throw new ApiError(400, "Text is required");
  }

  const places = await Place.find({ title: { $regex: new RegExp(text, "i") } });

  return res
    .status(200)
    .json(new ApiResponse(200, places, "Suscessfully fetched places"));
});

export {
  registerPlace,
  getAllPlaceNameAndSlug,
  getExploreMoreCardData,
  getPlacesCardData,
  getOnePlaceData,
  getSearchPlaces,
};
