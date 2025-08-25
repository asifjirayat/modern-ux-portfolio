const Projects = ({ ...rest }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      role: "Lead UX Designer",
      stack: ["React", "TypeScript", "Tailwind"],
      status: "Live",
      image:
        "https://placehold.co/600x400/8b5cf6/ffffff?text=E-commerce+dashboard",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure banking application with biometric authentication and intuitive money transfer flows.",
      role: "Senior UX/UI Designer",
      stack: ["React Native", "Figma", "Framer"],
      status: "In Development",
      image:
        "https://placehold.co/600x400/8b5cf6/ffffff?text=Mobile+Banking+App",
    },
    {
      id: 3,
      title: "Healthcare Platform",
      description:
        "Patient management system connecting doctors, patients, and medical records seamlessly.",
      role: "UX Researcher & Designer",
      stack: ["Vue.js", "Node.js", "PostgreSQL"],
      status: "Case Study",
      image:
        "https://placehold.co/600x400/8b5cf6/ffffff?text=Healthcare+Platform",
    },
    {
      id: 4,
      title: "Learning Management System",
      description:
        "Educational platform for online courses with progress tracking and interactive assessments.",
      role: "Product Designer",
      stack: ["Next.js", "Prisma", "Stripe"],
      status: "Live",
      image:
        "https://placehold.co/600x400/8b5cf6/ffffff?text=Learning+Management+System",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" {...rest}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of digital experiences I've crafted, from concept to
            completion
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Container*/}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : project.status === "In Development"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8">
                <div className="mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium">
                    {project.role}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors focus-visible:ring-4 focus-visible:ring-primary-500/40">
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary-600 hover:text-primary-600 transition-colors">
                    Case Study
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-all duration-300 focus-visible:ring-4 focus-visible:ring-primary-500/40">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
