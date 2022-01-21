const express = require("express");
const router = express();
// register main api points
router.use("/nft", require('./nft.route'));
module.exports = router;