
import Image from "next/image";
import {
  Mail,
  Phone,
  GraduationCap,
  UserRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Staff {
  name: string;
  designation: string;
  department: string;
  role: string;
  email?: string;
  phone?: string;
  image?: string;
}

interface FacilityStaffProps {
  title?: string;
  subtitle?: string;
  members: Staff[];
}

export default function FacilityStaff({
  title = "Faculty In Charge",
  subtitle = "Meet the faculty members responsible for managing this facility.",
  members,
}: FacilityStaffProps) {
  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-10">

        <Badge className="bg-[rgb(14,110,74)] hover:bg-[rgb(14,110,74)]">
          Team
        </Badge>

        <h2 className="mt-4 text-3xl font-bold">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          {subtitle}
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {members.map((member) => (

          <Card
            key={member.name}
            className="
              group
              overflow-hidden
              rounded-3xl
              border-green-100
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[rgb(14,110,74)]
              hover:shadow-2xl
            "
          >

            {/* Top */}

            <div className="relative h-32 bg-linear-to-r from-[rgb(14,110,74)] to-[rgb(20,145,98)]">

              <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">

                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">

                  {member.image ? (

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />

                  ) : (

                    <div className="flex h-full w-full items-center justify-center bg-green-50">

                      <UserRound
                        size={42}
                        className="text-[rgb(14,110,74)]"
                      />

                    </div>

                  )}

                </div>

              </div>

            </div>

            {/* Body */}

            <div className="px-6 pb-7 pt-16">

              <h3 className="text-center text-xl font-bold">

                {member.name}

              </h3>

              <p className="mt-2 text-center text-gray-500">

                {member.designation}

              </p>

              <div className="mt-4 flex justify-center">

                <Badge
                  variant="secondary"
                  className="rounded-full"
                >
                  {member.department}
                </Badge>

              </div>

              <div className="mt-6 rounded-2xl bg-green-50 p-4">

                <div className="flex items-center gap-3">

                  <GraduationCap
                    size={20}
                    className="text-[rgb(14,110,74)]"
                  />

                  <span className="font-medium">

                    {member.role}

                  </span>

                </div>

              </div>

              {(member.email || member.phone) && (

                <div className="mt-6 space-y-3">

                  {member.email && (

                    <div className="flex items-center gap-3 text-sm text-gray-600">

                      <Mail
                        size={16}
                        className="text-[rgb(14,110,74)]"
                      />

                      <span className="truncate">

                        {member.email}

                      </span>

                    </div>

                  )}

                  {member.phone && (

                    <div className="flex items-center gap-3 text-sm text-gray-600">

                      <Phone
                        size={16}
                        className="text-[rgb(14,110,74)]"
                      />

                      <span>

                        {member.phone}

                      </span>

                    </div>

                  )}

                </div>

              )}

            </div>

          </Card>

        ))}

      </div>

    </section>
  );
}