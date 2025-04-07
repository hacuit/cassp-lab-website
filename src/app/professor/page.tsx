import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Professor | CASSP LAB",
  description: "Information about the professor leading the CASSP Laboratory.",
};

export default function ProfessorPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Professor</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-1">
          <div className="aspect-square relative overflow-hidden rounded-xl mb-4">
            <Image
              src="/images/professor.jpg"
              alt="Gain Kim, Ph.D."
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">Gain Kim, Ph.D.</h2>
          <p className="text-blue-600 font-medium">IEEE Senior Member</p>
          <p className="text-lg mt-4">Associate Professor</p>
          <p className="text-lg">Department of Electrical Engineering and Computer Science (EECS), DGIST</p>

          <div className="mt-6 space-y-2">
            <p><span className="font-semibold">Office:</span> E3-409</p>
            <p><span className="font-semibold">Phone:</span> +82-53-785-6342</p>
            <p><span className="font-semibold">Email:</span> gain.kim@dgist.ac.kr</p>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              href="https://www.linkedin.com/in/gain-kim-b0997897"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              LinkedIn Profile
            </Link>
            <Link
              href="https://scholar.google.com/citations?user=xfi9RosAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Google Scholar
            </Link>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Ph.D. in Microsystems and Microelectronics, Microelectronic Systems Laboratory (Prof. Yusuf Leblebici), EPFL, Lausanne, Switzerland (2018)</li>
          <li>M.S. in Electrical and Electronics Engineering, Integrated Systems Laboratory (Prof. Giovanni De Micheli), EPFL, Lausanne, Switzerland (2015)</li>
          <li>B.S. in Electrical and Electronics Engineering, EPFL, Lausanne, Switzerland (2013)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Past Experiences</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>DGIST, Daegu, South Korea, Associate Professor (Mar. 2025 - Present)</li>
          <li>DGIST, Daegu, South Korea, Assistant Professor (Jan. 2022 - Feb. 2025)</li>
          <li>IBM Research Zurich Laboratory, Visiting Professor (Dec. 2022 - Feb. 2023, Aug. 2023 - Sept. 2023)</li>
          <li>Samsung Research, 6G Research Team, Advanced Communications Research Center, Seoul, South Korea, Staff Engineer (Nov. 2020 - Jan. 2022)</li>
          <li>KAIST, Nanoscale Advanced Integrated Systems Laboratory (Prof. Hyeonmin Bae), Daejeon, South Korea, Postdoctoral Fellow (Sept. 2018 - Oct. 2020)</li>
          <li>IBM Research, High-Speed Interconnect Technology Group (Dr. Thomas Toifl), Zurich, Switzerland, Contractor (Sept. 2016 - Jul. 2018)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Academic Activities</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Organizing Committee (Publicity Chair), ICCE-Asia 2025</li>
          <li>Organizing Committee (Publication Chair), ASSCC 2025</li>
          <li>Technical Program Committee (TPC) (Data Converters subcommittee), ASSCC (2025~)</li>
          <li>Senior Member, IEEE</li>
          <li>Technical Reviewer for IEEE journals:
            <ul className="list-disc pl-6 mt-2">
              <li>IEEE Journal of Solid-State Circuits (JSSC)</li>
              <li>IEEE Transactions on Circuits and Systems I: Regular Papers (TCAS-I)</li>
              <li>IEEE Transactions on Circuits and Systems II: Express Briefs (TCAS-II)</li>
              <li>IEEE Transactions on Microwave Theory and Techniques (TMTT)</li>
              <li>IEEE Transactions on Very Large Scale Integration Systems (TVLSI)</li>
              <li>IEEE Open Journal of the Solid-State Circuits Society (OJ-SSCS)</li>
              <li>IEEE Open Journal of Circuits and Systems (OJCAS)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Talks & Seminars</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>"Equalization Basics," [Lecture], Samsung Electronics DS Division: High-Speed Interface Basic Program for employees, 28. Mar. 2025.</li>
          <li>"Recent and future trends in ultra high-speed wireline transceivers," [Lecture], 12. Mar. 2025.</li>
          <li>"Digital signal processing for high-speed DAC/ADC-based SerDes," [Lecture], RF/Analog Circuits Workshop, 27. Sept. 2024.</li>
          <li>"Digital signal processing for high-speed DAC/ADC-based SerDes," [Lecture], Samsung Electronics Global Technology Conference (GTC), 20. Sept. 2024.</li>
          <li>"Recent advances in ultra-high-speed SerDes: ADC-DSP-based RX," [Lecture], Samsung Electronics DS Division: High-Speed Interface Expert Program for employees, 9. July. 2024.</li>
          <li>"ADC-DSP/DMT/OFDM Technologies for Next-Generation Data Center Interconnects," [Lecture], Hyper-converged Services and iNfrastructures (HSN), 25. Jan. 2024.</li>
        </ul>
      </section>
    </div>
  );
}
