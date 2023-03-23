class Task {
    id;
    name;
    categoryId;
    categoryName;
    details;
    startDate;
    endDate;
    status;

    constructor(id, name, categoryId, categoryName, details, startDate, endDate) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.details = details;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = "Waiting";
    }
}
export default Task;