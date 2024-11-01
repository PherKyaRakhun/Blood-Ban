const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// Dotenv Config
dotenv.config();

// DB Connection
connectDB();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Welcome to the Reality"  });
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is Running in ${process.env.DEV_MODE} mode on Port ${process.env.PORT} `
      .bgBlue.white
  );
});
