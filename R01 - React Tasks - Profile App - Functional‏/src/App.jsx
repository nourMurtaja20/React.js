import { Fragment } from "react";
import './resoursses/css/style.css';
import mainImg from './resoursses/images/650x264.png';
function App() {
    return <Fragment>
        <header>
            <h1>1920x400</h1>
        </header>
        <section>
            <aside>
                <div id="aside-avater"></div>
                <article>
                    <span className="test">User Name</span>
                    <span>MERN Full Stack Developer</span>
                    <span>my-email@mern-web.dev</span>
                    <span>+0970-599-1234-567</span>
                </article>
            </aside>
            <article>
                <span>User Name</span>
                <hr />
                <p id="pargraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <hr />
                <article>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                    <img src={mainImg} alt="this is image" />
                </article>
            </article>
        </section>
    </Fragment>
}
export default App;