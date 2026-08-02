'use client';

import Image from 'next/image';
import { Building2, User, Phone, Mail, Link as LinkIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

// Shape of one web-team member card. Replace `teamMembers` below with data
// from your API/CMS later -- the component itself doesn't change.
export type WebTeamMember = {
  id: string | number;
  name: string;
  studentTag: string; // e.g. "Student 2K18"
  department: string;
  designation: string;
  phone?: string;
  email: string;
  photo: string;
  profileUrl?: string;
};

// ---- Constant sample data for now ----
const teamMembers: WebTeamMember[] = [
    {
  id: 1,
  name: 'Md Talib Ahmad',
  studentTag: 'Assistant Professor',
  department: 'Computer Science and Engineering',
  designation: 'Assistant Professor & KEC Web Head',
  email: 'talib@keck.ac.in',
  photo: '/images/talibsir-kec.jpg', // Save the image as talib.jpg in /public/images
  profileUrl: '#', // Replace with actual profile URL if available
},
  {
    id: 2,
    name: 'Gourav Kumar',
    studentTag: 'Student 2K18',
    department: 'Computer Science and Engineering',
    designation: 'DevOps',
    email: 'gouravk842@gmail.com',
    photo: '/images/gourav.jpg',
    profileUrl: '#',
  },
  {
    id: 3,
    name: 'Vishal Kumar Singh',
    studentTag: 'Student 2K20',
    department: 'Computer Science and Engineering',
    designation: 'Web Developer',
    phone: '+91-8178572536',
    email: 'vishalkrsinghmsk@gmail.com',
    photo: '/images/vks.jpg',
    profileUrl: '#',
  },
  {
    id: 4,
    name: 'Abhishek Raj',
    studentTag: 'Student 2K21',
    department: 'Computer Science and Engineering',
    designation: 'Web Developer',
    phone: '+91-9835037718',
    email: 'abhisinghal276@gmail.com',
    photo: '/images/abhi.jpg',
    profileUrl: '#',
  },
];

interface KecWebDevTeamProps {
  data?: WebTeamMember[];
}

export default function KecWebDevTeam({
  data = teamMembers,
}: KecWebDevTeamProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-3.5 pb-3.5">
      <h2 className="text-xl font-bold text-[#0b5c3f] sm:text-2xl">KEC Web Team</h2>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#5b6b62]">
        List of Website Developers
      </p>
      <div className="mb-6 mt-1.5 h-0.75 w-17.5 rounded-full bg-[#c9922a] sm:mb-8" />

      <Carousel opts={{ align: 'start' }} className="w-full">
        <CarouselContent className="-ml-4 sm:-ml-6">
          {data.map((item) => (
            <CarouselItem key={item.id} className="basis-full pl-4 sm:pl-6">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#0b5c3f] bg-[#fffefb] shadow-md sm:flex-row">
                <div className="flex shrink-0 items-center justify-center bg-[#eaf7ee] px-6 py-8 sm:w-64 sm:py-10">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#0b5c3f] bg-white sm:h-36 sm:w-36">
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 144px, 112px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-[#5b6b62]">
                        Photo
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center px-6 py-6 text-center sm:items-start sm:px-8 sm:py-8 sm:text-left">
                  <h3 className="text-xl font-bold text-[#173420] sm:text-2xl">
                    {item.name}{' '}
                    <span className="text-sm font-semibold text-[#5b6b62] sm:text-base">
                      ({item.studentTag})
                    </span>
                  </h3>

                  <div className="mt-3 flex flex-col items-center gap-2 text-sm text-[#173420] sm:items-start sm:text-base">
                    <p className="flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 shrink-0 text-[#0b5c3f] sm:h-5 sm:w-5" aria-hidden />
                      <span>
                        <span className="font-semibold text-[#0b5c3f]">Department:</span>{' '}
                        {item.department}
                      </span>
                    </p>

                    <p className="flex items-center gap-1.5">
                      <User className="h-4 w-4 shrink-0 text-[#0b5c3f] sm:h-5 sm:w-5" aria-hidden />
                      <span>
                        <span className="font-semibold text-[#0b5c3f]">Designation:</span>{' '}
                        {item.designation}
                      </span>
                    </p>

                    {item.phone && (
                      <p className="flex items-center gap-1.5">
                        <Phone className="h-4 w-4 shrink-0 text-[#0b5c3f] sm:h-5 sm:w-5" aria-hidden />
                        <span>
                          <span className="font-semibold text-[#0b5c3f]">Phone Number:</span>{' '}
                          {item.phone}
                        </span>
                      </p>
                    )}

                    <p className="flex flex-wrap items-center justify-center gap-1.5 sm:justify-start">
                      <Mail className="h-4 w-4 shrink-0 text-[#0b5c3f] sm:h-5 sm:w-5" aria-hidden />
                      <span className="font-semibold text-[#0b5c3f]">Email Address:</span>
                      <a
                        href={`mailto:${item.email}`}
                        className="break-all text-[#1d6fd6] hover:underline"
                      >
                        {item.email}
                      </a>
                    </p>
                  </div>

                  {item.profileUrl && (
                    <a
                      href={item.profileUrl}
                      className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0b5c3f] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#c9922a] sm:mt-auto"
                    >
                      <LinkIcon className="h-4 w-4" aria-hidden />
                      Visit Profile Page
                    </a>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 h-9 w-9 border-none bg-[#0b5c3f] text-white hover:bg-[#c9922a] hover:text-white disabled:bg-[#b9c9c0] sm:-left-12 sm:h-11 sm:w-11" />
        <CarouselNext className="right-2 h-9 w-9 border-none bg-[#0b5c3f] text-white hover:bg-[#c9922a] hover:text-white disabled:bg-[#b9c9c0] sm:-right-12 sm:h-11 sm:w-11" />
      </Carousel>
    </section>
  );
}