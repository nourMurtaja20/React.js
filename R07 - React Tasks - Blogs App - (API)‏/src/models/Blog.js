class Blog {
    id;
    title;
    publisherName;
    categoryName;
    categoryId;
    description;

    constructor(title, publisherName, categoryName, categoryId, description) {
        this.title = title;
        this.publisherName = publisherName;
        this.categoryName = categoryName;
        this.categoryId = categoryId;
        this.description = description;
    }
}
export default Blog;