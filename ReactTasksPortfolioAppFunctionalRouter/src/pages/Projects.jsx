import { Fragment } from "react";
import Project from "../components/Project";
import ThirdImage from "../resources/img/3.jpg";
import SecondImage from "../resources/img/2.jpg";

let Projects = () => {
  return (
    <Fragment>
      <div className="cover-page">
        <div className="tit">
          <h1>Project</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" className="active">
                project
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section id="project">
        <div className="flex project pt-30">
          <Project title="Title can be here" image={SecondImage} />
          <Project title="Title can be here" image={ThirdImage} />
          <Project title="Title can be here" image={SecondImage} />
        </div>
        <div className="flex project pt-30">
          <Project title="Title can be here" image={SecondImage} />
          <Project title="Title can be here" image={ThirdImage} />
          <Project title="Title can be here" image={SecondImage} />
        </div>
        <div className="flex project pt-30">
          <Project title="Title can be here" image={SecondImage} />
          <Project title="Title can be here" image={ThirdImage} />
          <Project title="Title can be here" image={SecondImage} />
        </div>
        <div className="flex project pt-30">
          <Project title="Title can be here" image={SecondImage} />
          <Project title="Title can be here" image={ThirdImage} />
          <Project title="Title can be here" image={SecondImage} />
        </div>
        <div className="flex project">
          <Project title="Title can be here" image={SecondImage} />
          <Project title="Title can be here" image={ThirdImage} />
          <Project title="Title can be here" image={SecondImage} />
        </div>
      </section>
    </Fragment>
  );
};
export default Projects;
