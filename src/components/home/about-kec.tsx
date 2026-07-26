import Image from "next/image";
import Link from "next/link";

export default function AboutKEC() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[560px] overflow-hidden rounded-3xl bg-white p-3 shadow-xl ring-1 ring-green-100">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/college.png"
                  alt="Katihar Engineering College"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              About Us
            </span>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              About KEC
            </h2>

            {/* Underline */}
            <div className="mt-5 h-1 w-24 rounded-full bg-green-700"></div>

            {/* Content */}
            <div className="mt-8 space-y-6 text-justify text-[17px] leading-8 text-gray-700">
              <p>
                <strong className="text-gray-900">
                  Katihar Engineering College (KEC)
                </strong>{" "}
                was established in{" "}
                <span className="font-semibold text-green-700">2016</span> with
                the vision of delivering quality technical education and
                preparing students to meet the growing demands of modern
                engineering and technology.
              </p>

              <p>
                The college provides a positive learning environment with
                dedicated faculty members and enthusiastic students. Initially,
                it offered three undergraduate programs in{" "}
                <span className="font-semibold text-green-700">
                  Civil Engineering, Mechanical Engineering, and Computer
                  Science & Engineering.
                </span>
              </p>

              <p>
                KEC features experienced faculty, well-equipped laboratories, a
                central library, modern computer labs, a Training & Placement
                Cell, the Programmer's Club, and advanced infrastructure to
                support academic excellence.
              </p>

              <p>
                Students are encouraged to participate in technical, cultural,
                and innovation-based activities, where they have consistently
                demonstrated excellence and earned recognition from prestigious
                institutions.
              </p>

              <p>
                The college is conveniently located{" "}
                <span className="font-semibold text-green-700">
                  3 km from Katihar Railway Station
                </span>
                . Its modern campus at Hajipur, Katihar, near NH-31, is fully
                operational and offers excellent academic and transportation
                facilities.
              </p>
            </div>

            {/* Button */}
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center rounded-xl bg-green-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}