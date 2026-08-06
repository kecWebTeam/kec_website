import {
  Building2,
  CreditCard,
  Landmark,
  Wallet,
  FileText,
  Smartphone,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import FacilityPage from "@/components/facilities/FacilityPage";
import FacilityStats from "@/components/facilities/FacilityStats";
import FacilityDescription from "@/components/facilities/FacilityDescription";
import FacilityFeatures from "@/components/facilities/FacilityFeatures";
import FacilityGallery from "@/components/facilities/FacilityGallery";
import FacilityResources from "@/components/facilities/FacilityResources";
import FacilityStaff from "@/components/facilities/FacilityStaff";

export default function BankPage() {
  return (
    <FacilityPage
      title="Banking Facility"
      badge="Student Services"
      subtitle="Banking and financial services are available to assist students with fee payment and other academic financial requirements."
      image="/images/bank/bank.png"
    >
      {/* Stats */}

      <FacilityStats
        stats={[
          {
            icon: <Building2 size={30} />,
            title: "Banking",
            value: "Available",
            description: "Student Support",
          },
          {
            icon: <CreditCard size={30} />,
            title: "Fee Payment",
            value: "Online",
            description: "Digital Payment Options",
          },
          {
            icon: <ShieldCheck size={30} />,
            title: "Secure",
            value: "100%",
            description: "Safe Transactions",
          },
          {
            icon: <Clock3 size={30} />,
            title: "Support",
            value: "Working Days",
            description: "Office Assistance",
          },
        ]}
      />

      {/* About */}

      <FacilityDescription
        title="About Banking Facility"
        description={`Katihar Engineering College facilitates banking-related services to simplify financial transactions for students.

Students can use banking facilities for academic fee payments and other institutional financial requirements.

The college also provides guidance regarding payment procedures and official notifications related to fee submission.`}
        highlights={[
          "Online Fee Payment",
          "Student Assistance",
          "Secure Transactions",
          "Payment Guidance",
          "Official Notifications",
          "Academic Fee Support",
          "Digital Banking",
          "Quick Processing",
        ]}
      />

      {/* Features */}

      <FacilityFeatures
        title="Available Services"
        subtitle="Financial services designed for student convenience."
        features={[
          {
            title: "Online Fee Payment",
            description:
              "Convenient payment of academic fees using digital methods.",
            icon: CreditCard,
          },
          {
            title: "Banking Assistance",
            description:
              "Support for banking-related queries during admission and fee submission.",
            icon: Landmark,
          },
          {
            title: "Digital Transactions",
            description:
              "Modern payment options for academic services.",
            icon: Smartphone,
          },
          {
            title: "Payment Records",
            description:
              "Maintain transaction records for future reference.",
            icon: FileText,
          },
          {
            title: "Secure Payments",
            description:
              "Payment process designed with security in mind.",
            icon: ShieldCheck,
          },
          {
            title: "Financial Guidance",
            description:
              "Information regarding institutional payment procedures.",
            icon: Wallet,
          },
        ]}
      />

      {/* Gallery */}

      <FacilityGallery
        title="Banking Services"
        subtitle="Financial support and payment services."

        images={[
          {
            src: "/images/bank/1.jpg",
            alt: "Banking Assistance",
          },
          {
            src: "/images/bank/2.png",
            alt: "Fee Payment",
          },
          {
            src: "/images/bank/3.jpg",
            alt: "Student Help Desk",
          },
        ]}
      />

      {/* Resources */}

      <FacilityResources
        title="Useful Resources"
        subtitle="Important banking and payment-related information."

        resources={[
          {
            title: "Fee Payment Portal",
            description:
              "Access the official online fee payment system.",
            url: "#",
            badge: "Official",
          },
          {
            title: "Fee Structure",
            description:
              "Latest fee structure and payment schedule.",
            url: "#",
          },
          {
            title: "Payment Instructions",
            description:
              "Step-by-step guide for successful fee payment.",
            url: "#",
          },
          {
            title: "Scholarship Information",
            description:
              "Information about scholarships and financial assistance.",
            url: "#",
          },
          {
            title: "Important Notices",
            description:
              "Latest payment and admission notifications.",
            url: "#",
          },
          {
            title: "Student Support",
            description:
              "Contact the college office for banking-related queries.",
            url: "#",
          },
        ]}
      />

      {/* Staff */}

      <FacilityStaff
        title="Support Team"
        members={[
          {
            name: "Accounts Office",
            designation: "Administrative Office",
            department: "Finance",
            role: "Fee & Payment Support",
          },
          {
            name: "Student Help Desk",
            designation: "Administrative Support",
            department: "Administration",
            role: "Student Assistance",
          },
        ]}
      />
    </FacilityPage>
  );
}