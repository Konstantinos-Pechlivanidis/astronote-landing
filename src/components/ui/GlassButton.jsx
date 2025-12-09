import { clsx } from 'clsx';

export default function GlassButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  as,
  ...props
}) {
  const baseClasses = 'spring-animation focus-ring font-medium rounded-lg inline-flex items-center justify-center active-scale';
  
  const variantClasses = {
    primary: 'glass-button-primary shadow-glow-ice-light hover:shadow-glow-ice-light-lg',
    ghost: 'glass-button-ghost bg-transparent',
    fuchsia: 'glass-button-fuchsia shadow-glow-fuchsia-light',
    cyan: 'glass-button-cyan shadow-glow-cyan-light',
  };
  
  const sizeClasses = {
    sm: 'px-3 sm:px-4 py-2 text-sm min-h-[36px] sm:min-h-[40px]',
    md: 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base min-h-[44px]',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[48px] sm:min-h-[52px]',
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'active:scale-95';

  // Handle 'as' prop for Link components or href for anchor tags
  const Component = as || (props.href ? 'a' : 'button');
  const buttonProps = Component === 'button' 
    ? { 
        type: 'button', 
        disabled,
        'aria-disabled': disabled,
      } 
    : {};
  
  // If href is provided and Component is 'a', ensure it's an anchor
  const anchorProps = Component === 'a' && props.href
    ? { href: props.href, target: props.target || '_self' }
    : {};
  
  return (
    <Component
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
      {...buttonProps}
      {...anchorProps}
      {...props}
    >
      {children}
    </Component>
  );
}

