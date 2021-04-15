require("dotenv").config();
const Express = require("express");
const cors = require('cors');
const authRouter = require("./router/authRouter");
const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/api/v1/user", authRouter);

app.listen(port, () => {
  console.log(`App Berjalan di port ${port}`);
});
