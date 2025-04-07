"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryImageProps {
  src: string;
  alt: string;
  caption: string;
  location?: string;
  date?: string;
}

const GalleryImage = ({ src, alt, caption, location, date }: GalleryImageProps) => (
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
    <div className="relative aspect-video w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="text-base font-semibold mb-1">{caption}</h3>
      {(location || date) && (
        <p className="text-sm text-gray-600">
          {location && location}{location && date && ", "}{date && date}
        </p>
      )}
    </div>
  </div>
);

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("events");

  const eventImages = [
    {
      src: "/images/gallery/event1.jpeg",
      alt: "Spring Group Photo",
      caption: "2025 - Spring Group Photo",
      location: "DGIST, Daegu, Korea",
      date: "Apr. 2025"
    },
    {
      src: "/images/gallery/event2.jpeg",
      alt: "ISSCC Conference",
      caption: "2025.02.15~21 - ISSCC",
      location: "San Francisco, USA",
      date: "Feb. 2025"
    },
    {
      src: "/images/gallery/event3.jpeg",
      alt: "ICEIC Conference",
      caption: "2025.01.18~22 - ICEIC",
      location: "Osaka, Japan",
      date: "Jan. 2025"
    }
  ];

  const equipmentImages = [
    {
      src: "/images/oscilloscope.jpg",
      alt: "Test and Measurement Equipment",
      caption: "Signal Integrity Test Setup",
      location: "CASSP LAB",
      date: "2024"
    },
    {
      src: "/images/lab-setup.jpg",
      alt: "Laboratory Equipment",
      caption: "High-Frequency Test Equipment",
      location: "CASSP LAB",
      date: "2024"
    }
  ];

  const chipImages = [
    {
      src: "/images/circuit-board.png",
      alt: "Circuit Board",
      caption: "High-Speed Wireline Transceiver Chip",
      location: "CASSP LAB",
      date: "2024"
    },
    {
      src: "/images/transceiver-chip.jpg",
      alt: "Transceiver Chip",
      caption: "Next-Generation SerDes Prototype",
      location: "Fabricated at TSMC",
      date: "2024"
    }
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Lab Gallery</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore our laboratory events, equipment, and chip designs through this photo gallery.
      </p>

      <Tabs
        defaultValue="events"
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-8"
      >
        <div className="flex justify-center">
          <TabsList className="mb-8">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="chips">Chips</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="events" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image, index) => (
              <GalleryImage
                key={`event-${index}`}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
                location={image.location}
                date={image.date}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="equipment" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentImages.map((image, index) => (
              <GalleryImage
                key={`equipment-${index}`}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
                location={image.location}
                date={image.date}
              />
            ))}
            {/* Sample placeholder */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400 font-medium">No Image</p>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold mb-1">Signal Generator</h3>
                <p className="text-sm text-gray-600">CASSP LAB, 2024</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="chips" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chipImages.map((image, index) => (
              <GalleryImage
                key={`chip-${index}`}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
                location={image.location}
                date={image.date}
              />
            ))}
            {/* Sample placeholder */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400 font-medium">No Image</p>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold mb-1">28nm CMOS ADC-DSP SerDes</h3>
                <p className="text-sm text-gray-600">Silicon prototype, 2024</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
