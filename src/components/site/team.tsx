"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// Ph.D. Students
const phd = [
  {
    id: "seoyoung-jang",
    name: "Seoyoung Jang",
    title: "Lab Representative",
    bio: "Integrated M.S. & Ph.D. (Aug. 2022~)",
    description: "Undergraduate research assistant (Feb. ~ Aug. 2022)",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member1.jpg",
  },
  {
    id: "yujin-choi",
    name: "Yujin Choi",
    title: "Ph.D. Candidate",
    bio: "Integrated M.S. & Ph.D. (Feb. 2023~)",
    description: "Undergraduate research assistant (Feb. 2022 ~ Feb. 2023)",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member2.jpg",
  },
  {
    id: "donggeon-kim",
    name: "Donggeon Kim",
    title: "Ph.D. Candidate",
    bio: "Integrated M.S. & Ph.D. (Feb. 2023~)",
    description: "",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member3.jpg",
  },
  {
    id: "zhongpeng-liang",
    name: "Zhongpeng Liang",
    title: "Ph.D. Candidate",
    bio: "Integrated M.S. & Ph.D. (Aug. 2023~)",
    description: "",
    email: "",
    researchArea: "High-speed analog-digital converter (ADC)",
    image: "/images/members/member4.jpg",
  },
  {
    id: "dohyun-kim",
    name: "Dohyun Kim",
    title: "Ph.D. Candidate",
    bio: "Integrated M.S. & Ph.D. (Feb. 2024~)",
    description: "Co-advised with Prof. Jae Youn Hwang",
    email: "",
    researchArea: "Digital system design",
    image: "/images/members/member9.jpg",
  },
];

// Master's Students
const masters = [
  {
    id: "heewon-sung",
    name: "Heewon Sung",
    title: "M.S. Student",
    bio: "M.S. Student (Aug. 2023~)",
    description: "",
    email: "",
    researchArea: "High-speed analog-digital converter (ADC)",
    image: "/images/members/member5.jpg",
  },
  {
    id: "seongjin-kim",
    name: "Seongjin Kim",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2024~)",
    description: "Intern (Sept. 2023 ~ Feb. 2024)",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member6.jpg",
  },
  {
    id: "sungyu-song",
    name: "Sungyu Song",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2024~)",
    description: "Intern (Jan. 2024 ~ Feb. 2024)",
    email: "",
    researchArea: "Digital system design",
    image: "/images/members/member7.jpg",
  },
  {
    id: "dongryul-heo",
    name: "Dongryul Heo",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2024~)",
    description: "",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member8.jpg",
  },
  {
    id: "jaemin-lee",
    name: "Jaemin Lee",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2024~)",
    description: "",
    email: "",
    researchArea: "High-speed data converters",
    image: "/images/members/member10.jpg",
  },
  {
    id: "songyi-cheon",
    name: "Songyi Cheon",
    title: "M.S. Student",
    bio: "M.S. Student (Aug. 2024~)",
    description: "",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member11.jpg",
  },
  {
    id: "minsung-gong",
    name: "Minsung Gong",
    title: "M.S. Student",
    bio: "M.S. Student (Aug. 2024~)",
    description: "",
    email: "",
    researchArea: "High-speed data converters",
    image: "/images/members/member12.jpg",
  },
  {
    id: "ive-cha",
    name: "Ive Cha",
    title: "M.S. Student",
    bio: "M.S. Student (Aug. 2024~)",
    description: "Co-advised with Prof. Jae Youn Hwang",
    email: "",
    researchArea: "Digital system design",
    image: "/images/members/member13.jpg",
  },
  {
    id: "gayoung-kang",
    name: "Gayoung Kang",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2025~)",
    description: "",
    email: "",
    researchArea: "DSP for wireline",
    image: "/images/members/member14.jpg",
  },
  {
    id: "dohyeon-kwon",
    name: "Dohyeon Kwon",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2025~)",
    description: "",
    email: "",
    researchArea: "DSP for wireline",
    image: "/images/members/member15.jpg",
  },
  {
    id: "hawon-yun",
    name: "Hawon Yun",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2025~)",
    description: "",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member16.jpg",
  },
  {
    id: "eunsoo-lee",
    name: "Eunsoo Lee",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2025~)",
    description: "",
    email: "",
    researchArea: "Circuits and systems for high-speed wireline",
    image: "/images/members/member17.jpg",
  },
  {
    id: "woojeong-park",
    name: "Woojeong Park",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2025~)",
    description: "",
    email: "",
    researchArea: "High-speed data converters",
    image: "/images/members/member18.jpg",
  },
  {
    id: "yoonji-choi",
    name: "Yoonji Choi",
    title: "M.S. Student",
    bio: "M.S. Student (Feb. 2025~)",
    description: "",
    email: "",
    researchArea: "DSP for wireline",
    image: "/images/members/member19.jpg",
  },
];

