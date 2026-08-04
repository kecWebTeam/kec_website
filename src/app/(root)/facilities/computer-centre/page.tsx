import {
  MonitorSmartphone,
  Cpu,
  Database,
  Server,
  Wifi,
  Code2,
  Laptop,
  BookOpen,
} from "lucide-react";

import FacilityPage from "@/components/facilities/FacilityPage";
import FacilityStats from "@/components/facilities/FacilityStats";
import FacilityDescription from "@/components/facilities/FacilityDescription";
import FacilityFeatures from "@/components/facilities/FacilityFeatures";
import FacilityGallery from "@/components/facilities/FacilityGallery";
import FacilityResources from "@/components/facilities/FacilityResources";
import FacilityStaff from "@/components/facilities/FacilityStaff";

export default function ComputerCentrePage() {
  return (
    <FacilityPage
      title="Computer Centre"
      badge="Academic Infrastructure"
      subtitle="The Computer Centre provides modern computing facilities, software laboratories and internet-enabled learning to support practical education, programming and research."
      image="/images/computerlab.jpg"
    >
      <FacilityStats
        stats={[
          {
            icon: <MonitorSmartphone size={30} />,
            title: "Computers",
            value: 50,
            suffix: "+",
            description: "Modern Desktop Systems",
          },
          {
            icon: <Code2 size={30} />,
            title: "Programming Labs",
            value: 8,
            description: "Practical Learning",
          },
          {
            icon: <Wifi size={30} />,
            title: "Internet",
            value: "LAN",
            description: "Campus Network",
          },
          {
            icon: <Database size={30} />,
            title: "Software",
            value: 20,
            suffix: "+",
            description: "Engineering Applications",
          },
        ]}
      />

      <FacilityDescription
        title="About Computer Centre"
        description={`The Computer Centre serves as the primary hub for practical computing activities at Katihar Engineering College.

Students receive hands-on training in programming, databases, operating systems, networking and engineering software through dedicated laboratories.

The centre supports classroom teaching with internet-enabled computing resources and software used across multiple engineering disciplines.`}
        highlights={[
          "Programming Laboratory",
          "Linux Laboratory",
          "MATLAB",
          "DBMS Lab",
          "Language Lab",
          "CAD/CAM",
          "Smart Classroom",
          "High-Speed Network",
        ]}
      />

      <FacilityFeatures
        title="Computer Centre Facilities"
        subtitle="Modern infrastructure for practical learning."

        features={[
          {
            title: "Programming Lab",
            description:
              "Hands-on coding using C, C++, Java, Python and other programming languages.",
            icon: Code2,
          },
          {
            title: "Database Lab",
            description:
              "Practical sessions covering SQL, DBMS and database design.",
            icon: Database,
          },
          {
            title: "Linux Laboratory",
            description:
              "Open-source computing environment for operating systems and networking.",
            icon: Server,
          },
          {
            title: "Engineering Software",
            description:
              "MATLAB, CAD/CAM and software used in engineering education.",
            icon: Cpu,
          },
          {
            title: "Smart Classroom",
            description:
              "Projector-enabled digital learning environment.",
            icon: Laptop,
          },
          {
            title: "Internet Connectivity",
            description:
              "Networked computer systems with internet access for academic work.",
            icon: Wifi,
          },
        ]}
      />

      <FacilityGallery
        title="Computer Centre Gallery"
        subtitle="Explore our laboratories and computing infrastructure."

        images={[
          {
            src: "/images/lab/1.jpg",
            alt: "Programming Lab",
          },
          {
            src: "/images/lab/2.jpg",
            alt: "Computer Laboratory",
          },
          {
            src: "/images/lab/3.jpg",
            alt: "Students Working",
          },
          {
            src: "/images/lab/4.jpg",
            alt: "Networking Lab",
          },
          {
            src: "/images/lab/5.jpg",
            alt: "Smart Classroom",
          },
          {
            src: "/images/lab/6.jpg",
            alt: "Language Lab",
          },
        ]}
      />

      <FacilityResources
        title="Learning Resources"
        subtitle="Useful platforms for programming and software development."

        resources={[
          {
            title: "GitHub",
            description:
              "Version control and collaborative software development.",
            url: "https://github.com",
          },
          {
            title: "Visual Studio Code",
            description:
              "Lightweight code editor for modern development.",
            url: "https://code.visualstudio.com",
          },
          {
            title: "Python",
            description:
              "Official programming language documentation.",
            url: "https://python.org",
          },
          {
            title: "MATLAB",
            description:
              "Numerical computing and simulation software.",
            url: "https://mathworks.com",
          },
          {
            title: "Oracle Academy",
            description:
              "Database and programming learning resources.",
            url: "https://academy.oracle.com",
          },
          {
            title: "NPTEL",
            description:
              "Programming and computer science courses by IITs.",
            url: "https://nptel.ac.in",
          },
        ]}
      />

      <FacilityStaff
        title="Computer Centre Administration"

        members={[
          {
            name: "Computer Centre Coordinator",
            designation: "Faculty Coordinator",
            department: "Computer Centre",
            role: "Centre In-Charge",
          },
          {
            name: "Technical Assistant",
            designation: "Lab Staff",
            department: "Computer Centre",
            role: "Laboratory Support",
          },
        ]}
      />
    </FacilityPage>
  );
}