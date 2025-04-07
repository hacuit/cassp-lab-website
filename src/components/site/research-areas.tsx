import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const researchAreas = [
  {
    id: "dac-adc-dsp",
    title: "DAC-ADC-DSP-based PAM-4/8 Wireline Transceivers",
    description: "Ultra high-speed low-power inter-chip data movement for high-performance computing systems and datacenters",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Data converter design for &gt;112Gb/s serial link (SerDes) for wireline communications</li>
        <li>High-speed mid-resolution time-interleaved analog-digital converter (ADC) design</li>
        <li>&gt;112Gb/s/lane PAM-4/8 ADC- and DSP-based receiver</li>
        <li>High-level SerDes modeling and simulation</li>
        <li>Wired communication protocol for low-power dataflow management</li>
      </ul>
    ),
    sponsors: [
      "Samsung electronics DS division - Foundry business (2022.05~2025.04)",
      "Point2 technology (2022.07~2023.12)",
      "Samsung Advanced Institute of Technology (SAIT) (2023.02~2024.01)"
    ],
    image: "/images/research/research1.png"
  },
  {
    id: "advanced-modulation",
    title: "Advanced Modulation for Ultra-High-Speed Links",
    description: "Squeeze more bits per Hertz (bits/Hz) for better bandwidth efficiency, less power, and higher data rate",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Orthogonal frequency-division multiplexing (OFDM) for bandwidth-efficient &gt;200Gb/s/lane chip-to-chip communications</li>
        <li>High-performance digital-to-analog and analog-to-digital converters design for the analog-digital interface</li>
        <li>OFDM-specific ADC/DAC design with non-uniform quantization threshold</li>
        <li>Energy-efficient channel estimation and clock recovery algorithm for wireline OFDM</li>
        <li>Crosstalk reduction/cancellation through multi-input multi-output (MIMO) transceiver for dense chip-to-chip interconnects</li>
      </ul>
    ),
    sponsors: [
      "Samsung electronics DS division - Foundry business (2022.05~2025.04)",
      "DGIST HRHR project (2023.01~2024.12)"
    ],
    image: "/images/research/research2.png"
  },
  {
    id: "asic-prototyping",
    title: "Real-time ADC-DSP-based ASIC Prototyping",
    description: "Real-time hardware emulation of DAC-ADC-DSP-based transceivers with programmable RFSoC",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Rapid prototyping of mixed-signal circuits in real-time before tapeout</li>
        <li>Digital signal processor (DSP) design in Field Programmable Gate Array (FPGA)</li>
        <li>Pre-tapeout functional and performance evaluation of high-speed DSP-DAC-based transmitter and ADC-DSP-based receiver designs in hardware (&gt;10000x evaluation speed boost over computer simulation)</li>
        <li>Quick demonstration of modulation scheme and signal processing ideas for ADC-DSP-based mixed-signal systems</li>
      </ul>
    ),
    sponsors: [
      "Scientific Analog (2022.09~2023.08)",
      "DGIST faculty startup grant (2022.01~2025.12)"
    ],
    image: "/images/research/research3.png"
  },
  {
    id: "multi-chip-system",
    title: "High-Performance Multi-Chip System Design",
    description: "Maximizing system-level performance of wireline transceivers for chip-to-chip communications",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Adaptive transceiver performance optimization algorithm</li>
        <li>Encoding/decoding scheme for pin-efficient balanced multi-bit multi-wire signaling</li>
        <li>Area- and power-efficient circuit design for crosstalk cancellation in dense interconnects</li>
      </ul>
    ),
    sponsors: [
      "Samsung future technology development foundation program (2023.06~2028.05)"
    ],
    image: "/images/research/research4.png"
  },
];

export function ResearchAreas() {
  return (
    <section id="research" className="py-10">
      <div className="container">
        <div className="mb-10">
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Our laboratory explores innovative solutions for high-speed wireline communication systems, focusing on these key research directions.
          </p>
        </div>

        <Tabs defaultValue="dac-adc-dsp" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
            {researchAreas.map((area) => (
              <TabsTrigger
                key={area.id}
                value={area.id}
                className="py-3 text-sm data-[state=active]:bg-background"
              >
                {area.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {researchAreas.map((area) => (
            <TabsContent key={area.id} value={area.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg mb-6">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-contain bg-slate-50"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>{area.content}</div>
                      {area.sponsors && area.sponsors.length > 0 && (
                        <div>
                          <h4 className="font-semibold mt-6 mb-2">Sponsors:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            {area.sponsors.map((sponsor, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">
                                {sponsor}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
