import PrincipalProfile from "@/components/about/principal/PrincipalProfile";
import MessageContent from "@/components/about/principal/MessageContext";
import SignatureCard from "@/components/about/principal/SignatureCard";

export default function PrincipalMessage() {
  return (
    <section className="w-full">

      <div className="rounded-[32px] border border-green-100 bg-white shadow-xl overflow-hidden">

        <div className="p-10 lg:p-14">

          {/* Heading */}

          <div className="text-center mb-14">

            <h1 className="text-5xl font-bold text-[rgb(14,110,74)]">
              Principal's Message
            </h1>

            <div className="mt-4 flex justify-center">
              <div className="h-1 w-28 rounded-full bg-[rgb(14,110,74)]"></div>
            </div>

          </div>

          <div className="grid lg:grid-cols-12 gap-12">

            {/* Image */}

            <div className="lg:col-span-3">
              <PrincipalProfile />
            </div>

            {/* Message */}

            <div className="lg:col-span-9">
              <MessageContent />
            </div>

          </div>

          <div className="my-10 border-t border-dashed border-green-200" />

          <SignatureCard />

        </div>

      </div>

    </section>
  );
}