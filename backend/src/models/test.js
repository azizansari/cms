var Document = require("camo").Document;
module.exports = class Emp extends Document {
  constructor() {
    super();
    this.schema({
      name: String,
      valuation: {
        type: Number,
        default: 10000000000,
        min: 0,
      },
      employees: [String],
      dateFounded: {
        type: Date,
        default: Date.now,
      },
    });
  }

  static collectionName() {
    return "employees";
  }
};
