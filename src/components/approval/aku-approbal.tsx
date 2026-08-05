import {
    CalendarDays,
    Download,
    FileCheck,
    FileText,
} from "lucide-react";

export interface AKUApprovalData {
    title: string;
    description: string;
    issuedOn: string;
    fileUrl?: string;
}

interface AKUApprovalProps {
    approval?: AKUApprovalData;
}

// Temporary data for development
const tempApproval: AKUApprovalData = {
    title: "AKU Approval Letter",
    description:
        "Official affiliation approval issued by Aryabhatta Knowledge University, Government of Bihar.",
    issuedOn: "06 September 2011",
    fileUrl: "/documents/aku.pdf#toolbar=0&navpanes=0&scrollbar=0" // Add the PDF URL later
};

export default function AKUApproval({
    approval = tempApproval,
}: AKUApprovalProps) {
    return (
        <section className="space-y-8">
            {/* Banner */}
            <div className="rounded-3xl bg-primary px-8 py-4 shadow-lg">
                <div className="flex items-center justify-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <FileCheck className="h-8 w-8 text-primary-foreground" />
                    </div>

                    <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                        AKU Approval
                    </h1>
                </div>
            </div>

            {/* Information Card */}
            <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                            <FileText className="h-7 w-7 text-primary" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                {approval.title}
                            </h2>

                            <p className="mt-2 text-muted-foreground">
                                {approval.description}
                            </p>

                            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <CalendarDays className="h-4 w-4" />
                                Issued on:
                                <span className="font-medium">
                                    {approval.issuedOn}
                                </span>
                            </div>
                        </div>
                    </div>

                    {approval.fileUrl && (
                        <a
                            href={approval.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                        >
                            <Download className="h-5 w-5" />
                            Download PDF
                        </a>
                    )}
                </div>
            </div>

            {/* PDF Preview */}
            <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
                <div className="border-b px-6 py-4">
                    <h3 className="text-lg font-semibold">
                        Document Preview
                    </h3>
                </div>

                {approval.fileUrl ? (
                    <iframe
                        src={approval.fileUrl}
                        title="AKU Approval PDF"
                        className="h-[950px] w-full"
                    />
                ) : (
                    <div className="flex h-[600px] flex-col items-center justify-center">
                        <FileText className="mb-4 h-16 w-16 text-muted-foreground/30" />

                        <h3 className="text-xl font-semibold">
                            PDF Not Available
                        </h3>

                        <p className="mt-2 text-center text-muted-foreground">
                            The approval document will be available here once it
                            has been uploaded.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}