import ImportantLinks from "./ImportantLinks";
import LatestNotices from "./LatestNotices";
import LatestTenders from "./LatestTenders";

export default function HomeWidgets() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      <ImportantLinks />
      <LatestNotices />
      <LatestTenders />
    </div>
  );
}