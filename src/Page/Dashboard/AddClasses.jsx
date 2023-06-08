import { useForm } from "react-hook-form";
const AddClasses = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100"
        >
          <div className="card-body grid grid-cols-2">
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
              Add classes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddClasses;
