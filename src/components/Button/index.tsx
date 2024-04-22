import { twMerge } from "tailwind-merge";

type ButtonVariant = "contained" | "outlined";

type ButtonColor = "primary" | "orange";

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
};

const classesMap: Record<ButtonVariant, Record<ButtonColor, string>> = {
  contained: {
    primary: "bg-button-primary-gradient text-white",
    orange: "",
  },
  outlined: {
    primary: "border-2 text-white border-[#509DD4]",
    orange: "",
  },
};

export const Button = ({
  label,
  onClick,
  variant = "contained",
  color = "primary",
  className,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center font-medium text-sm p-6 h-15 leading-1 rounded-6 focus:outline-none w-full",
        classesMap[variant][color],
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
