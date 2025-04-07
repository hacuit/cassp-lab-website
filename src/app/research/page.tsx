import { ResearchAreas } from "@/components/site/research-areas";

export const metadata = {
  title: "Research | CASSP LAB",
  description: "Explore our research areas in wireline transceiver technology and signal processing.",
};

export default function ResearchPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Research</h1>
      <ResearchAreas />
    </div>
  );
}
