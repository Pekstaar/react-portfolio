import React from "react";

const MastHead = () => {
  return (
    <header className="masthead">
      {/* <!-- Masthead--> */}
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold slab">
              Hi <br />I am Eric Pekmah
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-l -8 align-self-baseline">
            <p className="text-white-75 mb-5 slab">
              A Kenyan based full-stack Developer <br />
              building optimal websites and android applications
            </p>
            <a className="btn btn-primary btn-xl" href="#about">
              More . . .
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MastHead;
