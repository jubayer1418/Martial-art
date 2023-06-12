import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAdmin from "../../Hook/useCategory";
const AddClasses = () => {
  const navigate = useNavigate();
  const [isCategory] = useAdmin();
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
          .post("/addclass", { ...data, total_seat: data.Available_Seats })
          .then((res) => {
            console.log(res);
            toast.success("Successfully add class");
            reset();
            navigate("/dashboard/myclasses");
          })
          .catch((err) => {
            console.log(err);
            toast.error(err);
          });
      });

    // fetch(`${import.meta.env.VITE_SERVER_LINK}/addclass`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(instrctor),
    // })
    //   .then((res) => {
    //     console.log(res);
    //     reset();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
                value={isCategory?.name}
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
                value={isCategory?.email}
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
            <input
              type="submit"
              value={" Add classes"}
              className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddClasses;
