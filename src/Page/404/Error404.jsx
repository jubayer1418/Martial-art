/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";
const Error404 = () => {
  const { error } = useRouteError();
  return (
    <div>
      <p className="text-2xl font-semibold md:text-3xl text-indigo-600 mb-8 text-center py-9">
        {error?.message}
      </p>

      <iframe
        className="h-96 w-full"
        src="https://embed.lottiefiles.com/animation/84918"
      ></iframe>
      <div className=" text-center">
        {" "}
        <Link to="/" className="btn-primary btn ">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Error404;
