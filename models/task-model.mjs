import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
    },
    Content: {
        type: String,
        required: true
    }
});

const TaskModel = mongoose.model("Task", taskSchema);
export default TaskModel;