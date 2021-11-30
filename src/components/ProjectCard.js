import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, description, title, languages, id }) => {
  return (
    <>
      {/* card */}
      <div className="bg-dark shadow p-1 px-lg-3 w-9/12 md:w-11/12 lg:w-auto mx-auto flex flex-col justify-content-between">
        {/* title */}
        <h6 className="title slab text-yellow-600 text-center text-uppercase w-full">
          {title && title.length > 18
            ? `${title.substring(0, 18)}. . .`
            : title}
        </h6>
        <img
          src={image}
          alt=""
          width="100%"
          style={{ objectFit: "cover", height: "200px" }}
        />

        {/* description */}
        <div className="" style={{ height: "160px", overflow: "hidden" }}>
          <p className="description text-sm slab ">{description}</p>
        </div>
        <ul className="card-footer  slab text-yellow-700 grid grid-cols-3 gap-1">
          {languages && languages.map((l, i) => <li key={i}>{l}</li>)}
        </ul>

        {/* buttons */}
        <div className="view text-center">
          <Link to={`/project/${id}`}>
            <i className="bi bi-eye-fill text-2xl"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
