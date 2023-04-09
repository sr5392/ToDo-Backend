import express from "express";
import "./environment.mjs";
import "./database/db.mjs";
import taskRouter from "./routes/task-router.mjs";

const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

