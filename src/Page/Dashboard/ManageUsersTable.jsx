const ManageUsersTable = ({ user, index }) => {
  const { name, email } = user;
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
              <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
                Deny
              </button>
            </td>
            <td>
              <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
                Deny
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsersTable;
