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
      {classes?.map((singleclass) => (
        <MyClassesTable
          key={singleclass._id}
          singleclass={singleclass}
        ></MyClassesTable>
      ))}
    </div>
  );
};

export default MyClasses;
