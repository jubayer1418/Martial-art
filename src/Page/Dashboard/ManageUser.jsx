import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import ManageUsersTable from "./ManageUsersTable";

const ManageUser = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/useramin`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="w-[80%]">
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
            {users?.map((user, index) => (
              <ManageUsersTable
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></ManageUsersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
