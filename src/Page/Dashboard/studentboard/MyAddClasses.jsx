import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";
import Class from "./Class";

const MyAddClasses = () => {
  const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT}`);

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
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg text-center mb-5">Payment</h3>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </form>
      </dialog>
    </div>
  );
};

export default MyAddClasses;
