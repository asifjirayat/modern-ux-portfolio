import { Mail, MapPin, Zap, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to
            create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Left*/}
          <div className="space-y-8">
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
              <div className="flex items-center gap-4">
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
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Find me on</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div>
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

              <div>
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

              <div>
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

              <div>
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

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 focus:ring-4 focus:ring-primary-500/40 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
