import {
    CalendarDays,
    FileSearch,
    Inbox,
} from "lucide-react";

export interface RTIStatusData {
    institution: string;
    department: string;
    session: string;
    totalApplications: number;
    status: string;
}

interface RTIStatusProps {
    statusData?: RTIStatusData | null;
}

// Temporary data
const tempStatus: RTIStatusData | null = {
    institution: "Katihar Engineering College (KEC)",
    department:
        "Under the Department of Science, Technology & Technical Education, Government of Bihar",
    session: "2025-26",
    totalApplications: 0,
    status: "No RTI applications have been filed.",
};

export default function RTIStatus({
    statusData = tempStatus,
}: RTIStatusProps) {
    if (!statusData) {
        return (
            <div className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl border bg-card text-center shadow-sm">
                <Inbox className="mb-5 h-20 w-20 text-muted-foreground/30" />

                <h2 className="text-3xl font-bold">
                    Status Not Available
                </h2>

                <p className="mt-3 max-w-md text-muted-foreground">
                    RTI status information is currently unavailable.
                    Please check again later.
                </p>
            </div>
        );
    }

    return (
        <section className="space-y-8">

            {/* Banner */}

            <div className="rounded-3xl bg-primary px-8 py-4 shadow-lg">
                <div className="flex items-center justify-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <FileSearch className="h-8 w-8 text-primary-foreground" />
                    </div>

                    <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                        RTI Status
                    </h1>
                </div>
            </div>

            {/* Card */}

            <div className="rounded-3xl border bg-card p-8 shadow-sm">

                <div className="text-center">

                    <h2 className="text-3xl font-bold">
                        {statusData.institution}
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                        {statusData.department}
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        Session: {statusData.session}
                    </div>

                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                    <div className="rounded-2xl border bg-primary/5 p-8 text-center">

                        <h3 className="text-lg font-semibold">
                            RTI Applications
                        </h3>

                        <p className="mt-4 text-5xl font-bold text-primary">
                            {statusData.totalApplications}
                        </p>

                    </div>

                    <div className="rounded-2xl border bg-primary/5 p-8 text-center">

                        <h3 className="text-lg font-semibold">
                            Current Status
                        </h3>

                        <p className="mt-4 text-lg font-medium">
                            {statusData.status}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}