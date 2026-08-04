import {
  BookOpen,
  LibraryBig,
  Newspaper,
  Wifi,
  Laptop,
  Search,
  BookMarked,
  GraduationCap,
} from "lucide-react";

import FacilityPage from "@/components/facilities/FacilityPage";
import FacilityStats from "@/components/facilities/FacilityStats";
import FacilityDescription from "@/components/facilities/FacilityDescription";
import FacilityFeatures from "@/components/facilities/FacilityFeatures";
import FacilityResources from "@/components/facilities/FacilityResources";
import FacilityGallery from "@/components/facilities/FacilityGallery";
import FacilityStaff from "@/components/facilities/FacilityStaff";

export default function LibraryPage() {
  return (
    <FacilityPage
      title="Central Library"
      badge="Academic Facility"
      subtitle="The Central Library serves as the knowledge hub of Katihar Engineering College, supporting teaching, learning, research, and innovation through an extensive collection of books, journals, digital resources, and modern reading facilities."
      image="/images/central-library.jpeg"
    >
      {/* Statistics */}

      <FacilityStats
        stats={[
          {
            icon: <LibraryBig size={30} />,
            title: "Books",
            value: 12000,
            suffix: "+",
            description: "Technical & Reference Books",
          },
          {
            icon: <BookOpen size={30} />,
            title: "Journals",
            value: 300,
            suffix: "+",
            description: "National & International",
          },
          {
            icon: <Wifi size={30} />,
            title: "Digital Access",
            value: "24×7",
            description: "Internet Enabled",
          },
          {
            icon: <Newspaper size={30} />,
            title: "Newspapers",
            value: 12,
            description: "Daily Publications",
          },
        ]}
      />

      {/* About */}

      <FacilityDescription
        title="About the Central Library"
        description={`The Central Library at Katihar Engineering College plays a vital role in supporting academic excellence by providing students and faculty with quality learning resources.

The library houses textbooks, reference books, journals, magazines, newspapers, and digital resources covering various engineering disciplines.

Students can also access online learning platforms and digital repositories through internet-enabled facilities to enhance their academic and research activities.`}
        highlights={[
          "Digital Library",
          "Reading Hall",
          "Reference Section",
          "Book Bank Facility",
          "Wi-Fi Enabled",
          "Daily Newspapers",
          "Technical Journals",
          "Research Support",
        ]}
      />

      {/* Features */}

      <FacilityFeatures
        title="Library Facilities"
        subtitle="Designed to provide a productive and resource-rich learning environment."

        features={[
          {
            title: "Digital Library",
            description:
              "Access online books, journals and academic databases.",
            icon: Laptop,
          },
          {
            title: "Reference Books",
            description:
              "Comprehensive engineering reference collections.",
            icon: LibraryBig,
          },
          {
            title: "Reading Hall",
            description:
              "Comfortable and peaceful reading environment.",
            icon: BookOpen,
          },
          {
            title: "Research Support",
            description:
              "Resources for project work, publications and innovation.",
            icon: Search,
          },
          {
            title: "Book Bank",
            description:
              "Special book bank facility for eligible students.",
            icon: BookMarked,
          },
          {
            title: "Wi-Fi",
            description:
              "Internet-enabled academic environment.",
            icon: Wifi,
          },
        ]}
      />

      {/* Gallery */}

      <FacilityGallery
        title="Library Gallery"
        subtitle="Explore our library infrastructure."

        images={[
          {
            src: "/images/library/img1.png",
            alt: "Reading Hall",
          },
          {
            src: "/images/library/img2.png",
            alt: "Books Collection",
          },
          {
            src: "/images/library/img3.png",
            alt: "Digital Section",
          },
          {
            src: "/images/library/img4.png",
            alt: "Reference Section",
          },
          {
            src: "/images/library/img5.png",
            alt: "Library Interior",
          },
          {
            src: "/images/library/img6.png",
            alt: "Students Reading",
          },
        ]}
      />

      {/* Resources */}

      <FacilityResources
        title="Digital Learning Resources"
        subtitle="Useful academic platforms available for students."

        resources={[
          {
            title: "National Digital Library",
            description:
              "Access thousands of academic books and journals.",
            url: "https://ndl.iitkgp.ac.in",
            badge: "Government of India",
          },
          {
            title: "NPTEL",
            description:
              "Online courses offered by IITs and IISc.",
            url: "https://nptel.ac.in",
            badge: "IIT",
          },
          {
            title: "SWAYAM",
            description:
              "Government online learning platform.",
            url: "https://swayam.gov.in",
            badge: "MOOC",
          },
          {
            title: "INFLIBNET",
            description:
              "Digital academic information services.",
            url: "https://www.inflibnet.ac.in",
          },
          {
            title: "ScienceDirect",
            description:
              "Engineering journals and research papers.",
            url: "https://www.sciencedirect.com",
          },
          {
            title: "e-ShodhSindhu",
            description:
              "National research journal consortium.",
            url: "https://ess.inflibnet.ac.in",
          },
        ]}
      />

      {/* Faculty */}

      <FacilityStaff
        title="Library Administration"

        members={[
          {
            name: "Alauddin Ansari",
            designation: "Assistant Professor",
            department: "Electrical Engineering",
            role: "Professor In-Charge",
            image: "/faculty/alauddin.jpg",
          },
          {
            name: "Shweta Kumari",
            designation: "Assistant Professor",
            department: "Computer Science & Engineering",
            role: "Professor In-Charge",
            image: "/faculty/shweta.jpg",
          },
          {
            name: "Library Staff",
            designation: "Technical Assistant",
            department: "Central Library",
            role: "Library Operations",
          },
        ]}
      />
    </FacilityPage>
  );
}