import express from "express";
import path from "path";

const app = express();
const port = 3001;

app.use(express.static("public"));

app.use("/api", (req, res) => {
    res.send("hello world");
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;
