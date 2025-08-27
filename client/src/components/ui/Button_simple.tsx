interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'}`;

  // If href is provided, render as anchor
  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        download={download}
        target={target}
        rel={rel}
        onClick={disabled ? undefined : onClick}
        style={{ pointerEvents: disabled ? 'none' : 'auto' }}
      >
        <span className="relative z-10">
          {children}
        </span>
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default Button;
