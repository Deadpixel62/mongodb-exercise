const Exo= require("../Models/exo.model")
const exoController = {};


exoController.createExo = async function (req, res) {
  const exo = new Exo({
    guid: req.body.id,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    duration: req.body.duration,
    students : req.body.students
  });
  try {
    await exo.save();
    res.status(201).json({
      message: "Exo created successfully",
      exo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while creating exo",
      error,
    });
  }
};


exoController.getAllExo = async function (req, res) {
  console.log("GET /exos");
  let exos;
  try {
    exos = await Exo.find();
    res.send(exos);
  } catch (error) {
    res.status(500).send(error);
  }
};





module.exports = exoController ;

/**
 * exoController.createExo = async function(req,res) {
    const exo = new Exo({
        guid : req.body.guid,
        title: req.body.title,
        description : req.body.description,
        date : req.body.date,
        duration: req.body.duration,
    });

    try {
        await exo.save();
        res.status(201).json({
            message : "Exercise added successfully",
            exo
        });
    } catch (error) {
        res.status(500).json({
            message:"An error occurred while creating Exercise!",
            error
        })
    }   
}
 */