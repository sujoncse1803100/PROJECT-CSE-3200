import React, { useContext, useState } from "react";
import { MultiStepContext } from "../../StepContex";
import congratulations from "../../Image/congratulations.jpg";

export const FinalStep = () => {
  const { userData, setUserData, setCurrentStep } =
    useContext(MultiStepContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitData = () => {
    console.log("data sumbitted");
    try {
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data);
            alert("something is going wrong");
          } else {
            alert("data submitted succefully");
            setIsSubmitted(true);
          }
        })
        .catch((err) => {
          console.log("error happened");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewMembership = () => {
    setCurrentStep(0);
    setUserData([]);
  };

  return (
    <div className="text-center">
      <div>
        <img style={{ borderRadius: "20px" }} src={congratulations} alt="" />
      </div>

      <div>
        <h3>Your Personal Information</h3>
        <div>
          <span>
            <b>Name : </b> {userData["name"]}
          </span>
          <br />
          <span>
            <b>Age : </b> {userData["age"]}
          </span>
          <br />
          <span>
            <b>Email : </b> {userData["email"]}
          </span>
          <br />
          <span>
            <b>Phone : </b> {userData["phone"]}
          </span>
          <br />
          <span>
            <b>Address : </b> {userData["address"]}
          </span>
          <br />
          {userData["paymentId"] && (
            <span>
              <b>Payment Id : </b> {userData["paymentId"]}
            </span>
          )}
          <br />
        </div>
      </div>

      <div>
        <button
          onClick={handleSubmitData}
          className={`btn btn-success mt-5 ${isSubmitted && "disabled"}`}
        >
          Submit your Data
        </button>
      </div>
      <button
        onClick={handleNewMembership}
        className={`btn btn-success mt-5 ${!isSubmitted && "disabled"}`}
      >
        Go for new membership
      </button>
    </div>
  );
};
