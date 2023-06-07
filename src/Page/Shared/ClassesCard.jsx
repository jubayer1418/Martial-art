import img from "../../assets/classes.webp";
const ClassesCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-40" />
      </figure>
      <div className="card-body items-center text-center">
        <p>Instructor : jubayer</p>
        <h2 className="card-title">KIDS KARATE GROUP</h2>
        <div className="flex justify-between w-full py-5">
          <p>Sets:</p>
          <p>Price:</p>
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
