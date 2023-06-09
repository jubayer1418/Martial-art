import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import MyClassesTable from "./MyClassesTable";

const MyClasses = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/addclass`);
      console.log(res.data);
      return res.data;
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
