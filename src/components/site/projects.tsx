"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "pam-transceivers",
    title: "DAC-ADC-DSP-based PAM-4/8 Wireline Transceivers",
    description: "High-performance computing systems and datacenters communications",
    details: "This project focuses on ultra high-speed low-power inter-chip data movement. We're developing data converter designs for >112Gb/s serial links (SerDes) for wireline communications, including high-speed mid-resolution time-interleaved analog-digital converters (ADC) and >112Gb/s/lane PAM-4/8 ADC and DSP-based receivers. Our research includes high-level SerDes modeling and simulation along with wired communication protocols for low-power dataflow management.",
    image: "/images/projects/project1.jpg",
    status: "Active",
    collaboration: "Samsung Electronics DS, Point2 Technology, SAIT",
    period: "2022-2025"
  },
  {
    id: "advanced-modulation",
    title: "Advanced Modulation for Wireline Links",
    description: "Energy-efficient circuit design for ultra-high-speed wireline serial links",
    details: "Our research squeezes more bits per Hertz (bits/Hz) for better bandwidth efficiency, less power, and higher data rate. We're implementing Orthogonal Frequency-Division Multiplexing (OFDM) for bandwidth-efficient >200Gb/s/lane chip-to-chip communications. This includes high-performance ADC/DAC designs with non-uniform quantization threshold for the analog-digital interface, energy-efficient channel estimation, and clock recovery algorithms for wireline OFDM, as well as crosstalk reduction through multi-input multi-output (MIMO) transceiver technology.",
    image: "/images/projects/project2.jpg",
    status: "Active",
    collaboration: "Samsung Electronics DS, DGIST HRHR",
    period: "2022-2025"
  },
  {
    id: "rfsoc-prototyping",
    title: "Real-time ADC-DSP-based ASIC Prototyping",
    description: "Programmable RFSoC for real-time hardware emulation of DAC-ADC-DSP-based transceivers",
    details: "This project enables rapid prototyping of mixed-signal circuits in real-time before tapeout. We develop digital signal processor (DSP) designs in Field Programmable Gate Arrays (FPGA) for pre-tapeout functional and performance evaluation of high-speed DSP-DAC-based transmitters and ADC-DSP-based receivers. Our hardware implementation provides >10,000x evaluation speed boost over computer simulation, allowing quick demonstration of modulation schemes and signal processing ideas for ADC-DSP-based mixed-signal systems.",
    image: "/images/projects/project3.jpg",
    status: "Active",
    collaboration: "Scientific Analog, DGIST Faculty Startup Grant",
    period: "2022-2025"
  },
  {
    id: "multi-chip-system",
    title: "High-Performance Multi-Chip System Design",
    description: "Signal processing, circuit, and system design optimizations for chip-to-chip communications",
    details: "Our research maximizes system-level performance of wireline transceivers for chip-to-chip communications through adaptive transceiver performance optimization algorithms. We develop encoding/decoding schemes for pin-efficient balanced multi-bit multi-wire signaling and area/power-efficient circuit designs for crosstalk cancellation in dense interconnects, addressing the complexities of modern multi-chip systems.",
    image: "/images/projects/project4.jpg",
    status: "Active",
    collaboration: "Samsung Future Technology Development Foundation",
    period: "2023-2028"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Current Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Our laboratory is actively working on these cutting-edge research initiatives in wireline transceiver technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full border-blue-200/40 hover:border-blue-300/60 transition-colors">
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2 bg-blue-50/30"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-primary px-2 py-1 rounded-full text-xs text-white font-medium">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-3">
                  <h3 className="text-white font-bold">{project.title}</h3>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-blue-900">{project.title}</CardTitle>
                <CardDescription className="text-sm font-medium">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 mt-auto">
                <div className="space-y-3 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Collaborators:</strong> {project.collaboration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Period:</strong> {project.period}
                  </p>
                </div>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full">
                      Project Details
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-900">{project.title}</h4>
                      <p className="text-sm">{project.details}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
