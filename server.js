const express = require("express");
const carRoutes = require("./routes/carRoutes");
const app = express();

app.use(express.json());

app.use("/api/cars", carRoutes);

app.get("/", async (req, res, next) => {
  try {
    res.json("success");
  } catch (error) {
    next(new Error("not success"));
  }
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
