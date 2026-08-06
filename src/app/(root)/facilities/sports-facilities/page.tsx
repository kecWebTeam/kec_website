import {
  Trophy,
  Dumbbell,
  Volleyball,
  Shield,
  Users,
  CalendarDays,
  Goal,
  Medal,
} from "lucide-react";

import FacilityPage from "@/components/facilities/FacilityPage";
import FacilityStats from "@/components/facilities/FacilityStats";
import FacilityDescription from "@/components/facilities/FacilityDescription";
import FacilityFeatures from "@/components/facilities/FacilityFeatures";
import FacilityGallery from "@/components/facilities/FacilityGallery";
import FacilityResources from "@/components/facilities/FacilityResources";
import FacilityStaff from "@/components/facilities/FacilityStaff";

export default function SportsPage() {
  return (
    <FacilityPage
      title="Sports & Physical Education"
      badge="Student Life"
      subtitle="Katihar Engineering College encourages students to participate in sports and fitness activities for holistic development, leadership, teamwork and a healthy lifestyle."
      image="/images/sports/sports.jpg"
    >
      {/* Statistics */}

      <FacilityStats
        stats={[
          {
            icon: <Trophy size={30} />,
            title: "Sports",
            value: 10,
            suffix: "+",
            description: "Indoor & Outdoor",
          },
          {
            icon: <Users size={30} />,
            title: "Participation",
            value: "100%",
            description: "Open to All Students",
          },
          {
            icon: <CalendarDays size={30} />,
            title: "Events",
            value: "Annual",
            description: "Sports Meet",
          },
          {
            icon: <Dumbbell size={30} />,
            title: "Fitness",
            value: "Daily",
            description: "Physical Activities",
          },
        ]}
      />

      {/* About */}

      <FacilityDescription
        title="About Sports Facilities"
        description={`Katihar Engineering College promotes physical fitness and sportsmanship by providing facilities for a variety of indoor and outdoor games.

Students are encouraged to participate in inter-department, inter-college and university-level competitions while maintaining a healthy balance between academics and extracurricular activities.`}
        highlights={[
          "Annual Sports Meet",
          "Indoor Games",
          "Outdoor Games",
          "Team Events",
          "Fitness Activities",
          "Inter-College Participation",
          "Leadership Development",
          "Healthy Lifestyle",
        ]}
      />

      {/* Features */}

      <FacilityFeatures
        title="Sports Facilities"
        subtitle="Infrastructure designed to encourage fitness and competitive spirit."
        features={[
          {
            title: "Cricket",
            description: "Practice sessions and inter-department tournaments.",
            icon: Goal,
          },
          {
            title: "Football",
            description: "Outdoor football ground for regular matches.",
            icon: Trophy,
          },
          {
            title: "Volleyball",
            description: "Dedicated volleyball court for students.",
            icon: Volleyball,
          },
          {
            title: "Indoor Games",
            description: "Chess, Carrom and Table Tennis facilities.",
            icon: Medal,
          },
          {
            title: "Fitness",
            description: "Physical fitness activities and training.",
            icon: Dumbbell,
          },
          {
            title: "Safe Environment",
            description: "Well-maintained playgrounds with supervision.",
            icon: Shield,
          },
        ]}
      />

      {/* Gallery */}

      <FacilityGallery
        title="Sports Gallery"
        subtitle="Moments from sporting events and student activities."
        images={[
          {
            src: "/images/sports/1.jpg",
            alt: "Football Ground",
          },
          {
            src: "/images/sports/2.jpg",
            alt: "Cricket Match",
          },
          {
            src: "/images/sports/3.jpg", 
            alt: "Volleyball Court",
          },
          {
            src: "/images/sports/4.jpg",
            alt: "Indoor Games",
          },
          {
            src: "/images/sports/5.jpg",
            alt: "Annual Sports Meet",
          },
          {
            src: "/images/sports/6.jpg",
            alt: "Prize Distribution",
          },
        ]}
      />

      {/* Resources */}

      <FacilityResources
        title="Sports Activities"
        subtitle="Explore student participation opportunities."
        resources={[
          {
            title: "Annual Sports Meet",
            description:
              "College-wide sports competition conducted every academic year.",
            url: "#",
            badge: "Event",
          },
          {
            title: "Inter-College Competitions",
            description:
              "Students represent the college in university and inter-college tournaments.",
            url: "#",
          },
          {
            title: "Sports Committee",
            description:
              "Faculty and student committee managing sports activities.",
            url: "#",
          },
          {
            title: "Practice Schedule",
            description:
              "Regular practice sessions for various sports.",
            url: "#",
          },
        ]}
      />

      {/* Faculty */}

      <FacilityStaff
        title="Sports Committee"
        members={[
          {
            name: "Sports Coordinator",
            designation: "Faculty Coordinator",
            department: "Sports Committee",
            role: "Coordinator",
          },
          {
            name: "Physical Activity In-Charge",
            designation: "Faculty Member",
            department: "Sports Committee",
            role: "Faculty Advisor",
          },
        ]}
      />
    </FacilityPage>
  );
}