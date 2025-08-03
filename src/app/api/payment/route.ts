// app/api/payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    console.error('STRIPE_SECRET_KEY is not defined');
    return NextResponse.json({ error: 'Stripe configuration error' }, { status: 500 });
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2025-07-30.basil', // Use valid version. Do not use made-up versions like '2025-07-30.basil'
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Pro Plan' },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: any) {
    console.error('Stripe session error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
