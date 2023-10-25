import { NextResponse, NextRequest } from "next/server";
const Stripe = require('stripe')
const stripe = Stripe((`${process.env.STRIPE_SECRET_KEY}`))

export async function POST(request: NextRequest) {
    let data = await request.json();
    let piece = data.piece
    const product = await stripe.products.create({
        name: piece.title,
        images: ['https://images.unsplash.com/photo-1580493113011-ad79f792a7c2?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
    });
    const price = await stripe.prices.create({
        product: product.id,
        currency: "gbp",
        unit_amount: piece.price.valueOf() * 100,
    });
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: price.id,
                quantity: 1,
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000',
    })
    return NextResponse.json(session.url)
}