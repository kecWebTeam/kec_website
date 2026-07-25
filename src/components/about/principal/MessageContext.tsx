import {
  Quote,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function MessageContent() {
  return (
    <div className="space-y-10">

      {/* Welcome Card */}

      <div className="rounded-3xl border border-green-100 bg-linear-to-r from-[rgb(14,110,74)] to-[rgb(20,145,98)] p-8 text-white shadow-xl">

        <div className="flex items-center gap-4">

          <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">

            <Sparkles size={28} />

          </div>

          <div>

            <p className="uppercase tracking-[5px] text-sm opacity-90">
              Welcome
            </p>

            <h2 className="text-3xl font-bold">
              A Message from the Principal
            </h2>

          </div>

        </div>

      </div>

      {/* Quote */}

      <div className="relative rounded-3xl bg-green-50 border-l-[6px] border-[rgb(14,110,74)] p-8">

        <Quote
          size={40}
          className="absolute right-8 top-6 text-green-200"
        />

        <p className="text-2xl italic leading-10 font-medium text-gray-700">
          Education is not merely the acquisition of knowledge,
          but the cultivation of character, discipline,
          compassion, and the courage to innovate.
        </p>

      </div>

      {/* Content */}

      <div className="space-y-8 text-[17px] leading-9 text-gray-700">

        <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[rgb(14,110,74)] first-letter:mr-2 first-letter:float-left">

          It gives me immense pleasure to welcome you to
          <span className="font-semibold text-[rgb(14,110,74)]">
            {" "}
            Katihar Engineering College,
          </span>{" "}
          an institution committed to academic excellence,
          innovation, and holistic development.

        </p>

        <p>

          We believe that education extends beyond classrooms.
          It is a continuous journey of acquiring knowledge,
          developing values, and nurturing the confidence
          required to face the ever-changing technological
          world.

        </p>

        <p>

          Our dedicated faculty members strive to provide
          students with quality education, practical exposure,
          research opportunities, and ethical values that
          prepare them to become responsible engineers and
          future leaders.

        </p>

        <p>

          At Katihar Engineering College, every student is
          encouraged to think creatively, solve real-world
          challenges, embrace innovation, and contribute
          positively to society through engineering and
          technology.

        </p>

        <p>

          I invite every aspiring student to become a part of
          this wonderful academic family and make the most of
          the opportunities available on our campus.

        </p>

      </div>

      {/* Highlight */}

      <div className="rounded-3xl border border-green-100 bg-white shadow-md p-8">

        <div className="flex gap-5">

          <div className="h-14 w-14 rounded-full bg-[rgb(14,110,74)]/10 flex items-center justify-center shrink-0">

            <BookOpen
              size={30}
              className="text-[rgb(14,110,74)]"
            />

          </div>

          <div>

            <h3 className="text-xl font-semibold text-gray-800">

              Our Vision

            </h3>

            <p className="mt-3 leading-8 text-gray-600">

              To inspire young minds through quality education,
              innovative research, ethical values, and
              technological excellence while contributing to the
              sustainable development of society.

            </p>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="rounded-3xl bg-linear-to-r from-green-50 to-white border border-green-100 p-8">

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

          <div>

            <h3 className="text-2xl font-bold text-gray-800">

              Together We Build the Future

            </h3>

            <p className="mt-2 text-gray-600">

              Knowledge • Innovation • Excellence • Integrity

            </p>

          </div>

          <button
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[rgb(14,110,74)]
            px-7
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            hover:shadow-xl
          "
          >

            Explore College

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </div>
  );
}