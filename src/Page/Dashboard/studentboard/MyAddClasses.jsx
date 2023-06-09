import { useQuery } from "react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Class from "./Class";

const MyAddClasses = () => {
  const { loading, user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["selectedclass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedclass?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(data);
  return (
    <div className="overflow-x-auto">
      {data?.map((myclass, index) => (
        <Class
          key={myclass._id}
          myclass={myclass}
          index={index}
          refetch={refetch}
        ></Class>
      ))}
    </div>
  );
};

export default MyAddClasses;
