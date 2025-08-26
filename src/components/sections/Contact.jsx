import { SectionHeader, Button } from "../ui";
import { Mail, MapPin, Zap } from "lucide-react";
import { useScrollAnimation } from "../../hooks";

const Contact = ({ ...rest }) => {
  // Configure animations for projects section
  const contactAnimations = [
    {
      selector: ".section-header",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      start: "top 90%",
    },
    {
      selector: ".contact-form",
      from: { opacity: 0, x: -60 },
      to: { opacity: 1, x: 0 },
      duration: 1,
      ease: "power2.out",
      start: "top 80%",
    },
    {
      selector: ".contact-info",
      from: { opacity: 0, x: 60 },
      to: { opacity: 1, x: 0 },
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
      start: "top 80%",
    },
    {
      selector: ".contact-item",
      from: { opacity: 0, y: 30, scale: 0.9 },
      to: { opacity: 1, y: 0, scale: 1 },
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1.7)",
      start: "top 85%",
    },
    {
      selector: ".form-field",
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
      stagger: 0.1,
      duration: 0.6,
      start: "top 85%",
    },
  ];

  const contactRef = useScrollAnimation(contactAnimations);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <section ref={contactRef} className="py-16 md:py-24 bg-gray-50" {...rest}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="section-header">
          <SectionHeader
            title="Get In Touch"
            description="Have a project in mind? Let's discuss how we can work together to
            create something amazing."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Left*/}
          <div className="contact-info space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always interested in new opportunities, creative projects,
                and meaningful collaborations. Whether you have a specific
                project in mind or just want to connect, I'd love to hear from
                you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="contact-item flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">hello@yourname.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Your City, Country</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Response Time</p>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-item pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Find me on</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="contact-form bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Your Full Name"
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <div className="form-field">
                <Button
                  type="submit"
                  className="w-full"
                  onClick={handleSubmitForm}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
