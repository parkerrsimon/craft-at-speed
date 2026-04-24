type ButtonVariant = "primary" | "white" | "link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
};

const base =
  "font-medium leading-[normal] not-italic text-[16px] text-[color:var(--text-primary,#2c2c2c)] whitespace-nowrap cursor-pointer transition-colors duration-[50ms]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[color:var(--brand-orange,#ff8e1e)] px-[24px] py-[8px] rounded-[100px] hover:bg-[#F78A1D] active:bg-[#e07c15]",
  white:
    "bg-[color:var(--text-white,#f5f5f5)] px-[24px] py-[8px] rounded-[100px] hover:bg-[#ebebeb] active:bg-[#e0e0e0]",
  link:
    "border-2 border-[color:var(--text-white,#f5f5f5)] border-solid px-[16px] py-[2px] rounded-[100px] hover:border-[#d5d5d5] hover:bg-[color:var(--text-white,#f5f5f5)] active:bg-[#ebebeb]",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      className={[
        "content-stretch flex items-center justify-center overflow-clip relative shrink-0",
        base,
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
