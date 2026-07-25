import HistoryContent from "@/components/history/HistoryContent";
import AboutSidebar from "@/components/history/HistoryContent";
import CollegeInfoCard from "@/components/history/CollegeInfoCard";

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