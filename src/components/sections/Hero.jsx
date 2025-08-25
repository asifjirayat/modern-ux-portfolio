import { Button } from "../ui";
import { useScrollTo } from "../../hooks";

const Hero = ({ ...rest }) => {
  const { handleSmoothScroll } = useScrollTo();

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-20"
      {...rest}
    >
      <div className="text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-primary-600 mb-4 font-medium">
          Creative UX Designer
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
          Crafting Digital Experiences
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          I design user-centered digital products that blend aesthetics with
          functionality.
        </p>
        <Button
          href="#projects"
          size="large"
          onClick={(e) => handleSmoothScroll(e, "projects")}
        >
          View my work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
