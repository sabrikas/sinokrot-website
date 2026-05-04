import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonVariant {
  Default = "default",
  Secondary = "secondary",
  Ghost = "ghost",
  Outline = "outline",
}

export enum ButtonSize {
  Xs = "xs",
  Sm = "sm",
  Md = "md",
  Lg = "lg",
  Xl = "xl",
}

export enum ButtonShape {
  Rounded = "rounded",
  Soft = "soft",
  Pill = "pill",
}

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.Default]:
    "bg-primary-400 text-gray-950 hover:bg-primary-500 active:bg-primary-600",
  [ButtonVariant.Secondary]:
    "bg-secondary-50 text-gray-900 hover:bg-secondary-100 active:bg-secondary-200",
  [ButtonVariant.Ghost]:
    "bg-transparent text-gray-900 hover:bg-secondary-50 active:bg-secondary-100",
  [ButtonVariant.Outline]:
    "border border-secondary-300 bg-secondary-50 text-gray-900 hover:bg-secondary-100 active:bg-secondary-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.Xs]: "min-h-7 px-2 py-1 text-xs",
  [ButtonSize.Sm]: "min-h-8 px-3 py-1.5 text-sm",
  [ButtonSize.Md]: "min-h-10 px-4 py-2 text-sm",
  [ButtonSize.Lg]: "min-h-12 px-5 py-2.5 text-base",
  [ButtonSize.Xl]: "min-h-13 px-6 py-3 text-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  [ButtonShape.Rounded]: "rounded-lg",
  [ButtonShape.Soft]: "rounded-xl",
  [ButtonShape.Pill]: "rounded-full",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.Xs]: "size-4",
  [ButtonSize.Sm]: "size-4",
  [ButtonSize.Md]: "size-[18px]",
  [ButtonSize.Lg]: "size-5",
  [ButtonSize.Xl]: "size-5",
};

function mergeClasses(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  as = "button",
  variant = ButtonVariant.Default,
  size = ButtonSize.Md,
  shape = ButtonShape.Rounded,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = mergeClasses(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    shapeClasses[shape],
    fullWidth && "w-full",
    className,
  );

  if (as === "a") {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a className={classes} {...anchorProps}>
        {leftIcon ? <span className={iconSizeClasses[size]}>{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? <span className={iconSizeClasses[size]}>{rightIcon}</span> : null}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} type={buttonProps.type ?? "button"} {...buttonProps}>
      {leftIcon ? <span className={iconSizeClasses[size]}>{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className={iconSizeClasses[size]}>{rightIcon}</span> : null}
    </button>
  );
}
