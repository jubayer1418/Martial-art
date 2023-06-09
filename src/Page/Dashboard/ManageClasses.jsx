import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import ManageClassesTable from "./ManageClassesTable";

const ManageClasses = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes, refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/addclass`);
      console.log(res.data);
      return res.data;
    },
  });
  const handleFeedback = (e) => {
    const text = e.form[1].value;
    const id = localStorage.getItem("id");

    axiosSecure.post(`/feedback`, { text, id }).then(() => {
      localStorage.removeItem("id");
    });
  };
  return (
    <>
      <div>
        {classes?.map((singleclass, index) => (
          <ManageClassesTable
            key={singleclass._id}
            index={index}
            refetch={refetch}
            singleclass={singleclass}
          ></ManageClassesTable>
        ))}
      </div>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg text-center py-5">Your Feddback!</h3>
          <textarea
            name="textarea"
            className="textarea textarea-bordered w-full h-40"
            placeholder="Feedback"
          ></textarea>
          <button
            onClick={(e) => handleFeedback(e.target)}
            className="btn  bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
          >
            feedback
          </button>
        </form>
      </dialog>
    </>
  );
};

export default ManageClasses;