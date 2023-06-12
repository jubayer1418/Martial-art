import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import ClassesCard from "../Shared/ClassesCard";
import SectionTitle from "../Shared/SectionTitle";
const AllClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useAuth();
  const { data: classes } = useQuery({
    queryKey: ["addclasses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allclasses`);

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
    <motion.div
      initial={{ opacity: 1, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <Helmet>
        <title>AllClass | The Martial Art</title>
      </Helmet>
      <SectionTitle title={"Popular Classes"}></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto ">
        {classes?.map((singleclass) => (
          <ClassesCard
            key={singleclass._id}
            singleclass={singleclass}
          ></ClassesCard>
        ))}
      </div>
    </motion.div>
  );
};

export default AllClass;
