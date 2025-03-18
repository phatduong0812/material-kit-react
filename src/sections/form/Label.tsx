import { FC, ReactNode } from 'react';

interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor}>{children}</label>
);

export default Label;
