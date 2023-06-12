import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import InstructorCard from "../Home/InstructorCard";
import SectionTitle from "../Shared/SectionTitle";
const Allinstructors = () => {
  const { loading, user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allusers?role=instructor`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <Helmet>
        <title>AllInstructor | The Martial Art</title>
      </Helmet>
      <SectionTitle title={"Popular Instructors"}></SectionTitle>
      <div className="grid lmd:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto">
        {users?.map((singleUser) => (
          <InstructorCard
            user={user}
            key={singleUser._id}
            singleUser={singleUser}
          ></InstructorCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Allinstructors;
