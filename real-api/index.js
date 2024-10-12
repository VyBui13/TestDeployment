const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 9090;
const app = express();

const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
}
app.use(cors(corsOption));
app.use(express.json());
const userRouter = require("./routes/test.js");

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/test", userRouter);


app.listen(PORT, () => console.log("I'm running at", PORT));
