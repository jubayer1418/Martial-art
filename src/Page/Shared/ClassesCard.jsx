import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const ClassesCard = ({ singleclass }) => {
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const {
    Available_Seats,
    Class_Image,
    Class_Name,
    Instructor_Name,
    Price,
    Instructor_Email,
    _id,
    total_seat,
  } = singleclass;

  const handleSelectClass = (email, id) => {
    axiosSecure
      .post(`/selectedclass`, {
        Available_Seats,
        Class_Image,
        Class_Name,
        Instructor_Name,
        Price,
        email,
        Instructor_Email,
        id,
        total_seat,
      })
      .then(() => {
        toast.success("Successfully selected class");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className={`${
        Available_Seats == 0
          ? " shadow-red-600 card group bg-red-300 mx-auto bg-opacity-60 shadow-2xl w-96  mb-8 "
          : "card w-96 bg-base-100 shadow-[#E0B573] shadow-2xl mb-8 mx-auto group"
      }`}
    >
      <figure className="px-10 pt-10">
        <img
          src={Class_Image}
          alt="Shoes"
          className="rounded-xl w-full object-top h-40  group-hover:opacity-70  group-hover:scale-150 transition   object-cover "
        />
      </figure>
      <div className="card-body items-center text-center">
        <p>Instructor : {Instructor_Name}</p>
        <h2 className="card-title">{Class_Name}</h2>
        <div className="flex justify-between w-full py-5">
          <p>Sets: {Available_Seats}</p>
          <p>Price: $ {Price}</p>
        </div>
        <div className="card-actions">
          {user ? (
            <button
              onClick={() => handleSelectClass(user?.email, _id)}
              className={` ${
                Available_Seats == 0
                  ? "btn-disabled btn  text-[#110C04]"
                  : "btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
              }`}
            >
              Add to class
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
            >
              Add to class
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
