import CheckoutPage from "@/scenes/donate/checkout";

export const metadata = {
  title: "Donate – Secure Checkout",
  description: "Complete your donation securely using PayPal or Mobile Money.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Donate() {
  return <CheckoutPage />;
}
