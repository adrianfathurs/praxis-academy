require("dotenv").config();
const Express = require("express");

const cors = require('cors');
const authRouter = require("./router/authRouter");
const authRouter = require("./router/auth");
const userRouter = require("./router/user");
const eventRouter = require("./router/event");

>>>>>>> f566a3f3f39d54897a76c4d35f80dc7b2e786ae4
const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/event", eventRouter);

app.listen(port, () => {
  console.log(`App Berjalan di port ${port}`);
});
