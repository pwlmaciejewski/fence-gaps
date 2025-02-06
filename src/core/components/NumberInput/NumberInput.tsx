import clsx from "clsx";
import { HTMLAttributes, InputHTMLAttributes } from "react";

export type NumberInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

export function NumberInput({ className, ...props }: NumberInputProps) {
  return (
    <input
      {...props}
      className={clsx(className, "border px-2 py-1")}
      type="number"
    />
  );
}
