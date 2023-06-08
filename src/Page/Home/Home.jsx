import { Link } from "react-router-dom";
import BannerSlider from "./BannerSlider";
import Classes from "./Classes";
import Instructors from "./Instructors";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <Classes></Classes>
      <Instructors></Instructors>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1>what is your category</h1>
          <Link to={"dashboard/Student"} className="btn btn-warning">
            Are you Student
          </Link>
          <Link to={"dashboard/instructor"} className="btn btn-success ml-8">
            Are you instructor
          </Link>
        </form>
      </dialog>
    </div>
  );
};

export default Home;
