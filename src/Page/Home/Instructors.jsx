import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const { loading, user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <>
      <SectionTitle title={"Popular Instructors"}></SectionTitle>
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-10 mx-auto">
        {users?.map((singleUser) => (
          <InstructorCard
            user={user}
            key={singleUser._id}
            singleUser={singleUser}
          ></InstructorCard>
        ))}
      </div>
    </>
  );
};

export default Instructors;
