import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Check,
  MapPin,
} from "lucide-react";
import {
  personalInfo,
  contactServices,
  budgetOptions,
  timelineOptions,
} from "../data/portfolioData";

const initialForm = {
  name: "",
  email: "",
  whatsapp_number: "",
  preferred_reply: "email",
  services: [],
  budget: "",
  timeline: "",
  message: "",
};

const labelCls =
  "mb-2.5 block text-[14px] font-bold text-[var(--text)] lg:text-[clamp(14px,0.85vw,16px)]";
const fieldCls =
  "h-[56px] w-full rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-5 text-[16px] text-[var(--text)] placeholder:text-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/25 lg:h-[clamp(56px,3.6vw,68px)] lg:text-[clamp(16px,1.05vw,19px)]";

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msgLen = formData.message.trim().length;

    if (!formData.name.trim() || !formData.email.trim() || !msgLen) {
      setErrorMessage("Please fill in your name, email, and project message.");
      setStatus("error");
      return;
    }
    if (msgLen < 10 || msgLen > 5000) {
      setErrorMessage("Project message must be between 10 and 5,000 characters.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        "7b647436-82c1-44d9-ae5e-97e4307656ec";

      const payload = {
        access_key: accessKey,
        subject: `New Portfolio Inquiry from ${formData.name}`,
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp_number || "Not provided",
        preferred_reply: formData.preferred_reply,
        services: formData.services.length > 0 ? formData.services.join(", ") : "General Inquiry",
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData(initialForm);
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Failed to send message. Please try again or reach out directly via email."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your internet connection or email directly."
      );
    }
  };

  const servicesLabel =
    formData.services.length === 0
      ? "Select services"
      : formData.services.length <= 2
      ? formData.services.join(", ")
      : `${formData.services.length} services selected`;

  return (
    <section
      id="contact"
      className="border-b border-[var(--border)] bg-[var(--surface-soft)]/50 py-20 md:py-28 lg:py-[clamp(80px,6vw,120px)] transition-colors duration-500"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-[1690px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-x-[clamp(48px,5vw,110px)]">
          {/* ───────── LEFT: info ───────── */}
          <div>
            <div className="flex items-center gap-[22px] text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--dark)] lg:text-[clamp(13px,0.85vw,16px)]">
              <span className="h-px w-[46px] bg-[var(--accent)]" />
              <span>06 / Get in touch</span>
            </div>

            <h2
              id="contact-title"
              className="mt-8 text-[48px] font-extrabold leading-[1.1] tracking-[-0.05em] text-[var(--text)] sm:text-[68px] lg:mt-[clamp(28px,3vw,56px)] lg:text-[clamp(60px,5.6vw,108px)]"
            >
              Have something
              <br />
              <span className="font-accent pr-2 font-normal italic tracking-normal text-[var(--accent)]">
                in mind?
              </span>
            </h2>

            <p className="mt-8 max-w-[560px] text-[17px] leading-[1.85] text-[var(--muted)] lg:mt-[clamp(28px,2.6vw,50px)] lg:text-[clamp(17px,1.2vw,23px)]">
              Have an application, business workflow, or complex system in mind?
              Let's discuss the requirements and explore how to build a
              practical, dependable solution.
            </p>

            {/* email link */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-10 inline-flex items-center justify-between gap-12 border-b border-[var(--border)] pb-4 text-[19px] font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:mt-[clamp(32px,2.6vw,50px)] lg:text-[clamp(19px,1.3vw,25px)]"
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight
                size={22}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[var(--accent)]"
              />
            </a>

            {/* location + response note */}
            <div className="mt-8 space-y-3 text-[15px] text-[var(--muted)] lg:text-[clamp(15px,1vw,18px)]">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-[var(--accent)]" />
                <span>{personalInfo.location} · Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="pulse-dot h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>Typically responding within 24 hours on business days.</span>
              </div>
            </div>
          </div>

          {/* ───────── RIGHT: form ───────── */}
          <div>
            {status === "success" && (
              <div className="mb-6 flex items-start gap-3.5 rounded-[10px] border border-green-300 bg-green-50 p-5 text-green-900">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-green-600" />
                <div>
                  <h4 className="text-sm font-bold">Message received successfully!</h4>
                  <p className="mt-1 text-sm text-green-800">
                    Thank you for reaching out,{" "}
                    <strong>{personalInfo.name}</strong> will review your inquiry
                    and get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 rounded-[10px] border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {errorMessage}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5 lg:space-y-[clamp(20px,1.3vw,26px)]"
              noValidate
            >
              {/* Botcheck honeypot for spam prevention */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              {/* name + email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Your name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email address</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className={fieldCls}
                  />
                </div>
              </div>

              {/* whatsapp + reply via */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="whatsapp" className={labelCls}>WhatsApp (optional)</label>
                  <input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp_number}
                    onChange={(e) => setFormData({ ...formData, whatsapp_number: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label htmlFor="reply" className={labelCls}>Reply via</label>
                  <div className="relative">
                    <select
                      id="reply"
                      value={formData.preferred_reply}
                      onChange={(e) => setFormData({ ...formData, preferred_reply: e.target.value })}
                      className={`${fieldCls} appearance-none pr-12`}
                    >
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text)]" />
                  </div>
                </div>
              </div>

              {/* services dropdown */}
              <div ref={servicesRef} className="relative">
                <span className={labelCls}>
                  Services needed{" "}
                  <span className="font-normal text-[var(--muted)]">(choose one or more)</span>
                </span>
                <button
                  type="button"
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-haspopup="listbox"
                  aria-expanded={servicesOpen}
                  className={`${fieldCls} flex items-center justify-between pr-5 text-left`}
                >
                  <span className="truncate">{servicesLabel}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <ul
                    role="listbox"
                    aria-multiselectable="true"
                    className="absolute left-0 right-0 z-30 mt-2 max-h-[300px] overflow-auto rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-xl"
                  >
                    {contactServices.map((service) => {
                      const selected = formData.services.includes(service);
                      return (
                        <li key={service} role="option" aria-selected={selected}>
                          <button
                            type="button"
                            onClick={() => toggleService(service)}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[15px] text-[var(--text)] transition-colors hover:bg-[var(--surface-soft)]"
                          >
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                                selected
                                  ? "border-[var(--dark)] bg-[var(--dark)] text-white"
                                  : "border-[var(--border)] bg-[var(--surface)]"
                              }`}
                            >
                              {selected && <Check size={14} strokeWidth={3} />}
                            </span>
                            {service}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* budget + timeline */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="budget" className={labelCls}>Budget (optional)</label>
                  <div className="relative">
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={`${fieldCls} appearance-none pr-12`}
                    >
                      <option value="">Select a range (INR)</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text)]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className={labelCls}>Timeline (optional)</label>
                  <div className="relative">
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className={`${fieldCls} appearance-none pr-12`}
                    >
                      <option value="">Select a timeline</option>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text)]" />
                  </div>
                </div>
              </div>

              {/* message */}
              <div>
                <label htmlFor="message" className={labelCls}>Tell me about your project</label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={5000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What would you like to build?"
                  className="min-h-[150px] w-full resize-y rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-[16px] text-[var(--text)] placeholder:text-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/25 lg:min-h-[clamp(150px,9.5vw,176px)] lg:text-[clamp(16px,1.05vw,19px)]"
                />
                <p className="mt-3 text-[14px] text-[var(--muted)] lg:text-[clamp(14px,0.9vw,16px)]">
                  10–5,000 characters. I'll use your preferred reply method.
                </p>
              </div>

              {/* submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-4 rounded-full bg-[var(--dark)] px-9 py-[18px] text-[17px] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <ArrowUpRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
