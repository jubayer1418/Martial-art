const MyClassesTable = ({ singleclass, index }) => {
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
            <th>{index + 1}</th>
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
              <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
                Approve
              </button>
            </th>
            <th>
              <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
                Deny
              </button>
            </th>
            <th>
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

export default MyClassesTable;
