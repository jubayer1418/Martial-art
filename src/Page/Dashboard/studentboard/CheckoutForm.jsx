import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import "./Checkout.css";
// import { CardElement, useElements, useStripe } from "../../src";
const CheckoutForm = ({ enrollClass }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  // console.log(enrollClass?.Price);
  const [cardError, setCardError] = useState("");
  useEffect(() => {
    // if (bookingInfo?.price) {
    if (enrollClass?.Price) {
      axiosSecure
        .post("create-payment-intent", { price: enrollClass?.Price })
        .then((res) => {
          console.log(res.data.clienSecret);
          setClientSecret(res.data.clienSecret);
        });
    }
    // }
  }, [axiosSecure, enrollClass?.Price]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          transactionId: paymentIntent.id,
          date: new Date(),
          cheack: 2023,
        };
        axiosSecure
          .patch(`/selectedclass/${enrollClass?._id}`, { ...paymentInfo })
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              //
            }
          });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          type="submit"
          disabled={!stripe}
          className="btn bg-[#E0B573]  text-[#110C04] hover:text-white disabled hover:bg-[#ff9900]"
        >
          pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
