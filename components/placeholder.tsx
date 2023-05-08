import { NextPage } from "next";

const Placeholder: NextPage = () => {
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <h1 className="placeholder-glow">
              <span className="placeholder col-12"></span>
              <span className="placeholder col-7"></span>
            </h1>
            <p className="placeholder-glow mt-1">
              <span className="placeholder col-6"></span>
            </p>

            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="360"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>

            <p className="placeholder-glow mt-5">
              <span className="placeholder col-12"></span>
              <span className="placeholder col-12"></span>
              <span className="placeholder col-12"></span>
              <span className="placeholder col-12"></span>
              <span className="placeholder col-8"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placeholder;
