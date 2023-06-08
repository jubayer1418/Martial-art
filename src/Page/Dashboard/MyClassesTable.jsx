const MyClassesTable = ({ singleclass }) => {
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
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>seet</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={Class_Image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{Class_Name}</div>
                  <div className="text-sm opacity-50">{Instructor_Email}</div>
                </div>
              </div>
            </td>
            <td>{Instructor_Name}</td>
            <td>{Status}</td>
            <td>{Available_Seats}</td>
            <td>{Price}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyClassesTable;
