import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useQuery } from "react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";
import Class from "./Class";
const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT}`);
const MyAddClasses = () => {
  const { loading, user } = useAuth();
  const [enrollClass, setenrollClass] = useState();

  const [axiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["selectedclass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedclass?email=${user?.email}`);

      return res?.data;
    },
  });
  const handleClass = (enroll) => {
    setenrollClass(enroll);
  };
  // console.log(data);
  return (
    <>
      <div className="overflow-x-auto">
        {data?.map((myclass, index) => (
          <Class
            key={myclass._id}
            myclass={myclass}
            index={index}
            refetch={refetch}
            handleClass={handleClass}
          ></Class>
        ))}
      </div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <Elements stripe={stripePromise}>
            <CheckoutForm enrollClass={enrollClass} />
          </Elements>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAddClasses;
