"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Professor", href: "/professor" },
  { label: "Team", href: "/team" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Gallery", href: "/gallery" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-blue-600 to-blue-400" />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
              CASSP
            </div>
          </div>
          <Link href="/" className="text-xl font-bold">
            CASSP LAB
          </Link>
          <span className="hidden text-sm text-muted-foreground md:inline-flex">
            Wireline Transceiver Laboratory
          </span>
        </div>

        <nav className="ml-auto hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="ml-auto md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
