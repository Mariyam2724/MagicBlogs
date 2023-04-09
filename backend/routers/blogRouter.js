const Model = require("../models/blogModel")
const router = require("express").Router()

router.post("/add", (req, res) => {
  console.log(req.body)

  new Model(req.body)
    .save()
    .then((result) => {
      console.log(result)
      console.log("data saved")
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
  // res.send('response achieved ')
})

router.get("/getbyuserid/:id", (req, res) => {
  Model.find({user:req.params.id}) 
    .populate("user")
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})


router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.put("/update/:userid", (req, res) => {
  Model.findByIdAndUpdate(req.params.userid, req.body, { new: true })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

module.exports = router;