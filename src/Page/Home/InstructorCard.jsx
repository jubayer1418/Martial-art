const InstructorCard = ({ singleUser }) => {
  return (
    <div className="card mx-auto w-96 glass overflow-hidden relative transition duration-200 transform hover:-translate-y-4 rounded shadow-lg hover:shadow-2xl m-auto h-96">
      <figure>
        <img src={singleUser?.img} alt="Movie" />
      </figure>
      <div className="card-body  bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col items-center ">
        <h2 className="card-title">{singleUser.name}</h2>
        <p>{singleUser.email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
