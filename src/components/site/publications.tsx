"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDownIcon, ExternalLinkIcon } from "lucide-react";
import { journalPapers } from "@/data/journal-papers";
import { conferencePapers } from "@/data/conference-papers";
import { useState } from "react";
import Link from "next/link";

export function Publications() {
  const [openYears, setOpenYears] = useState<string[]>([]);

  const journalYears = [...new Set(journalPapers.map(paper => paper.year))].sort((a, b) => b.localeCompare(a));
  const conferenceYears = [...new Set(conferencePapers.map(paper => paper.year))].sort((a, b) => b.localeCompare(a));

  const toggleYear = (year: string) => {
    if (openYears.includes(year)) {
      setOpenYears(openYears.filter(y => y !== year));
    } else {
      setOpenYears([...openYears, year]);
    }
  };

  const renderEqualsContributionNote = (authors: string) => {
    if (authors.includes("*")) {
      return (
        <p className="text-xs italic text-muted-foreground mt-1">
          * equal contribution to this work
        </p>
      );
    }
    return null;
  };

  const groupJournalsByYear = () => {
    const grouped: Record<string, typeof journalPapers> = {};

    journalYears.forEach(year => {
      grouped[year] = journalPapers.filter(paper => paper.year === year);
    });

    return grouped;
  };

  const groupConferencesByYear = () => {
    const grouped: Record<string, typeof conferencePapers> = {};

    conferenceYears.forEach(year => {
      grouped[year] = conferencePapers.filter(paper => paper.year === year);
    });

    return grouped;
  };

  const journalsByYear = groupJournalsByYear();
  const conferencesByYear = groupConferencesByYear();

  return (
    <section id="publications" className="py-20">
      <div className="container">
        <div className="mb-8 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our research results are published in leading journals and conferences in the field of circuits and systems.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8">
            <TabsTrigger value="featured" className="py-2">Featured Publications</TabsTrigger>
            <TabsTrigger value="journals" className="py-2">Journal Papers</TabsTrigger>
            <TabsTrigger value="conferences" className="py-2">Conference Proceedings</TabsTrigger>
          </TabsList>

          {/* Featured Publications Tab */}
          <TabsContent value="featured">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-blue-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Featured Journal Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {journalPapers
                      .filter(paper => paper.featured)
                      .slice(0, 4)
                      .map((paper) => (
                        <div key={paper.id} className="space-y-2 group">
                          <h3 className="font-medium group-hover:text-blue-700 transition-colors">
                            [{paper.code}] {paper.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{paper.authors}</p>
                          {renderEqualsContributionNote(paper.authors)}
                          <p className="text-sm">
                            {paper.journal}, {paper.year}
                          </p>
                          {paper.url && (
                            <Link
                              href={paper.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                            >
                              <ExternalLinkIcon className="h-3 w-3" /> View Publication
                            </Link>
                          )}
                          <Separator className="mt-4" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Featured Conference Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {conferencePapers
                      .filter(paper => paper.featured)
                      .slice(0, 4)
                      .map((paper) => (
                        <div key={paper.id} className="space-y-2 group">
                          <h3 className="font-medium group-hover:text-blue-700 transition-colors">
                            [{paper.code}] {paper.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{paper.authors}</p>
                          {renderEqualsContributionNote(paper.authors)}
                          <p className="text-sm">
                            {paper.conference}, {paper.location && `${paper.location}, `}{paper.year}
                          </p>
                          {paper.url && (
                            <Link
                              href={paper.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                            >
                              <ExternalLinkIcon className="h-3 w-3" /> View Publication
                            </Link>
                          )}
                          <Separator className="mt-4" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Journal Papers Tab */}
          <TabsContent value="journals">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <span className="mr-2">Journal Papers</span>
                  <span className="text-xs text-muted-foreground">*: Equal contribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {journalYears.map((year) => (
                    <div key={year} className="space-y-3">
                      <div
                        className="flex items-center gap-2 bg-muted/30 p-2 rounded-md cursor-pointer"
                        onClick={() => toggleYear(year)}
                      >
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${openYears.includes(year) ? 'rotate-180' : ''}`}
                        />
                        <h2 className="text-lg font-semibold">{year}</h2>
                      </div>

                      {openYears.includes(year) && (
                        <div className="space-y-4 pl-4">
                          {journalsByYear[year].map((paper) => (
                            <div key={paper.id} className="space-y-2 group">
                              <h3 className="font-medium group-hover:text-blue-700 transition-colors">
                                [{paper.code}] {paper.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{paper.authors}</p>
                              {renderEqualsContributionNote(paper.authors)}
                              <p className="text-sm">
                                {paper.journal}, {paper.year}
                              </p>
                              {paper.url && (
                                <Link
                                  href={paper.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                                >
                                  <ExternalLinkIcon className="h-3 w-3" /> View Publication
                                </Link>
                              )}
                              <Separator className="mt-4" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conference Papers Tab */}
          <TabsContent value="conferences">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <span className="mr-2">Conference Proceedings</span>
                  <span className="text-xs text-muted-foreground">*: Equal contribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conferenceYears.map((year) => (
                    <div key={year} className="space-y-3">
                      <div
                        className="flex items-center gap-2 bg-muted/30 p-2 rounded-md cursor-pointer"
                        onClick={() => toggleYear(year)}
                      >
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${openYears.includes(year) ? 'rotate-180' : ''}`}
                        />
                        <h2 className="text-lg font-semibold">{year}</h2>
                      </div>

                      {openYears.includes(year) && (
                        <div className="space-y-4 pl-4">
                          {conferencesByYear[year].map((paper) => (
                            <div key={paper.id} className="space-y-2 group">
                              <h3 className="font-medium group-hover:text-blue-700 transition-colors">
                                [{paper.code}] {paper.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{paper.authors}</p>
                              {renderEqualsContributionNote(paper.authors)}
                              <p className="text-sm">
                                {paper.conference}, {paper.location && `${paper.location}, `}{paper.year}
                              </p>
                              {paper.url && (
                                <Link
                                  href={paper.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                                >
                                  <ExternalLinkIcon className="h-3 w-3" /> View Publication
                                </Link>
                              )}
                              <Separator className="mt-4" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
