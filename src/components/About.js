import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import firebase from "../assets/firebase.png";
import native from "../assets/native.png";

const About = () => {
  return (
    <section class="page-section bg-primary" id="about">
      {/* <!-- About--> */}
      <div class="container text-center">
        <h2 class="text-white mt-0">Got what you need!</h2>
        <hr class="divider divider-light" />
        <div className="row justify-content-center">
          {/* html */}
          <div className="avata col-md-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}
            <img
              className="border border-light border-2 rounded-circle"
              src={html}
              alt="html"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">Html-5</h5>
          </div>

          {/* csss */}
          <div className="avata col-lg-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}
            <img
              className="border border-light border-2 rounded-circle"
              src={css}
              alt="css"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">Css</h5>
          </div>

          {/* firebase */}
          <div className="avata col-lg-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}

            <img
              className="border border-light border-2 rounded-circle"
              src={firebase}
              alt="firebase"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">Firebase</h5>
          </div>

          {/* native */}
          <div className="avata col-lg-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}
            <img
              className="border border-light border-2 rounded-circle"
              src={native}
              alt="native"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">React native</h5>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* react */}
          <div className="avata col-lg-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}
            <img
              className="border border-light border-2 rounded-circle"
              src={react}
              alt="react"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">React-Js</h5>
          </div>

          {/* expresss */}
          <div className="avata col-lg-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}
            <img
              className="border border-light border-2 rounded-circle"
              src={express}
              alt="express"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">Express-Js</h5>
          </div>

          {/* nodejs */}
          <div className="avata col-lg-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}
            <img
              className="border border-light border-2 rounded-circle"
              src={node}
              alt="node"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">Node-Js</h5>
          </div>

          {/* Mongodb */}
          <div className="avata col-lg-3 col-sm-4 col-6 py-3 d-flex flex-column align-items-center gap-4">
            {/* image */}
            <img
              className="border border-light border-2 rounded-circle"
              src={mongo}
              alt="mongo"
              srcset=""
            />

            {/* text */}
            <h5 className="slab text-uppercase text-light">Mongo-db</h5>
          </div>
        </div>

        {/* others */}
        <div className="row slab gap-3">
          <h5 className="text-light text-capitalize">
            Others: Php, Laravel, Python, Java
          </h5>
        </div>
      </div>
    </section>
  );
};

export default About;
