import "../../resources/css/DeleteBlog.css"

let DeleteBlog = () => {
    return (<section>
        <span>Are you sure you want to delete this blog?</span>
        <hr />
        <div>
            <input type="submit" value="Cancel" />
            <input type="submit" value="Done" />
        </div>
    </section>)
}
export default DeleteBlog;