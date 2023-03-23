import { Fragment } from "react";
import "../resources/css/style.css"
import "../resources/css/Header.css"
import "../resources/css/JoinUs.css"
import "../resources/css/Categories.css"

let CategoriesPage = () => {
    return (<Fragment>
        <section class="section1">
            <header>
                <span>BLOGS</span>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#trendy">Trendy blogs</a></li>
                        <li><a href="#categories">Categories</a></li>
                    </ul>
                </nav>
                <button><a href="#join-us">Join Us</a></button>
            </header>
            <p>Lt's Find The Best Trendy Blogs To Read.</p>
        </section>
        <section class="content-wrapar">
            <section class="section-categories" id="categories">
                <button>All</button>
                <button>Development</button>
                <button>Design</button>
                <button>Medical</button>
                <button>Motion</button>
                <button>Marketing</button>
                <button>Accounting</button>
            </section>
            <section class="section-row">
                <article class="article-column">
                    <section>
                        <span>Development</span>
                        <span>SEPTEMBER 28,2022</span>
                    </section>
                    <span>It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erea.</p>
                </article>
                <figure>
                    <img src="images/img1.png" alt="" />
                </figure>
            </section>
            <hr />
            <section class="section-row">
                <article class="article-column">
                    <section>
                        <span>Development</span>
                        <span>SEPTEMBER 28,2022</span>
                    </section>
                    <span>It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erea.</p>
                </article>
                <figure>
                    <img src="images/img2.png" alt="" />
                </figure>
            </section>
            <hr />
            <section class="section-row">
                <article class="article-column">
                    <section>
                        <span>Development</span>
                        <span>SEPTEMBER 28,2022</span>
                    </section>
                    <span>It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erea.</p>
                </article>
                <figure>
                    <img src="images/img3.png" alt="" />
                </figure>
            </section>
            <hr />
            <section class="section-row">
                <article class="article-column">
                    <section>
                        <span>Development</span>
                        <span>SEPTEMBER 28,2022</span>
                    </section>
                    <span>It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erea.</p>
                </article>
                <figure>
                    <img src="images/img4.png" alt="" />
                </figure>
            </section>
            <hr />
            <section class="section-row">
                <article class="article-column">
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
            <section class="section-row">
                <article class="article-column">
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
            <hr />
            <section class="section-row">
                <article class="article-column">
                    <section>
                        <span>Design</span>
                        <span>SEPTEMBER 28,2022</span>
                    </section>
                    <span>It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erea.</p>
                </article>
                <figure>
                    <img src="images/img7.png" alt="" />
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
    </Fragment>);
}
export default CategoriesPage;