import { useButtonAnimation } from "../../hooks";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  href,
  onClick,
  className = "",
  disabled = false,
  ...rest
}) => {
  const buttonRef = useButtonAnimation([disabled]); // Pass disabled as dependency

  // If anchor use <a>, else use <button>
  const Component = href ? "a" : "button";

  const baseClasses =
    "font-medium transition-colors duration-200 focus-visible:ring-4 focus-visible:ring-primary-500/40 relative overflow-hidden";

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

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      <span className="relative z-10">{children}</span>

      {/* Ripple effect overlay - only show if not disabled */}
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500 ease-out" />
      )}
    </Component>
  );
};

export default Button;
