import { Projects } from "@/components/site/projects";

export const metadata = {
  title: "Projects | CASSP LAB",
  description: "Explore our ongoing and completed research projects in wireline transceiver technology.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Research Projects</h1>
      <Projects />
    </div>
  );
}
