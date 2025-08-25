import { Code, Palette, Users, Lightbulb } from "lucide-react";
import { SectionHeader, Button } from "../ui";
import { useScrollTo } from "../../hooks";

const About = ({ ...rest }) => {
  const { handleSmoothScroll } = useScrollTo();

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "text-primary-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Prototyping",
      color: "text-accent-600",
    },
    {
      icon: Users,
      title: "User Research",
      description: "User interviews, Testing, Analytics",
      color: "text-primary-600",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Strategic thinking, Innovation, Optimization",
      color: "text-accent-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" {...rest}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <SectionHeader
          title="About Me"
          description="Hi, I'm a creative UX designer passionate about crafting digital experiences"
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Personal Journey */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 5 years of experience in digital design, I
                  specialize in creating user-centered solutions that bridge the
                  gap between beautiful design and functional technology.
                </p>
                <p>
                  My approach combines strategic thinking with creative
                  problem-solving, ensuring every project not only looks great
                  but delivers real value to users and businesses alike.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new
                  technologies, mentoring aspiring designers, or working on
                  open-source projects that give back to the community.
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  5
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          {/* Right Colunmn - Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
            <div className="text-left">
              <p className="text-gray-900 font-medium">
                Ready to work together?
              </p>
              <p className="text-gray-600 text-sm">
                Let's create something amazing
              </p>
            </div>
            <Button
              size="small"
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
