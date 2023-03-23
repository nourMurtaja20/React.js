import { Fragment } from "react"
import "../resources/css/Header.css"
import "../resources/css/BlogDetails.css"
import "../resources/css/JoinUs.css"
import mainImg from"../resources/images/img1.png"
let BlogDetailsPage = () => {
    return (<Fragment>
        <section class="section1">
            <header>
                <span>BLOGS</span>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#trendy">Trendy blogs</a></li>
                        <li><a href="#">Categories</a></li>
                    </ul>
                </nav>
                <button><a href="#join-us">Join Us</a></button>
            </header>
            <p>Lt's Find The Best Trendy Blogs To Read.</p>
        </section>
        <section class="content-wrapar">
            <section class="section2">
                <aside class="aside-column">
                    <figure>
                        <img src={mainImg} alt="" />
                    </figure>
                    <span>Blog Name: <text>The Principles of Design</text></span>
                    <span>Blog Category: <text>Design</text></span>
                    <span>Posted By: <text>Asmaa M.</text> </span>
                    <span>Post Date: <text>28.9.2022</text></span>
                </aside>
                <article class="article-column">
                    <p>It’s Time to Code, Improve Your Coding Skills And Get Jobs</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed </p>

                </article>
            </section>
            <section class="section3">
                <span>It’s Time to Code, Improve Your Coding Skills And Get Jobs</span>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                </p>
                <p> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore.</p>
            </section>
        </section>
        <section class="section4">
            <span>Related blogs</span>
            <hr />
            <section class="section4-row">
                <article class="article4-column">
                    <section>
                        <span>Design</span>
                        <span>SEPTEMBER 28,2022</span>
                    </section>
                    <span>It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erea.</p>
                </article>
                <figure>
                    <img src="images/img5.png" alt="" />
                </figure>
            </section>
            <hr />
            <section class="section4-row">
                <article class="article4-column">
                    <section>
                        <span>Design</span>
                        <span>SEPTEMBER 28,2022</span>
                    </section>
                    <span>It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erea.</p>
                </article>
                <figure>
                    <img src="images/img6.png" alt="" />
                </figure>
            </section>
        </section>
        <section class="sectionjoin-us" id="join-us">
            <span>Join Us</span>
            <p>We Post New Blogs Everyday, Join Us</p>
            <form>
                <input type="text" placeholder="Enter your email" />
                <button type="submit">Join Us</button>
            </form>
        </section>
    </Fragment>)
}
export default BlogDetailsPage;