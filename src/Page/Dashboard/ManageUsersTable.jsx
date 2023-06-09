import useAxiosSecure from "../../Hook/useAxiosSecure";
const ManageUsersTable = ({ user, index, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { name, email, _id, role } = user;
  const handleInstructor = (id) => {
    axiosSecure
      .patch(`/users/admin/${id}?role=instructor`)
      .then(() => refetch());
  };
  const handleAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}?role=admin`).then(() => refetch());
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>{index + 1}</td>
            <td className="w-1/3">{name}</td>
            <td className="w-1/3">{email}</td>
            <td>
              <button
                onClick={() => handleInstructor(_id)}
                className={`${
                  role === "instructor"
                    ? " btn-disabled btn"
                    : "btn bg-[#E0B573]  text-[#110C04] hover:text-white disabled hover:bg-[#ff9900]"
                } `}
              >
                Make Instructor
              </button>
            </td>
            <td>
              <button
                onClick={() => handleAdmin(_id)}
                className={`${
                  role === "admin"
                    ? " btn-disabled btn"
                    : "btn bg-[#E0B573]  text-[#110C04] hover:text-white disabled hover:bg-[#ff9900]"
                } `}
              >
                Make Admin
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsersTable;
