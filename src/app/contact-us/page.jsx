import { Suspense } from "react";
import ContactUsPage from "@/scenes/contact";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any questions or inquiries.",
};

const ContactUs = () => {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ContactUsPage />
    </Suspense>
  );
};

export default ContactUs;
