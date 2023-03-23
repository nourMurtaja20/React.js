
import "../../resources/css/AddBlog.css"

let AddNewBlogPage = () => {
    return (
        <section className="section1">
            <div>
                <span className="div_span">Add new blog</span>
                <i className="label_i" class='bx bx-x'></i>
            </div>
            <form className="form1">
                <label class="label-file" for="file">
                    <input type="file" id="file" accept="image/*" />
                    <i className="div_i" class='bx bx-plus'></i>
                </label>
                <article className="form_article">
                    <div className="article_div">
                        <label for="name" className="div_label">Blog title</label>
                        <input className="input_name" type="text" placeholder="Blog name" />
                        <label for="name">Publisher name</label>
                        <input type="text" placeholder="Ex. Momen M. Reyad Sisalem" />
                        <label for="name">Category</label>
                        <select className="select1" id="CategoryName">
                            <option value="Development">Development</option>
                            <option value="Design">Design</option>
                            <option value="Medical">Medical</option>
                        </select>
                    </div>
                    <div>
                        <label className="label_desc" for="Description">Description</label>
                        <textarea className="textarea1" name="" id="" cols="30" rows="10" placeholder="Write the description"></textarea>
                    </div>
                </article>

                <div>
                    <input className="cancel" type="submit" value="Cancel" />
                    <input className="done" type="submit" value="Done" />
                </div>
            </form>
        </section>)
}
export default AddNewBlogPage;