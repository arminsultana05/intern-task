
const router = require('express').Router();
const {getProduct}= require("../controllers/product")
router.get ('/all/new/another', getProduct)

module.exports = router;