import HistoryContent from "@/components/about/history/HistoryContent";
import AboutSidebar from "@/components/about/history/HistoryContent";
import CollegeInfoCard from "@/components/about/history/CollegeInfoCard";

export default function HistoryPage() {
  return (
    <div className="grid xl:grid-cols-12 gap-8 m-8">
    {/* History */}

    <div className="xl:col-span-6">
        <HistoryContent />
    </div>

    {/* Right */}

    <div className="xl:col-span-6">
        <CollegeInfoCard />
    </div>

</div>

    );

}