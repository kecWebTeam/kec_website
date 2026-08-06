import {
    Mail,
    Phone,
    UserRound,
    Building2,
    BadgeInfo,
} from "lucide-react";

export interface PublicInformationOfficerData {
    name: string;
    designation: string;
    office: string;
    email: string;
    phone: string;
}

interface PublicInformationOfficerProps {
    officer?: PublicInformationOfficerData | null;
}

// Temporary data
const tempOfficer: PublicInformationOfficerData | null = {
    name: "To Be Updated",
    designation: "Public Information Officer (PIO)",
    office: "Katihar Engineering College",
    email: "pio@keck.ac.in",
    phone: "+91 XXXXX XXXXX",
};

export default function PublicInformationOfficer({
    officer = tempOfficer,
}: PublicInformationOfficerProps) {
    if (!officer) {
        return (
            <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border bg-card text-center shadow-sm">
                <BadgeInfo className="mb-5 h-20 w-20 text-muted-foreground/30" />

                <h2 className="text-3xl font-bold">
                    Information Not Available
                </h2>

                <p className="mt-3 max-w-md text-muted-foreground">
                    Public Information Officer details are currently unavailable.
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
                        <BadgeInfo className="h-8 w-8 text-primary-foreground" />
                    </div>

                    <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                        Public Information Officer
                    </h1>
                </div>
            </div>

            {/* Officer Details */}
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                        <UserRound className="h-12 w-12 text-primary" />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold">
                        {officer.name}
                    </h2>

                    <p className="mt-2 text-lg font-medium text-primary">
                        {officer.designation}
                    </p>

                    <p className="mt-1 text-muted-foreground">
                        {officer.office}
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="flex items-center gap-4 rounded-2xl border p-5">
                        <Mail className="h-6 w-6 text-primary" />

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Email
                            </p>

                            <p className="font-medium">
                                {officer.email}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border p-5">
                        <Phone className="h-6 w-6 text-primary" />

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Phone
                            </p>

                            <p className="font-medium">
                                {officer.phone}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border p-5 md:col-span-2">
                        <Building2 className="h-6 w-6 text-primary" />

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Office
                            </p>

                            <p className="font-medium">
                                {officer.office}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}