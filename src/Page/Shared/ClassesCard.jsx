const ClassesCard = ({ singleclass }) => {
  const {
    Available_Seats,
    Class_Image,
    Class_Name,
    Instructor_Email,
    Instructor_Name,
    Price,
    Status,
  } = singleclass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-8 mx-auto group">
      <figure className="px-10 pt-10">
        <img
          src={Class_Image}
          alt="Shoes"
          className="rounded-xl h-40  group-hover:opacity-70  group-hover:scale-125 transition   object-cover "
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
          <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
            Add to class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
