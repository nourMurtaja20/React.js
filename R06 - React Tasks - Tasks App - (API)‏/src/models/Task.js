class Task {
    id;
    name;
    category_id;
    brief_details;
    details;
    from_date;
    to_date;
    image;
    status;

    constructor(name, categoryId,briefDetails,  details, fromDate, toDate,image) {
        this.name = name;
        this.category_id = categoryId;
        this.brief_details = briefDetails;
        this.details = details;
        this.from_date = fromDate;
        this.to_date = toDate;
        this.image=image;
    }
}
export default Task;