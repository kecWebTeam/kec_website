import {
    CalendarDays,
    Download,
    FileSearch,
    FileText,
} from "lucide-react";

export interface RTIActData {
    title: string;
    description: string;
    enactedOn: string;
    fileUrl?: string;
}

interface RTIActProps {
    rtiAct?: RTIActData | null;
}

// Temporary data (Remove when API is integrated)
const tempRTIAct: RTIActData | null = {
    title: "Right to Information Act, 2005",
    description:
        "The Right to Information Act, 2005 provides citizens the right to access information held by public authorities, promoting transparency and accountability.",
    enactedOn: "15 June 2005",
    fileUrl: "/documents/rti-act-2.pdf#toolbar=0&navpanes=0&scrollbar=0",
};

export default function RTIAct({
    rtiAct = tempRTIAct,
}: RTIActProps) {
    // Page not available
    if (!rtiAct) {
        return (
            <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border bg-card text-center shadow-sm">
                <FileSearch className="mb-5 h-20 w-20 text-muted-foreground/30" />

                <h2 className="text-3xl font-bold">
                    Page Not Available
                </h2>

                <p className="mt-3 max-w-md text-muted-foreground">
                    The requested RTI Act page is currently unavailable.
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
                        RTI Act 2005
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
                                {rtiAct.title}
                            </h2>

                            <p className="mt-2 leading-7 text-muted-foreground">
                                {rtiAct.description}
                            </p>

                            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>{rtiAct.enactedOn}</span>
                                </div>

                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    PDF Document
                                </span>

                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                    Public Document
                                </span>
                            </div>
                        </div>
                    </div>

                    {rtiAct.fileUrl && (
                        <a
                            href={rtiAct.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                        >
                            <Download className="h-5 w-5" />
                            Download PDF
                        </a>
                    )}
                </div>
            </div>

            {/* Document Preview */}
            <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
                <div className="border-b px-6 py-4">
                    <h3 className="text-lg font-semibold">
                        Document Preview
                    </h3>

                    {rtiAct.fileUrl && (
                        <p className="mt-1 text-sm text-muted-foreground">
                            If the preview doesn't load, use the Download PDF button above.
                        </p>
                    )}
                </div>

                {rtiAct.fileUrl ? (
                    <iframe
                        src={rtiAct.fileUrl}
                        title={rtiAct.title}
                        loading="lazy"
                        className="h-[600px] w-full md:h-[850px] xl:h-[1000px]"
                    />
                ) : (
                    <div className="flex h-[500px] flex-col items-center justify-center">
                        <FileText className="mb-5 h-16 w-16 text-muted-foreground/30" />

                        <h3 className="text-2xl font-semibold">
                            Document Not Available
                        </h3>

                        <p className="mt-3 max-w-md text-center text-muted-foreground">
                            The RTI Act 2005 document has not been uploaded yet.
                            Please check back later.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}