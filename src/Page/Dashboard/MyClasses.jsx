import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import MyClassesTable from "./MyClassesTable";

const MyClasses = () => {
  const { user } = useAuth();

  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes } = useQuery({
    queryKey: ["addclass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/addclass?email=${user?.email}`);
      console.log(res.data);
      return res?.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr className="text-sm">
              <th>Class name</th>

              <th>Available seats</th>
              <th>Price</th>
              <th>Total Enrolled Students</th>
              <th>Status</th>
              <th>Update</th>
              <th> Feedback For Admin </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes?.map((singleclass) => (
              <MyClassesTable
                key={singleclass._id}
                singleclass={singleclass}
              ></MyClassesTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
