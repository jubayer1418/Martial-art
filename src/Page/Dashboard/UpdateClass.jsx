import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const UpdateClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const params = useParams();
  console.log(params);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axiosSecure
      .put(`addclass/${params.id}`, data)
      .then((res) => {
        console.log(res);
        reset();
        navigate("/dashboard/myclasses");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
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
                type="url"
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
                value={isAdmin?.name}
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
                value={isAdmin?.email}
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
                placeholder="Price"
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