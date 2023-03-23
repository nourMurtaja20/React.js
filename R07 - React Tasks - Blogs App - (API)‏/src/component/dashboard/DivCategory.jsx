let DivCategory = (props) => {
    return (
        <div class="div-design">
            <span>{props.category.name}<i class='bx bx-trash'></i></span>
            <span>Blog No.</span>
            <span><i class='bx bx-check-circle'></i> 23 Blog</span>
        </div>);
}
export default DivCategory;