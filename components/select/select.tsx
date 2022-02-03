import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./select.module.scss";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  register?: UseFormRegisterReturn;
  itemText: string;
  itemValue?: string;
  items: Array<Record<string, string>>;
}
const Select = ({
  register,
  items,
  itemValue,
  itemText,
  ...props
}: SelectProps) => {
  return (
    <select className={styles.input} {...register} {...props}>
      <option value="">Seleccione...</option>
      {items.map((item) => (
        <option key={item[itemValue ?? itemText]}>{item[itemText]}</option>
      ))}
    </select>
  );
};
export default Select;
