import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    setProjects([]);
    const getItems = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setProjects((prev) => [...prev, doc.data()]);
      });
    };

    getItems();
  }, []);

  return (
    <section className="page-section bg-dark text-white">
      {/* <!-- projects --> */}
      <div className="container-md px-4 ">
        <h4 className="mb-4 text-uppercase underline">Projects</h4>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3">
          {projects &&
            projects.map((p) => (
              <ProjectCard
                image={p.images[0]}
                description={p.description}
                title={p.title}
                languages={p.languages}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
