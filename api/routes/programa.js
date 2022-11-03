const router = require("express").Router();
const Programa = require("../models/Programa");

//CREATE PROGRAMA
router.post("/", async (req, res) => {
  const newPrograma = new Programa(req.body);

  try {
    const savedPrograma = await newPrograma.save();
    res.status(201).json(savedPrograma);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PROGRAMA - put
router.put("/:id", async (req, res) => {
  try {
    const updatedPrograma = await Programa.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPrograma);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PROGRAMA - delete
router.delete("/:id", async (req, res) => {
  try {
    await Programa.findByIdAndDelete(req.params.id);
    res.status(200).json("El Programa ha sido borrado");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// //GET RANDOM 3 PROGRAMAS - get
router.get("/random", async (req, res) => {
  let programas = [];

  try {
    programas = await Programa.aggregate([{ $sample: { size: 3 } }]);
    res.status(200).json(programas);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PROGRAMAS - get
router.get("/all", async (req, res) => {
  try {
    const programas = await Programa.find();
    res.status(200).json(programas.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE PROGRAMA - get
router.get("/:id", async (req, res) => {
  try {
    const programa = await Programa.findById(req.params.id);
    res.status(200).json(programa);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
