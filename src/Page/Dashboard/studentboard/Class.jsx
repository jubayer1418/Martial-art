import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Class = ({ myclass, index, refetch, handleClass }) => {
  const [axiosSecure] = useAxiosSecure();
  const { Available_Seats, Class_Name, Instructor_Name, Price, _id } = myclass;
  const handleDelete = (id) => {
    axiosSecure.delete(`/selectedclass/${id}`).then(() => refetch());
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{Class_Name}</td>
      <td>{Instructor_Name}</td>
      <td>{Price}</td>
      <td>{Available_Seats}</td>
      <td>
        <label
          onClick={() => handleClass(myclass)}
          htmlFor="my_modal_6"
          className="btn bg-[#E0B573]  text-[#110C04] hover:text-white disabled hover:bg-[#ff9900]"
        >
          enroll
        </label>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-[#d13434]  text-white disabled hover:bg-[#ff2617]"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default Class;
