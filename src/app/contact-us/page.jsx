import { Suspense } from "react";
import ContactUsPage from "@/scenes/contact";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any questions or inquiries.",
};

const ContactUs = () => {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ContactUsPage googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY} />
    </Suspense>
  );
};

export default ContactUs;
