import { ReactNode } from "react";
import { ButtonFormContainer } from "./styles";

interface ButtonFormProps {
  children: ReactNode;
}

export function ButtonForm({ children }: ButtonFormProps) {
  return <ButtonFormContainer type="submit">{children}</ButtonFormContainer>;
}
