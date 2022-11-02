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
    res.status(200).json("El Programa ha sido borrada");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET ALL PROGRAMA - get
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

// //GET RANDOM 9 PROJECTS - get
// router.get("/random", async (req, res) => {
//   let projects = [];

//   try {
//     projects = await Project.aggregate([{ $sample: { size: 12 } }]);
//     res.status(200).json(projects);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
