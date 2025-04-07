import { Contact } from "@/components/site/contact";

export const metadata = {
  title: "Contact Us | CASSP LAB",
  description: "Get in touch with the CASSP Laboratory for collaborations, inquiries, or academic information.",
};

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <Contact />
    </div>
  );
}
