const Court = require("../models/courts");

// Get all courts
exports.getAllCourts = async (req, res) => {
  try {
    const courts = await Court.find();
    res.json(courts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCourt = async (req, res) => {
  const {
    name,
    location,
    surface,
    availableTimes,
    pricePerHour,
    contact,
    description,
    images,
    ratings,
    uploadedBy,
  } = req.body;

  try {
    const newCourt = new Court({
      name,
      location,
      surface,
      availableTimes,
      pricePerHour,
      contact,
      description,
      images,
      ratings,
      uploadedBy,
    });

    const savedCourt = await newCourt.save();
    res.status(201).json(savedCourt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCourtById = async (req, res) => {
  const courtId = req.params.id;

  try {
    const court = await Court.findById(courtId);
    if (!court) {
      return res.status(404).json({ error: "Court not found" });
    }
    res.json(court);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCourt = async (req, res) => {
  const courtId = req.params.id;
  const updates = req.body;

  try {
    const updatedCourt = await Court.findByIdAndUpdate(courtId, updates, {
      new: true,
    });
    if (!updatedCourt) {
      return res.status(404).json({ error: "Court not found" });
    }
    res.json(updatedCourt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCourt = async (req, res) => {
  const courtId = req.params.id;

  try {
    const deletedCourt = await Court.findByIdAndDelete(courtId);
    if (!deletedCourt) {
      return res.status(404).json({ error: "Court not found" });
    }
    res.json({ message: "Court deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.searchCourts = async (req, res) => {
  const { query } = req.query;

  try {
    const courts = await Court.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
        { surface: { $regex: query, $options: "i" } },
      ],
    });
    res.json(courts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCourtsByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const courts = await Court.find({ uploadedBy: userId });
    res.json(courts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCourtsByLocation = async (req, res) => {
  const { location } = req.query;

  try {
    const courts = await Court.find({
      location: { $regex: location, $options: "i" },
    });
    res.json(courts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCourtsBySurface = async (req, res) => {
  const { surface } = req.query;

  try {
    const courts = await Court.find({
      surface: { $regex: surface, $options: "i" },
    });
    res.json(courts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCourtsByRating = async (req, res) => {
  const { rating } = req.query;

  try {
    const courts = await Court.find({ ratings: { $gte: parseFloat(rating) } });
    res.json(courts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCourtsByPrice = async (req, res) => {
  const { minPrice, maxPrice } = req.query;

  try {
    const courts = await Court.find({
      pricePerHour: { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) },
    });
    res.json(courts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
