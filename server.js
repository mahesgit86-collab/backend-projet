const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const { connectDB } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "server is running" });
});

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
    });
}

startServer();