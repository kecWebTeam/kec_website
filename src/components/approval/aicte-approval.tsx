import { Download, FileCheck, FileText } from "lucide-react";

export interface AICTEDocument {
    id: string;
    year: number;
    title: string;
    fileUrl: string;
}

interface AICTEApprovalProps {
    documents?: AICTEDocument[];
}

// Temporary data
const tempDocuments: AICTEDocument[] = [
    {
        id: "1",
        year: 2025,
        title: "AICTE Approval Letter",
        fileUrl: "/documents/sample.pdf#toolbar=0&navpanes=0&scrollbar=0",
    },
];

export default function AICTEApproval({
    documents = tempDocuments,
}: AICTEApprovalProps) {
    return (
        <section className="space-y-8">
            {/* Banner Heading */}
            <div className="rounded-3xl bg-primary px-8 py-4 shadow-lg">
                <div className="flex items-center justify-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <FileCheck className="h-8 w-8 text-white" />
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                        AICTE Approval
                    </h1>
                </div>
            </div>

            {/* Documents Table */}
            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                {/* Desktop Header */}
                <div className="hidden grid-cols-12 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground md:grid">
                    <div className="col-span-2">Year</div>
                    <div className="col-span-7">Document</div>
                    <div className="col-span-3 text-right">Download</div>
                </div>

                {documents.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <FileText className="mb-4 h-12 w-12 text-gray-300" />

                        <h3 className="text-lg font-semibold">
                            No AICTE Documents Available
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Documents will appear here once uploaded.
                        </p>
                    </div>
                ) : (
                    documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="border-b last:border-b-0"
                        >
                            {/* Desktop */}
                            <div className="hidden grid-cols-12 items-center px-6 py-5 transition hover:bg-muted/30 md:grid">
                                <div className="col-span-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                        {doc.year}
                                    </span>
                                </div>

                                <div className="col-span-7 flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-primary" />

                                    <span className="font-medium">
                                        {doc.title}
                                    </span>
                                </div>

                                <div className="col-span-3 flex justify-end">
                                    <a
                                        href={doc.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download
                                    </a>
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="space-y-4 p-5 md:hidden">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-6 w-6 text-primary" />

                                    <div className="flex-1">
                                        <p className="font-semibold">
                                            {doc.title}
                                        </p>

                                        <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                            {doc.year}
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href={doc.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                                >
                                    <Download className="h-4 w-4" />
                                    Download Document
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}