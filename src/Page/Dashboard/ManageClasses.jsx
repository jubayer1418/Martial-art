import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import MyClassesTable from "./MyClassesTable";

const ManageClasses = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/addclass`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <>
      <div>
        {classes.map((singleclass, index) => (
          <MyClassesTable
            key={singleclass._id}
            index={index}
            singleclass={singleclass}
          ></MyClassesTable>
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
            className="textarea textarea-bordered w-full h-40"
            placeholder="Feedback"
          ></textarea>
        </form>
      </dialog>
    </>
  );
};

export default ManageClasses;
