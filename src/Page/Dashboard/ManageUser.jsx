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
      const res = await axiosSecure.get(`/users`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="w-[90%]">
      {users?.map((user, index) => (
        <ManageUsersTable
          key={user._id}
          index={index}
          user={user}
          refetch={refetch}
        ></ManageUsersTable>
      ))}
    </div>
  );
};

export default ManageUser;
