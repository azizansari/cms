const Joi = require("joi");
const { validateRequest } = require("./requestHelpers");
module.exports = (function () {
  this.validateAddNft = async (req, res, next) => {
    const schema = Joi.object({
      ownerId: Joi.string(),
      collectionId: Joi.string(),
      projectId: Joi.string(),
      digitalKey: Joi.alternatives().conditional("unlockContent", {
        is: 1,
        then: Joi.string().required(),
        otherwise: Joi.string(),
      }),
      unlockContent: Joi.boolean().required(),
      price: Joi.number().required(),
      saleState: Joi.string().valid("BUY", "AUCTION").required(),
    });
    validateRequest(req, res, next, schema);
  };
  return this;
})();
