import { Team } from "@/components/site/team";

export const metadata = {
  title: "Members | CASSP LAB",
  description: "Meet our team of researchers, PhD students, and alumni at CASSP Laboratory.",
};

export default function TeamPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Members</h1>
      <Team />
    </div>
  );
}
