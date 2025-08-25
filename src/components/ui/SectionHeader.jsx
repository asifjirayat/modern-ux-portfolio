const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = true,
  className,
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {subtitle && (
        <p className="text-sm uppercase tracking-wider text-primary-600 mb-4 font-medium">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
