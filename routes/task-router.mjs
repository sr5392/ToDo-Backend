import express from "express";
import TaskModel from "../models/task-model.mjs";

const taskRouter = express.Router();

taskRouter.get("/get", async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
});

taskRouter.post("/add", async (req, res) => {
    try {
        const task = new TaskModel({...req.body});
        const newTask = await task.save();
        res.status(200).send(newTask);  
    } catch (err) {
        res.status(500).send(err);
    }
});

export default taskRouter;