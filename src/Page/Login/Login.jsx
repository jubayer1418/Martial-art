/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Google from "../Shared/Google";
const Login = () => {
  const emailRef = useRef();
  const [err, setErr] = useState("");
  const navigete = useNavigate();
  const [showpass, setShowpass] = useState("password");
  const { SingIn, resetPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) =>
    SingIn(email, password)
      .then((result) => {
        result.user;
        navigete("/");
      })
      .catch((err) => {
        setErr(err.message);
      });
  const handleReset = (email) => {
    resetPassword(email)
      .then(() => {})
      .catch((err) => {
        setErr(err.message);
      });
  };
  return (
    <>
      <div className="hero min-h-[600px] bg-base-200">
        {err && (
          <h1 className="text-red-600 absolute text-2xl  top-44">{err} </h1>
        )}
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <iframe
              className="h-96 w-96"
              src="https://embed.lottiefiles.com/animation/68312"
            ></iframe>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {showpass == "password" ? (
                  <FaRegEye
                    onClick={() => setShowpass("text")}
                    className="absolute right-14 top-44 cursor-pointer"
                  ></FaRegEye>
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setShowpass("password")}
                    className="absolute right-14 top-44 cursor-pointer"
                  ></FaRegEyeSlash>
                )}

                <input
                  {...register("password", { required: true })}
                  type={showpass}
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <button
                    onClick={(e) => handleReset(e.target.form[0].value)}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
                  Login
                </button>
              </div>
              <div className="text-[#110C04]">
                <small>
                  New Here?
                  <Link className="underline" to="/singup">
                    Create an account
                  </Link>
                </small>
              </div>
              <Google></Google>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
