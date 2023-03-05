const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const gameRoutes = require("./routes/gameRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const PORT = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(adminRoutes);
app.use(gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
