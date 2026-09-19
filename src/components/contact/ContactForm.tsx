import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryTopic: siteConfig.contact.inquiryTopics[0],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate reliable transmission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryTopic: siteConfig.contact.inquiryTopics[0],
        message: "",
      });
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-[#FCFAF6] border border-[#171412]/10 p-6 sm:p-10 md:p-12">
      <div className="mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#171412] mb-2">
          Send a Message
        </h2>
        <p className="text-xs text-[#695D54]">
          We typically reply within 24 hours during normal business operations.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 bg-[#F8F5EE] border border-emerald-700/20 text-center space-y-4 animate-fadeIn">
          <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
          <h3 className="font-serif text-2xl text-[#171412]">
            Thank you for reaching out.
          </h3>
          <p className="text-xs text-[#695D54] max-w-md mx-auto leading-relaxed">
            Your message has been received by our concierge team. We look forward to speaking with you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 text-xs font-mono tracking-wider uppercase border border-[#171412] text-[#171412] hover:bg-[#171412] hover:text-[#F8F5EE] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="block text-[11px] font-mono tracking-widest text-[#695D54] uppercase"
              >
                Full Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Julian Hayes"
                className="w-full bg-[#F8F5EE] border border-[#171412]/15 px-4 py-3 text-sm text-[#171412] placeholder:text-[#8E8075]/70 focus:outline-none focus:border-[#171412] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="block text-[11px] font-mono tracking-widest text-[#695D54] uppercase"
              >
                Email Address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="julian@example.com"
                className="w-full bg-[#F8F5EE] border border-[#171412]/15 px-4 py-3 text-sm text-[#171412] placeholder:text-[#8E8075]/70 focus:outline-none focus:border-[#171412] transition-colors"
              />
            </div>
          </div>

          {/* Phone & Inquiry Topic Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="contact-phone"
                className="block text-[11px] font-mono tracking-widest text-[#695D54] uppercase"
              >
                Phone Number (Optional)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (212) 000-0000"
                className="w-full bg-[#F8F5EE] border border-[#171412]/15 px-4 py-3 text-sm text-[#171412] placeholder:text-[#8E8075]/70 focus:outline-none focus:border-[#171412] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-topic"
                className="block text-[11px] font-mono tracking-widest text-[#695D54] uppercase"
              >
                Inquiry Topic
              </label>
              <select
                id="contact-topic"
                name="inquiryTopic"
                value={formData.inquiryTopic}
                onChange={handleChange}
                className="w-full bg-[#F8F5EE] border border-[#171412]/15 px-4 py-3 text-sm text-[#171412] focus:outline-none focus:border-[#171412] transition-colors cursor-pointer"
              >
                {siteConfig.contact.inquiryTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="block text-[11px] font-mono tracking-widest text-[#695D54] uppercase"
            >
              Your Message *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              className="w-full bg-[#F8F5EE] border border-[#171412]/15 p-4 text-sm text-[#171412] placeholder:text-[#8E8075]/70 focus:outline-none focus:border-[#171412] transition-colors resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#171412] text-[#F8F5EE] text-xs font-mono tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:bg-[#332C27] disabled:opacity-50"
          >
            <span className="flex items-center gap-2">
              {status === "submitting" ? "Transmitting..." : "Send Message"}
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
