import {
  BedDouble,
  Building2,
  ShieldCheck,
  Utensils,
  Wifi,
  Camera,
  Home,
  IndianRupee,
  Users,
} from "lucide-react";

import FacilityPage from "@/components/facilities/FacilityPage";
import FacilityStats from "@/components/facilities/FacilityStats";
import FacilityDescription from "@/components/facilities/FacilityDescription";
import FacilityFeatures from "@/components/facilities/FacilityFeatures";
import FacilityGallery from "@/components/facilities/FacilityGallery";
import FacilityResources from "@/components/facilities/FacilityResources";
import FacilityStaff from "@/components/facilities/FacilityStaff";

export default function HostelPage() {
  return (
    <FacilityPage
      title="Hostel Facilities"
      badge="Student Life"
      subtitle="Safe, comfortable and student-friendly residential facilities with separate hostels for boys and girls."
      image="/images/hostel/hostel.avif"
    >
      {/* Stats */}

      <FacilityStats
        stats={[
          {
            icon: <Building2 size={30} />,
            title: "Hostels",
            value: 3,
            description: "Boys & Girls",
          },
          {
            icon: <BedDouble size={30} />,
            title: "Accommodation",
            value: "On Campus",
            description: "Residential Facility",
          },
          {
            icon: <ShieldCheck size={30} />,
            title: "Security",
            value: "24×7",
            description: "Safe Campus",
          },
          {
            icon: <Utensils size={30} />,
            title: "Mess",
            value: "Available",
            description: "Daily Meals",
          },
        ]}
      />

      {/* About */}

      <FacilityDescription
        title="About Hostel"
        description={`Katihar Engineering College provides separate hostel facilities for boys and girls within the campus.

The hostels are designed to provide a secure and comfortable living environment with academic support, mess facilities and round-the-clock supervision.

Students benefit from a disciplined atmosphere that encourages learning, collaboration and personal development.`}
        highlights={[
          "Separate Boys & Girls Hostels",
          "Mess Facility",
          "24×7 Security",
          "Wi-Fi Ready Campus",
          "Common Room",
          "Clean Drinking Water",
          "Study Environment",
          "Faculty Supervision",
        ]}
      />

      {/* Features */}

      <FacilityFeatures
        title="Hostel Amenities"
        subtitle="Designed for a comfortable and secure student life."
        features={[
          {
            title: "Comfortable Rooms",
            description:
              "Well-maintained rooms with essential furniture for students.",
            icon: Home,
          },
          {
            title: "Dining Facility",
            description:
              "Nutritious meals served through the hostel mess.",
            icon: Utensils,
          },
          {
            title: "Campus Wi-Fi",
            description:
              "Internet connectivity to support academics.",
            icon: Wifi,
          },
          {
            title: "24×7 Security",
            description:
              "Hostel supervision with security personnel.",
            icon: ShieldCheck,
          },
          {
            title: "CCTV Monitoring",
            description:
              "Enhanced safety through surveillance.",
            icon: Camera,
          },
          {
            title: "Common Room",
            description:
              "Space for recreation and interaction.",
            icon: Users,
          },
        ]}
      />

      {/* Gallery */}

      <FacilityGallery
        title="Hostel Gallery"
        subtitle="A glimpse of student residential life."
        images={[
          {
            src: "/images/hostel/1.jpg",
            alt: "Hostel Building",
          },
          {
            src: "/images/hostel/2.avif",
            alt: "Student Rooms",
          },
          {
            src: "/images/hostel/3.png",
            alt: "Mess Hall",
          }
        ]}
      />

      {/* Fees */}

      <FacilityResources
        title="Hostel Fee Structure"
        subtitle="Current hostel-related charges."
        resources={[
          {
            title: "Admission Charge",
            description: "₹1,000 (One Time)",
            url: "https://keck.ac.in/facilities/hostels",
            badge: "Official",
          },
          {
            title: "Maintenance Charge",
            description: "₹7,200 (Six Months)",
            url: "https://keck.ac.in/facilities/hostels",
            badge: "Official",
          },
          {
            title: "Mess Charge",
            description: "₹3,600 per Month",
            url: "https://keck.ac.in/facilities/hostels",
            badge: "Official",
          },
          {
            title: "Hostel Rules",
            description: "Read hostel instructions before admission.",
            url: "https://keck.ac.in/facilities/hostels",
            badge: "PDF",
          },
        ]}
      />

      {/* Administration */}

      <FacilityStaff
        title="Hostel Administration"
        members={[
          {
            name: "Ms. Sneha Kumari",
            designation: "Hostel Superintendent",
            department: "Krishna Girls Hostel",
            role: "Superintendent",
          },
          {
            name: "Mr. Rajeev Ranjan Sinha",
            designation: "Hostel Superintendent",
            department: "Neelgiri Hostel",
            role: "Superintendent",
          },
          {
            name: "Dr. Arbind Prasad",
            designation: "Hostel Superintendent",
            department: "Shivalik Hostel",
            role: "Superintendent",
          },
        ]}
      />
    </FacilityPage>
  );
}