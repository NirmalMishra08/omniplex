// app/api/payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';


console.log("Payment API route initialized",process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
    apiVersion: '2025-07-30.basil',
});
export async function POST(req: NextRequest) {
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
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
