import axios from "axios";
import Task from "../models/Task";

class TaskController {
    async create(task) {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let formData = new FormData();
            formData.append("name", task.name);
            formData.append("image", task.image);
            formData.append("brief_details", task.brief_details);
            formData.append("details", task.details);
            formData.append("from_date", task.from_date);
            formData.append("to_date", task.to_date);
            formData.append("category_id", task.category_id);
            let response = await axios.post(`/tasks`, formData);
            return { status: true, message: response.data.message, object: response.data.object };
        } catch (error) {
        }
    }
    async read() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let response = await axios.get(`/tasks`);
            if (response.data.length != 0) {
                let tasks = [];
                for (let key in response.data) {
                    let item = response.data[key];
                    let task = new Task();
                    task.id = key;
                    task.name = item.name;
                    task.categoryId = item.categoryId;
                    task.categoryName = item.categoryName;
                    task.details = item.details;
                    task.startDate = item.startDate;
                    task.endDate = item.endDate;
                    task.status = item.status;
                    tasks.push(task);
                }
                return tasks;
            } else {
                return [];
            }
        } catch (error) {
            return [];
        }
    }
    async update(updatedTask) {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let formData = new FormData();
            formData.append("_method", "PUT");
            formData.append("name", updatedTask.name);
            formData.append("brief_details", updatedTask.brief_details);
            formData.append("details", updatedTask.details);
            formData.append("from_date", updatedTask.from_date);
            formData.append("to_date", updatedTask.to_date);
            formData.append("category_id", updatedTask.category_id);
            if (updatedTask.image != null) {
                formData.append("image", updatedTask.image);
            }
            let response = await axios.post(`/tasks/${updatedTask.id}`, formData);
            return { status: true, message: response.data.message, object: response.data.object };
        } catch (error) {
            return {
                status: false, message: error.response.data.message
            };
        }
    }
    async delete(id) {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let response = await axios.delete(``);
            return true;
        } catch (error) {
            return false;
        }
    }
}
export default TaskController;