"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export function Footer() {
  // 클라이언트 사이드에서만 연도를 계산합니다
  const [year, setYear] = useState("2024");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <Image
                  src="/images/cassp-logo.png"
                  alt="CASSP LAB Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold">CASSP LAB</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Circuits And Systems for Signal Processing Laboratory specializing in wireline transceiver research
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/professor" className="text-sm text-muted-foreground hover:text-primary">
                Professor
              </Link>
              <Link href="/team" className="text-sm text-muted-foreground hover:text-primary">
                Members
              </Link>
              <Link href="/research" className="text-sm text-muted-foreground hover:text-primary">
                Research
              </Link>
              <Link href="/publications" className="text-sm text-muted-foreground hover:text-primary">
                Publications
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Research Database
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Lab Equipment
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Student Opportunities
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Industry Partnerships
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>[42988] 대구광역시 달성군 현풍읍 테크노중앙대로 333 대구경북과학기술원</p>
              <p>Department of Electrical Engineering</p>
              <p>Building E3, Room 409</p>
              <p className="pt-2">
                <a href="mailto:gainkim@dgist.ac.kr" className="hover:text-primary">
                  gainkim@dgist.ac.kr
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} CASSP Laboratory. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms of Use
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
