import React, { useState } from "react";
import {
    ArrowUpRight,
    CheckCircle2,
    Mail,
    MapPin,
} from "lucide-react";

import ScrollReveal from "../animations/ScrollReveal";
import Card from "../ui/Card";

import {
    PERSONAL_INFO,
    SOCIAL_LINKS,
} from "../../utils/contants";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;

        window.location.href = mailto;

        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black py-24 sm:py-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[160px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

                {/* ================= HEADING ================= */}
                <ScrollReveal>
                    <div className="mb-14 text-center">

                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-primary" />

                            <span className="text-sm uppercase tracking-[0.25em] text-primary">
                                Get In Touch
                            </span>

                            <span className="h-px w-10 bg-primary" />
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Let's work{" "}
                            <span className="text-primary">
                                together
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
                            Have a project, opportunity, or just want
                            to say hello? Feel free to get in touch.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ================= CONTACT GRID ================= */}
                <div className="grid gap-6 lg:grid-cols-5">

                    {/* ================= CONTACT INFORMATION ================= */}
                    <ScrollReveal
                        direction="left"
                        className="lg:col-span-2"
                    >
                        <Card className="h-full p-7 sm:p-9">

                            <span className="text-xs uppercase tracking-[0.2em] text-primary">
                                Contact Information
                            </span>

                            <h3 className="mt-5 text-2xl font-semibold">
                                Let's start a conversation.
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/40">
                                I'm always open to discussing new
                                projects, creative ideas, and
                                opportunities to learn and grow.
                            </p>

                            {/* Email */}
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="group mt-9 flex items-center gap-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-black">
                                    <Mail size={19} />
                                </div>

                                <div>
                                    <p className="text-xs text-white/30">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm text-white/70 transition-colors group-hover:text-primary">
                                        {PERSONAL_INFO.email}
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary">
                                    <MapPin size={19} />
                                </div>

                                <div>
                                    <p className="text-xs text-white/30">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm text-white/70">
                                        {PERSONAL_INFO.location}
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-10 border-t border-white/10 pt-7">

                                <p className="mb-4 text-xs uppercase tracking-wider text-white/30">
                                    Find me online
                                </p>

                                <div className="flex gap-3">

                                    {/* GitHub */}
                                    <a
                                        href={SOCIAL_LINKS.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                                        aria-label="GitHub"
                                    >
                                        GH
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href={SOCIAL_LINKS.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                                        aria-label="LinkedIn"
                                    >
                                        in
                                    </a>

                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>

                    {/* ================= CONTACT FORM ================= */}
                    <ScrollReveal
                        direction="right"
                        delay={0.1}
                        className="lg:col-span-3"
                    >
                        <Card className="p-7 sm:p-9">

                            {isSubmitted ? (

                                /* Success Message */
                                <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <CheckCircle2 size={32} />
                                    </div>

                                    <h3 className="mt-6 text-2xl font-semibold">
                                        Message ready!
                                    </h3>

                                    <p className="mt-3 max-w-sm text-sm leading-7 text-white/40">
                                        Your email client should open
                                        with the message prepared.
                                    </p>
                                </div>

                            ) : (

                                /* Form */
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >

                                    {/* Name + Email */}
                                    <div className="grid gap-5 sm:grid-cols-2">

                                        {/* Name */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-xs uppercase tracking-wider text-white/40"
                                            >
                                                Name
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-primary/50 focus:bg-primary/[0.03]"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-xs uppercase tracking-wider text-white/40"
                                            >
                                                Email
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-primary/50 focus:bg-primary/[0.03]"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-xs uppercase tracking-wider text-white/40"
                                        >
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What would you like to discuss?"
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-primary/50 focus:bg-primary/[0.03]"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-xs uppercase tracking-wider text-white/40"
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project..."
                                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-primary/50 focus:bg-primary/[0.03]"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(141,255,105,0.2)]"
                                    >
                                        Send Message

                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </button>

                                </form>
                            )}

                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;