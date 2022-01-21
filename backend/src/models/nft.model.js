const mongoose = require("mongoose");
const { Schema } = mongoose;
const nftSchema = new Schema(
  {
    tokenId: {
      type: String,
      unique: true,
      lowercase: true,
      default: undefined,
      sparse: true,
      required: false,
    },
    metaDataUri: {
      type: String,
      unique: true,
      lowercase: true,
      default: undefined,
      sparse: true,
      required: false,
    },
    collectionId: {
      type: Schema.Types.ObjectId,
      ref: "collection",
      required: false,
      default: null,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "project",
      required: false,
      default: null,
    },
    isActive: { type: Boolean, default: true },
    approvedByAdmin: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["PENDING", "APPROVED", "REJECTED", "NOT_MINTED"],
      default: "NOT_MINTED",
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    digitalKey: {
      type: String,
      default: null,
    },
    unlockContent: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    saleState: {
      type: String,
      enum: ["BUY", "AUCTION", "SOLD"],
      required: true,
    },
    nonce: {
      type: Number,
      default: null,
    },
    isNftSold: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
  }
);

module.exports = { Nft : mongoose.model("nft", nftSchema)}
