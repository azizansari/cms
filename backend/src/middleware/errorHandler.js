const { APIError, InternalServerError } = require("rest-api-errors");
const { STATUS_CODES } = require("http");

const errorHandler = (err, req, res, next) => {
  const error =
    err.status === 401 || err instanceof APIError
      ? err
      : new InternalServerError();

  if (err.message === "jwt expired") {
    return res
      .status(401)
      .json({ status: false, message: err.message });
  }
  if (err.name === "ValidationError") {
    return res
      .status(err.code || 422)
      .json({ status: false, message: err.message });
  }

  if (err.name === "CastError" && err.path === "_id") {
    return res
      .status(422)
      .json({ status: false, message: "Invalid ObjectID." });
  }

  const statusCode = err.code || 500;
  return res.status(statusCode).json({
    status: false,
    message: err.message || STATUS_CODES[error.status],
  });
};

module.exports = errorHandler;
