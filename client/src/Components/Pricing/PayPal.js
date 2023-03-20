import React, { useEffect, useRef } from "react";

export const PayPal = () => {
  const paypal = useRef();

  useEffect(()=>{
    window.paypal.Buttons({
        createOrder:(data,action,err)=>{
            return action.order.create({
                intent:'PURCHASE',
                purchase_units:[
                    {
                        description:'Cool looking table',
                        amount:{
                            currency_code:'USD',
                            value:500.00
                        }
                    }
                ]
            })
        },
        onApprove: async (data,actions)=>{
            const order = await actions.order.capture();
            console.log("Successful order : ",order);
        },
        onErr: async err =>{
            console.log('Error to purchase : ',err);
        }
    }).render(paypal.current);
  },[]);


  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};
