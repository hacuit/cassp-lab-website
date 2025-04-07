import { Publications } from "@/components/site/publications";

export const metadata = {
  title: "Publications | CASSP LAB",
  description: "Browse our journal and conference publications in wireline transceiver technology and signal processing.",
};

export default function PublicationsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Publications</h1>
      <Publications />
    </div>
  );
}
