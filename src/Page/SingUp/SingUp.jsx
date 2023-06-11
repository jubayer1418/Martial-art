import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Google from "../Shared/Google";
const SingUp = () => {
  const [err, setErr] = useState("");
  const { Register, updateUserProfile, setLoading } = useContext(AuthContext);

  const navigete = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password, img, name, confirm_password }) => {
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setErr(
        " least one alphabetical character,one numeric digit,special character ,at least 8 characters "
      );
      return;
    }
    if (password !== confirm_password) {
      setErr("password does not macth");
      return;
    }
    const image = img[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        Register(email, password)
          .then((result) => {
            updateUserProfile(name, imageUrl)
              .then(() => {
                navigete("/");
                setLoading(false);
                const role = "student";
                const img = result.user.photoURL;
                const saveUser = { name, email, role, img };
                fetch(`${import.meta.env.VITE_SERVER_LINK}/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then(() => {})
                  .catch((err) => {
                    setLoading(false);
                    console.log(err.message);
                  });
                console.log(result.user);
              })
              .catch((err) => {
                setLoading(false);
                setErr(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            setErr(err.message);
          });
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 py-40">
        {err && (
          <h1 className="text-red-600 absolute text-xl  w-72 top-14">{err} </h1>
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("img", { required: true })}
                  type="file"
                  placeholder="img"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                <input
                  {...register("password", { required: true })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirm_password", { required: true })}
                  type="text"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value={"signup"}
                  className="btn  bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
                />
              </div>
              <div className="text-[#110C04]">
                <small>
                  Already have an account?
                  <Link className="underline" to="/login">
                    Login
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

export default SingUp;
