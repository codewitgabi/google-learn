"use client";

import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export default function StripeCheckoutPage() {
  const fetchClientSecret = useCallback(async () => {
    const response = await fetch("/api/v1/payments/stripe", { method: "POST" });
    const data = await response.json();

    if (!response.ok) {
      console.error(data);
    } else {
      return data.data.clientSecret;
    }
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout" className="my-12">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
