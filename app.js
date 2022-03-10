const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const sweetRoutes = require("./api/sweet/sweet.routes");
const connectDB = require("./db");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

app.use("/api/sweets", sweetRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(errorHandler);

app.listen(8080, () => console.log(`This app is running on local host:8080`));
