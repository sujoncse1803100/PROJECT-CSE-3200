import React, { createContext, useState } from 'react'
import App from './App';

export const MultiStepContext = createContext();

export const StepContext = () => {
    const [currentStep,setCurrentStep] = useState(0);
    const [userData,setUserData] = useState([]);
    const [finalData,setFinalData] = useState(0);

    return (
        <MultiStepContext.Provider value={{currentStep,setCurrentStep,userData,setUserData,finalData,setFinalData}}>
            <App/>
        </MultiStepContext.Provider>
    )
}
