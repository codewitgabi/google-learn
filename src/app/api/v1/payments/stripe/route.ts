import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const origin = `${protocol}://${host}`;

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      customer_email: "customer@example.com",
      submit_type: "pay",
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "NG"],
      },
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of
          // the product you want to sell
          price: "price_1QnHBMFSOLqAjeuUYZZuCBE6",
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: origin,
      automatic_tax: { enabled: false },
    });

    return NextResponse.json({
      success: true,
      message: "Checkout session created successfully",
      data: {
        clientSecret: session.client_secret,
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: (err as { message?: string })?.message,
      },
      { status: 500 }
    );
  }
}

// @ts-expect-error can't type now
export async function GET(req) {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req?.query?.session_id
    );

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details?.email,
    });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
