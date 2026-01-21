"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
    open: boolean;
    onClose: () => void;
}

export function RequestDemoModal({ open, onClose }: Props) {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setError(false);

        const form = e.currentTarget;

        try {
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form,
                "YOUR_PUBLIC_KEY"
            );
            setSent(true);
            form.reset();
        } catch {
            setError(true);
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center px-4">
            <div className="bg-slate-900 w-full max-w-lg rounded-xl p-8 relative text-white shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                    <X />
                </button>

                <h3 className="text-3xl mb-6 font-semibold">Request a Demo</h3>

                {sent ? (
                    <div className="text-green-400 text-lg">
                        Thanks — we’ll be in touch shortly.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            required
                            name="name"
                            placeholder="Full name"
                            className="w-full rounded-md bg-slate-800 border border-white/10 px-4 py-3"
                        />

                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Work email"
                            className="w-full rounded-md bg-slate-800 border border-white/10 px-4 py-3"
                        />

                        <input
                            name="organization"
                            placeholder="Organization"
                            className="w-full rounded-md bg-slate-800 border border-white/10 px-4 py-3"
                        />

                        <textarea
                            name="message"
                            placeholder="Tell us a bit about yourself and what you're looking to improve"
                            rows={4}
                            className="w-full rounded-md bg-slate-800 border border-white/10 px-4 py-3"
                        />

                        {error && (
                            <div className="text-red-400 text-sm">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={sending}
                            className="w-full bg-white text-slate-900 hover:bg-gray-200"
                        >
                            {sending ? "Sending..." : "Submit Request"}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}
