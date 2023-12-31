import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyClassesTable = ({ singleclass }) => {
  const { Available_Seats, Class_Name, Price, Status, _id, endrol } =
    singleclass;
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useAuth();
  const { data } = useQuery({
    queryKey: ["feedback"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback`);

      return res?.data;
    },
  });
  const feedbacks = data?.find((feedback) => feedback.id == _id);
  console.log("akfj", feedbacks?.text);

  return (
    <tr>
      <td className="text-xl w-full font-semibold ">{Class_Name}</td>

      <th>{Available_Seats}</th>
      <th>{Price}</th>
      <th>{endrol ? endrol : 0}</th>
      <td className="badge badge-accent mt-6">{Status}</td>

      <th
      // onClick={() => handleid(_id)}
      >
        <Link
          to={`updateclass/${_id}`}
          className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
        >
          Update class
        </Link>
      </th>
      <td title={feedbacks?.text} className="truncate">
        <p className="overflow-auto w-96 "> {feedbacks?.text}</p>
      </td>
    </tr>
  );
};

export default MyClassesTable;
