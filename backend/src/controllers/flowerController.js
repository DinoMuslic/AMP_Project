const Flower = require("../models/flowerModel.js");

const getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.getAllFlowers();

    const parsedFlowers = flowers.map(flower => ({
      ...flower,
      price: parseFloat(flower.price),
    }));

    res.json(parsedFlowers);
  } catch (error) {
    console.error("Error fetching flowers:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllFlowers }