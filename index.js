const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongo = require("./connect");
const registerRouter = require("./routers/userRoutes");
const contactRouter = require("./routers/contactRoutes");
const authenticate = require("./controllers/authentication");
const cors = require("cors");
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/users", registerRouter);
app.use(authenticate.authentication);
app.use("/contact", contactRouter);

mongo.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port number ${PORT}`));
