import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { MultiStepContext } from "../../StepContex";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  // const [paymentSuccess, setPaymentSuccess] = useState(null);
  const { setCurrentStep, setUserData, userData } =
    useContext(MultiStepContext);

  const successPayment = (paymentMethod) => {
    const newUserData = { ...userData, paymentId: paymentMethod.id };

    fetch("https://enigmatic-sands-15274.herokuapp.com/membership", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setPaymentError(null);
          setUserData(newUserData);
          setCurrentStep(2);
        }
      })
      .catch((err) => {
        alert("ERROR !!! "+err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      console.log(error.message);
      setPaymentError(error.message);
    } else {
      successPayment(paymentMethod);
    }
  };

  return (
    <div>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <CardElement />
        <button
          type="submit"
          className="btn btn-success rounded mt-3"
          disabled={!stripe}
        >
          Submit Pay
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
    </div>
  );
};
