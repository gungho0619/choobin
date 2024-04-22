import { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
  value: string | number;
  type: 'text' | 'number',
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({ value, type, onChange, className }: InputProps) => {
  return (
    <input type={type} value={value} onChange={onChange} className={twMerge("focus:outline-none bg-transparent", className)} />
  );
};
