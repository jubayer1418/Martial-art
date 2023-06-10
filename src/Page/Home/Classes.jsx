import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import ClassesCard from "../Shared/ClassesCard";
import SectionTitle from "../Shared/SectionTitle";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useAuth();
  const { data: classes } = useQuery({
    queryKey: ["addclasses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/addclasses`);

      return res?.data;
    },
  });
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_SERVER_LINK}/addclasses`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClasses(data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="my-10">
      <SectionTitle title={"Popular Classes"}></SectionTitle>
      <div className="grid grid-cols-3 w-[70%] mx-auto ">
        {classes?.map((singleclass) => (
          <ClassesCard
            key={singleclass._id}
            singleclass={singleclass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