// Alumni
const alumni = [
  {
    id: "seonho-kong",
    name: "Seonho Kong",
    title: "M.S.",
    bio: "Graduation: Feb. 2024",
    description: "M.S. Student (Feb. 2022~Feb. 2024)",
    email: "",
    researchArea: "High-speed analog-digital converter (ADC)",
    nextAffiliation: "Synopsys Korea",
    image: "/images/members/member20.jpg",
  },
  {
    id: "eunki-song",
    name: "Eunki Song",
    title: "M.S.",
    bio: "Graduation: Aug. 2024",
    description: "M.S. Student (Aug. 2022~Aug. 2024)",
    email: "",
    researchArea: "High-speed analog-digital converter (ADC)",
    nextAffiliation: "LX Semicon",
    image: "/images/members/member21.jpg",
  },
  {
    id: "jaewon-lee",
    name: "Jaewon Lee",
    title: "Researcher",
    bio: "Researcher (Jul. 2022~Oct. 2024)",
    description: "",
    email: "",
    researchArea: "DAC/ADC-DSP-based ultra high-speed wireline transceiver",
    nextAffiliation: "IBM Research Europe - Zurich & ETH Zurich",
    image: "/images/members/member22.jpg",
  },
];

export function Team() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section id="team" className="py-20 bg-muted/20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and students working at the forefront of wireline transceiver technology.
          </p>
          <p className="mt-2 text-blue-600 italic">
            Motivated students interested in joining the CASSP lab are encouraged to contact <span className="font-medium">gain.kim@dgist.ac.kr</span> with a CV and academic transcripts attached.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8">
            <TabsTrigger value="all" className="py-2">All Members</TabsTrigger>
            <TabsTrigger value="phd" className="py-2">Ph.D. Students</TabsTrigger>
            <TabsTrigger value="masters" className="py-2">Master's Students</TabsTrigger>
            <TabsTrigger value="alumni" className="py-2">Alumni</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-900 border-b pb-2">Ph.D. Students</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {phd.map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      isHovered={hoveredMember === member.id}
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-900 border-b pb-2">Master's Students</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {masters.slice(0, 8).map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      isHovered={hoveredMember === member.id}
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="phd">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {phd.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  isHovered={hoveredMember === member.id}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="masters">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {masters.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  isHovered={hoveredMember === member.id}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <h3 className="text-xl font-semibold mb-6 text-blue-900 border-b pb-2">Alumni</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {alumni.map((member) => (
                <AlumniCard
                  key={member.id}
                  member={member}
                  isHovered={hoveredMember === member.id}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface MemberProps {
  member: {
    id: string;
    name: string;
    title: string;
    bio: string;
    description?: string;
    image: string;
    email: string;
    researchArea: string;
  };
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface AlumniProps extends MemberProps {
  member: MemberProps["member"] & {
    nextAffiliation: string;
  };
}

function MemberCard({ member, isHovered, onMouseEnter, onMouseLeave }: MemberProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-md transform scale-[1.02] border-blue-300' : 'border-gray-200'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-base font-medium">{member.name}</CardTitle>
        <p className="text-sm text-blue-800 font-medium mt-0.5">{member.title}</p>
      </CardHeader>
      <CardContent className="p-3 pt-1">
        <div className="text-xs space-y-1 text-muted-foreground">
          <p>{member.bio}</p>
          {member.description && <p>{member.description}</p>}
          <p className="text-xs font-medium text-slate-900 mt-2">Research area:</p>
          <p>{member.researchArea}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function AlumniCard({ member, isHovered, onMouseEnter, onMouseLeave }: AlumniProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-md transform scale-[1.02] border-blue-300' : 'border-gray-200'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-base font-medium">{member.name}</CardTitle>
        <p className="text-sm text-blue-800 font-medium mt-0.5">{member.title}</p>
      </CardHeader>
      <CardContent className="p-3 pt-1">
        <div className="text-xs space-y-1 text-muted-foreground">
          <p>{member.bio}</p>
          {member.description && <p>{member.description}</p>}
          <p className="text-xs font-medium text-slate-900 mt-2">Research area:</p>
          <p>{member.researchArea}</p>
          <p className="text-xs font-medium text-slate-900 mt-2">Next affiliation:</p>
          <p>{member.nextAffiliation}</p>
        </div>
      </CardContent>
    </Card>
  );
}
