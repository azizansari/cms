const express = require("express");
const { mintNft, test } = require("../controllers/nft.controllers");
const { validateAddNft } = require("../middleware/nft.middleware");
const router = express();
// register main api points
router.post("/mint-nft", [validateAddNft, mintNft]);
router.post("/test", [test]);
module.exports = router;