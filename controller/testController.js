const testController = (res, req) => {
  res.status(200).send({
    message: "Welcome The User",
    success: true,
  });
};

module.exports = { testController };
