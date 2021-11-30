import { doc, getDoc } from "@firebase/firestore";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { db } from "../Firebase";

const Project = () => {
  const params = useParams();

  const [project, setProject] = React.useState({});

  React.useEffect(() => {
    const getProjects = async () => {
      const docRef = doc(db, "projects", params.id);
      const docSnap = await getDoc(docRef);

      setProject({ ...docSnap.data() });
    };

    getProjects();
  }, [params.id]);

  return (
    <div class="bg-dark" id="">
      <div class="container-fluid p-0">
        <div className=" px-4 py-5 relative">
          <Link className="absolute right-0" to="/">
            <i className="bi bi-arrow-left text-5xl btn btn-primary font-bold mx-3 h-10"></i>
          </Link>
          <h4 className="mb-4 text-uppercase text-gray-100 font-bold">
            View Project
          </h4>
          <h5 className="text-white slab ">Project name: {project.title}</h5>

          <a href={project.link && project.link}>
            {project.link && project.link}
          </a>

          <div className="text-white">
            <h5 className="mr-2">descritption: </h5>
            {project.description}
          </div>

          <div id="portfolio" className=" container-fluid">
            <div class="row g-0 mt-4">
              {project.images &&
                project.images.map((i) => (
                  <div class="col-lg-4 col-sm-6 my-1">
                    <a class="portfolio-box" href={i} title={project.title}>
                      <img class="img-fluid" src={i} alt="..." />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
