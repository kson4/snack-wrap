const Petition = require("../models/Petition");

module.exports = {
  home: async (req, res) => {
    const petitions = await Petition.find().sort({ date: "desc" });

    res.render("index.ejs", {
      petitions: petitions,
    });
  },
  signed: async (req, res) => {
    console.log(req.body);
    await Petition.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message,
    });
    res.redirect("/");
  },
};
