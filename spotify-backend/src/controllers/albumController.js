import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";
import asyncHandler from "express-async-handler";
const addAlbum = asyncHandler(async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColour = req.body.bgColour;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColour,
      image: imageUpload.secure_url,
    };

    const album = albumModel(albumData);
    await album.save();

    res.status(200).json({ message: "Album Added" });
  } catch (error) {
    res.status(400).json({ message: "Failed to save the album" });
    // throw new Error("Failed to save the album");
  }
});

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find({});
    res.status(200).json({ success: true, albums: allAlbums });
  } catch (error) {
    res.status(400).json({ message: "Failed to load the albums" });
  }
};

const removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "Album Removed" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete the album" });
  }
};

export { addAlbum, listAlbum, removeAlbum };
