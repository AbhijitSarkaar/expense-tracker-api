module.exports = (app) => {
  app.use("/users", require("./userRoutes"));
};
