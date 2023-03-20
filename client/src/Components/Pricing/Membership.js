import React, { useContext } from "react";
import { Footer } from "../Shared/Footer/Footer";
import { Header } from "../Shared/Header/Header";
import { Stepper, Step, StepLabel } from "@mui/material";
import { FirstStep } from "./FirstStep";
import { FinalStep } from "./FinalStep.js";
import { SecondStep } from "./SecondStep.js";
import { MultiStepContext } from "../../StepContex";

const UseerForm = () => {
  const { currentStep } = useContext(MultiStepContext);

  const showStep = (step) => {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <FinalStep />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="mt-5 mb-5 text-center">
        <Stepper
          className="w-75"
          style={{ margin: "0 auto" }}
          activeStep={currentStep}
          alternativeLabel
        >
          <Step>
            <StepLabel>Personal Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Bank Payment</StepLabel>
          </Step>
          <Step>
            <StepLabel>Membership Created</StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
    </div>
  );
};

export const Membership = () => {
  return (
    <div>
      <Header body="YOUR GYM MEMBERSHIP" />
      <UseerForm />
      <Footer />
    </div>
  );
};
