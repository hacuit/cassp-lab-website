"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/80 z-10" />

      {/* Circuit board background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/circuit-board.png"
          alt="Circuit board background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Circuits And Systems for Signal Processing Laboratory
              </h1>
              <p className="text-xl text-blue-100">
                Advancing high-speed wireline communication technologies
              </p>
            </div>
            <p className="max-w-prose text-blue-100">
              CASSP Lab specializes in the research and development of next-generation wireline transceiver circuits, enabling faster and more efficient data communication for tomorrow's interconnected world.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/research">Explore Research</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/team">Join Our Team</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative h-80 w-80 md:h-[400px] md:w-[400px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-400/20 z-10 rounded-xl" />
              <Image
                src="/images/oscilloscope.jpg"
                alt="Laboratory equipment with eye diagram measurement"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
