import clsx from "clsx";
import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  outline?: boolean;
}

const Button: FC<ButtonProps> = ({ active, className, outline, children, ...rest }) =>
  <button
    {...rest}
    className={
      clsx(
        className,
        "transition-colors font-bold bg-violet-800 enabled:hover:bg-violet-900 rounded-3xl py-2 px-6",
        {
          'bg-white text-violet-800': active && !outline,
          'border bg-transparent': outline,
          'border-violet-800  text-violet-800': outline && !active,
          'border-white text-white': outline && active,
        }
      )
    }
  >
    {children}

  </button>

export default Button;