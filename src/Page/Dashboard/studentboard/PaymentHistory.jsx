import { useQuery } from "react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useAuth();
  const { data: endrols } = useQuery({
    queryKey: ["endrolclasses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);

      return res?.data;
    },
  });
  console.log(endrols);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Class_Name</th>
            <th>Instructor_Name</th>
            <th>Price</th>
            <th>transactionId</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {endrols?.map((endrolclass, index) => (
            <tr key={endrolclass._id}>
              <th>{index + 1}</th>
              <td>{endrolclass.Class_Name}</td>
              <td>{endrolclass.Instructor_Name}</td>
              <td>{endrolclass.Price}</td>
              <td>{endrolclass.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
