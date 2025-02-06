import { ReactNode } from "react";

export type FormFieldProps = {
  label: string;
  children: ReactNode;
};

export function FormField({ label, children }: FormFieldProps) {
  return (
    <label className="flex flex-col">
      <span className="mb-1 text-gray-800">{label}</span>
      {children}
    </label>
  );
}
