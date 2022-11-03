const router = require("express").Router();
const Formacion = require("../models/Formacion");

//CREATE FORMACION
router.post("/", async (req, res) => {
  const newFormacion = new Formacion(req.body);

  try {
    const savedFormacion = await newFormacion.save();
    res.status(201).json(savedFormacion);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE FORMACION - put
router.put("/:id", async (req, res) => {
  try {
    const updatedFormacion = await Formacion.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFormacion);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE FORMACION - delete
router.delete("/:id", async (req, res) => {
  try {
    await Formacion.findByIdAndDelete(req.params.id);
    res.status(200).json("La Formacion ha sido borrada");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// //GET NEXT FORMACION - get
router.get("/next", async (req, res) => {
  let formaciones = [];
  try {
    formaciones = await Formacion.aggregate([
      { $match: { agotado: undefined } },
      { $sample: { size: 1 } },
    ]);
    res.status(200).json(formaciones);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL FORMACION - get
router.get("/all", async (req, res) => {
  try {
    const formaciones = await Formacion.find();
    res.status(200).json(formaciones.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE PROJECT - get
router.get("/:id", async (req, res) => {
  try {
    const formacion = await Formacion.findById(req.params.id);
    res.status(200).json(formacion);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;