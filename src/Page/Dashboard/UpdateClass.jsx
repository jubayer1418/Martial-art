import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const UpdateClass = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const image = data.Class_Image[0];
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
        data.Class_Image = imageData.data.display_url;
        axiosSecure
          .put(`addclass/${params.id}`, data)
          .then((res) => {
            console.log(res);
            reset();
            toast.success("Successfully update");
            navigate("/dashboard/myclasses");
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <h1 className="absolute top-48 text-2xl text-red-600">
        all input full fill
      </h1>
      <div className="hero-content">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0  shadow-2xl bg-base-100"
        >
          <div className="card-body grid grid-cols-2 py-28 px-20">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                {...register("Class_Name", { required: true })}
                type="text"
                placeholder="Class Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input
                {...register("Class_Image", { required: true })}
                type="file"
                placeholder="Class Image"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                {...register("Instructor_Name", { required: true })}
                type="text"
                value={user?.displayName}
                placeholder="Instructor name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                {...register("Instructor_Email", { required: true })}
                type="text"
                value={user?.email}
                placeholder="Instructor email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                {...register("Available_Seats", { required: true })}
                type="number"
                placeholder="Available seats"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("Price", { required: true })}
                type="number"
                placeholder="$ Price"
                className="input input-bordered"
              />
              <input
                {...register("Status")}
                defaultValue={"pending"}
                type="text"
                className="input input-bordered hidden"
              />
            </div>
          </div>
          <div className="form-control   text-center">
            <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
              update class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateClass;
