import {
  Wifi,
  Router,
  Shield,
  Globe,
  Laptop,
  Network,
  Server,
  MonitorSmartphone,
} from "lucide-react";

import FacilityPage from "@/components/facilities/FacilityPage";
import FacilityStats from "@/components/facilities/FacilityStats";
import FacilityDescription from "@/components/facilities/FacilityDescription";
import FacilityFeatures from "@/components/facilities/FacilityFeatures";
import FacilityGallery from "@/components/facilities/FacilityGallery";
import FacilityResources from "@/components/facilities/FacilityResources";
import FacilityStaff from "@/components/facilities/FacilityStaff";

export default function WifiPage() {
  return (
    <FacilityPage
      title="Campus Wi-Fi"
      badge="Digital Infrastructure"
      subtitle="Katihar Engineering College provides internet connectivity to support teaching, learning, research and administrative activities across the campus."
      image="/images/wifi/wifi.jpg"
    >
      {/* Stats */}

      <FacilityStats
        stats={[
          {
            icon: <Wifi size={30} />,
            title: "Wi-Fi Coverage",
            value: "Campus",
            description: "Academic Areas",
          },
          {
            icon: <Network size={30} />,
            title: "LAN",
            value: "Available",
            description: "Department Labs",
          },
          {
            icon: <Globe size={30} />,
            title: "Internet",
            value: "24×7",
            description: "Academic Access",
          },
          {
            icon: <Server size={30} />,
            title: "Network",
            value: "Managed",
            description: "Central Administration",
          },
        ]}
      />

      {/* About */}

      <FacilityDescription
        title="About Campus Network"
        description={`The campus network provides internet connectivity to support academic activities, digital learning, online resources and institutional services.

Students and faculty can access online learning platforms, research materials, virtual laboratories and educational resources through the campus network.

The network infrastructure is maintained to ensure secure and reliable connectivity for academic use.`}
        highlights={[
          "Campus Wi-Fi",
          "Department LAN",
          "Online Learning",
          "Digital Resources",
          "Research Support",
          "Secure Network",
          "Academic Access",
          "Central Monitoring",
        ]}
      />

      {/* Features */}

      <FacilityFeatures
        title="Network Services"
        subtitle="Modern networking infrastructure supporting digital education."
        features={[
          {
            title: "Campus Wi-Fi",
            description:
              "Wireless internet access across academic areas.",
            icon: Wifi,
          },
          {
            title: "High-Speed LAN",
            description:
              "Reliable wired connectivity for laboratories and offices.",
            icon: Network,
          },
          {
            title: "Digital Learning",
            description:
              "Supports online classes, MOOCs and virtual learning.",
            icon: Laptop,
          },
          {
            title: "Secure Access",
            description:
              "Protected internet environment for students and faculty.",
            icon: Shield,
          },
          {
            title: "Network Management",
            description:
              "Centralized monitoring and maintenance of the campus network.",
            icon: Router,
          },
          {
            title: "Smart Campus",
            description:
              "Connectivity for academic and administrative services.",
            icon: MonitorSmartphone,
          },
        ]}
      />

      {/* Gallery */}

      <FacilityGallery
        title="Campus Network Gallery"
        subtitle="A glimpse of the digital infrastructure."

        images={[
          {
            src: "/images/wifi/1.jpg",
            alt: "Campus Wi-Fi",
          },
          {
            src: "/images/wifi/2.jpg",
            alt: "Networking Equipment",
          },
          {
            src: "/images/wifi/3.jpg",
            alt: "Computer Laboratory",
          },
          {
            src: "/images/wifi/4.jpg",
            alt: "Students Using Wi-Fi",
          },
          {
            src: "/images/wifi/5.jpg",
            alt: "Digital Classroom",
          },
          {
            src: "/images/wifi/6.jpg",
            alt: "Network Infrastructure",
          },
        ]}
      />

      {/* Resources */}

      <FacilityResources
        title="Network Resources"
        subtitle="Useful information and digital services."

        resources={[
          {
            title: "Network Usage Policy",
            description:
              "Guidelines for responsible use of the campus network.",
            url: "#",
            badge: "Policy",
          },
          {
            title: "Digital Learning Platforms",
            description:
              "Access educational resources and online learning portals.",
            url: "https://swayam.gov.in",
            badge: "Learning",
          },
          {
            title: "NPTEL",
            description:
              "Engineering courses from IITs and IISc.",
            url: "https://nptel.ac.in",
          },
          {
            title: "National Digital Library",
            description:
              "Access digital books, journals and research materials.",
            url: "https://ndl.iitkgp.ac.in",
          },
          {
            title: "Support",
            description:
              "Contact the Computer Centre for connectivity issues.",
            url: "#",
          },
          {
            title: "Academic Services",
            description:
              "Internet services supporting research and coursework.",
            url: "#",
          },
        ]}
      />

      {/* Staff */}

      <FacilityStaff
        title="Network Administration"

        members={[
          {
            name: "Computer Centre Coordinator",
            designation: "Faculty Coordinator",
            department: "Computer Centre",
            role: "Network Administrator",
          },
          {
            name: "Technical Assistant",
            designation: "Technical Staff",
            department: "Computer Centre",
            role: "Network Support",
          },
        ]}
      />
    </FacilityPage>
  );
}