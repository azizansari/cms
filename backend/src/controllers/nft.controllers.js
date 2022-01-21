const { Nft } = require("../models/nft.model");
const Emp = require("../models/test");
module.exports = (function () {
  this.mintNft = async (req, res, next) => {
    try {
      const nft = new Nft(req.body);
      nft.save();
      res.json({
        success: "true",
        message: "Create New NFT",
        data: nft,
      });
    } catch (error) {
      next(error);
    }
  };
  this.test = async(req, res) =>{
    const emp = await Emp.find({valuation : {$gt : 400 }})
    // emp[0].valuation = 450
    // emp[0].save()
    // const nrm = Emp.create({
    //   valuation : 600,
    //   name : "test"
    // })
    // await nrm.save()
    res.json({
      success : true,
      data : emp,
      // nrm
    })
  }
  return this;
})();
