import {
    Mail,
    Phone,
    User,
    FileText,
    Send,
    MessageSquareWarning,
} from "lucide-react";

export default function GrievancePage() {
    return (
        <section className="space-y-8">

            {/* Banner */}

            <div className="rounded-3xl bg-primary px-8 py-4 shadow-lg">
                <div className="flex items-center justify-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <MessageSquareWarning className="h-8 w-8 text-primary-foreground" />
                    </div>

                    <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                        Grievance Cell
                    </h1>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">

                {/* Contact Card */}

                <div className="rounded-3xl border bg-card p-6 shadow-sm">

                    <h2 className="mb-6 text-2xl font-bold">
                        Contact Details
                    </h2>

                    <div className="space-y-6">

                        <div className="flex gap-4">
                            <Mail className="text-primary" />

                            <div>
                                <p className="font-semibold">
                                    Email
                                </p>

                                <p className="text-muted-foreground">
                                    principal@keck.ac.in
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Phone className="text-primary" />

                            <div>
                                <p className="font-semibold">
                                    Phone
                                </p>

                                <p className="text-muted-foreground">
                                    06452-239122
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Form */}

                <div className="lg:col-span-2 rounded-3xl border bg-card p-8 shadow-sm">

                    <h2 className="mb-6 text-2xl font-bold">
                        Raise a Query
                    </h2>

                    <form className="space-y-5">

                        <div className="grid gap-5 md:grid-cols-2">

                            <input
                                placeholder="Full Name"
                                className="rounded-xl border p-3"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="rounded-xl border p-3"
                            />

                            <input
                                placeholder="Phone Number"
                                className="rounded-xl border p-3"
                            />

                            <input
                                placeholder="Registration Number"
                                className="rounded-xl border p-3"
                            />

                        </div>

                        <select className="w-full rounded-xl border p-3">
                            <option>Select Category</option>
                            <option>Academic</option>
                            <option>Examination</option>
                            <option>Hostel</option>
                            <option>Administration</option>
                            <option>Other</option>
                        </select>

                        <textarea
                            rows={6}
                            placeholder="Describe your grievance..."
                            className="w-full rounded-xl border p-3"
                        />

                        <button
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                        >
                            <Send className="h-5 w-5" />
                            Submit Query
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}