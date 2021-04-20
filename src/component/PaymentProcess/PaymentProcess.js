import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe(
  "pk_test_51IgNWBJh142BIunb1g0v0sIKxO4VYixoTP7Blwa764dMhUHsYpri2jzqt2LFYRnaVIDTC8lHUeUt8crKUOODhhym00VaeeHeMq"
);


const PaymentProcess = ({handlePayment}) => {

    return (
        <div >
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default PaymentProcess;