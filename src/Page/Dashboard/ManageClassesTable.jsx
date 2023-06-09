import useAxiosSecure from "../../Hook/useAxiosSecure";
const ManageClassesTable = ({ singleclass, index, refetch }) => {
  console.log(index);
  const {
    Available_Seats,
    Class_Image,
    Class_Name,
    Instructor_Email,
    Instructor_Name,
    Price,
    Status,
    _id,
  } = singleclass;
  const handleid = (id) => {
    localStorage.setItem("id", id);
  };
  const [axiosSecure] = useAxiosSecure();
  const handleApprove = (id) => {
    axiosSecure.patch(`addclass/${id}?status=approve`).then(() => refetch());
  };
  const handleDeny = (id) => {
    axiosSecure.patch(`addclass/${id}?status=deny`).then(() => refetch());
  };
  return (
    <div className="overflow-x-auto">
      <table className="table text-lg">
        {/* head */}
        <thead>
          <tr className="text-sm">
            <th></th>
            <th>Class Image - Class name - Instructor email</th>
            <th>Instructor name</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>{index + 1}</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-20 h-16">
                    <img
                      src={Class_Image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{Class_Name}</div>
                  <div className="text-sm opacity-50">
                    Email: {Instructor_Email}
                  </div>
                </div>
              </div>
            </td>
            <td className="font-semibold text-xl">{Instructor_Name}</td>
            <td>{Available_Seats}</td>
            <td>{Price}</td>
            <td className="badge badge-accent mt-8">{Status}</td>
            <th>
              <button
                onClick={() => handleApprove(_id)}
                className={`${
                  Status === "deny"
                    ? " btn-disabled btn"
                    : "btn bg-[#E0B573]  text-[#110C04] hover:text-white disabled hover:bg-[#ff9900]"
                } `}
              >
                Approve
              </button>
            </th>
            <th>
              <button
                onClick={() => handleDeny(_id)}
                className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
              >
                Deny
              </button>
            </th>
            <th onClick={() => handleid(_id)}>
              <button
                onClick={() => window.my_modal_3.showModal()}
                className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
              >
                feedback
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageClassesTable;
