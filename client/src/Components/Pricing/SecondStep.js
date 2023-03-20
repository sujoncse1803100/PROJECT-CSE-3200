import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MultiStepContext } from "../../StepContex";
import amax from "../../Image/credit-cards_amex.png";
import mastercard from "../../Image/credit-cards_mastercard.png";
import visa from "../../Image/credit-cards_visa.png";
import paypal from "../../Image/paypal.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import { PayPal } from "./PayPal";

const stripePromise = loadStripe(
  "pk_test_51JunwYGtjqsSIbse5lIZ8yWlaR9qXOpomVp3rNXMbUK5RoJlvK1ItTRnTKxH817Ryu2HF9vV0cuVI9YFN3eDP0Cb00eTkOz9sQ"
);

export const SecondStep = () => {
  const { setCurrentStep, userData } = useContext(MultiStepContext);
  const [creditCard, stCreditCard] = useState(false);
  const [payPal, setPayPal] = useState(false);
  const [payPalCkeckOut, setPayPalCheckOut] = useState(false);

  const handleCardRadioButton = (e) => {
    // if (e.target.value === "card") {
    //   setPayPal(false);
    //   stCreditCard(true);
    // } else if (e.target.value === "paypal") {
    //   stCreditCard(false);
    //   setPayPal(true);
    // }

    setCurrentStep(2);
  };

  return (
    <div>
      <div className="mt-3">
        <div>
          <div
            style={{ border: "1px solid gray" }}
            className="form-check p-5 mt-3 mb-3"
          >
            <div className="row">
              <div className="col-md-9">
                <input
                  style={{ width: "30px", height: "30px", color: "yellow" }}
                  className="form-check-input mt-3 me-3"
                  type="radio"
                  name="exampleRadios"
                  value="card"
                  onChange={handleCardRadioButton}
                />
                <label className="form-check-label mt-1">
                  <h1>Credit Card</h1>
                  <p>
                    Safe money transfer using your bank account, Visa, Mestro,
                    Discover, American Express
                  </p>
                </label>
              </div>
              <div className="col-md-3 d-flex mt-4">
                <img
                  style={{ width: "40px", marginRight: "10px", height: "30px" }}
                  src={mastercard}
                  alt=""
                />
                <img
                  style={{ width: "40px", marginRight: "10px", height: "30px" }}
                  src={visa}
                  alt=""
                />
                <img
                  style={{ width: "40px", marginRight: "10px", height: "30px" }}
                  src={amax}
                  alt=""
                />
              </div>
            </div>

            {creditCard && (
              <div className="mt-5">
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            )}
          </div>

          <div
            style={{ border: "1px solid gray" }}
            className="form-check p-5 mt-3 mb-3"
          >
            <div className="row">
              <div className="col-md-9">
                <input
                  style={{ width: "30px", height: "30px", color: "yellow" }}
                  className="form-check-input mt-3 me-3"
                  type="radio"
                  name="exampleRadios"
                  value="paypal"
                  onChange={handleCardRadioButton}
                />
                <label className="form-check-label">
                  <h1>PayPal</h1>
                  <p>
                    You will be redirect to PayPal website to complete your
                    perchase
                  </p>
                </label>
              </div>
              <div className="col-md-3 mt-4">
                <img src={paypal} alt="" />
              </div>
            </div>

            {payPal && (
              <div className="mt-5">
                {payPalCkeckOut ? (
                  <PayPal />
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setPayPalCheckOut(true);
                    }}
                  >
                    CheckOut
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="text-end">
          <button
            style={{ width: "150px" }}
            className="btn btn-secondary mt-3"
            onClick={() => setCurrentStep(0)}
          >
            <FontAwesomeIcon className="me-3" icon={faArrowLeft} />
            previous
          </button>
        </div>
      </div>
    </div>
  );
};
