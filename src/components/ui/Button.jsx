const Button = ({
  children,
  variant = "primary",
  size = "medium",
  href,
  onClick,
  className = "",
  ...rest
}) => {
  // If anchor use <a>, else use <button>
  const Component = href ? "a" : "button";

  const baseClasses =
    "font-medium transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary-500/40";

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
    outline:
      "border border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600",
  };

  const sizes = {
    small: "px-4 py-2 text-sm rounded-lg",
    medium: "px-6 py-3 text-base rounded-lg",
    large: "px-8 py-4 text-lg rounded-full",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <Component href={href} onClick={onClick} className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
