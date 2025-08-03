// components/CheckoutButton.tsx
'use client';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton() {
    const[isloading, setLoading] = React.useState(false);
    const handleCheckout = async () => {
        setLoading(true);
        const res = await fetch('/api/payment', {
            method: 'POST',
        });


        const data = await res.json();
        const stripe = await stripePromise;
        console.log("Stripe session data:", data);


        await stripe?.redirectToCheckout({ sessionId: data.id });
        setLoading(false);
    };

    return <button onClick={handleCheckout}>{isloading?<div className='loader'></div>:"Buy Pro Plan - $10"} </button>;
}
