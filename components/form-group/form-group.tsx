import React from "react";
import { FieldError } from "react-hook-form";
import { Input, InputProps } from "../input";
import styles from "./form-group.module.scss";

type FormGroupProps = {
  text: string;
  errors?: Record<string, FieldError | undefined>;
  inputProps?: InputProps;
  children?: React.ReactNode;
};
const FormGroup = ({ text, inputProps, errors, children }: FormGroupProps) => {
  return (
    <div className={styles.form_group}>
      <label className={styles.form_group__label}>
        {text}
        {children ? children : <Input {...inputProps} />}
      </label>
      {errors?.[inputProps?.register?.name!] && (
        <small className={styles.form_group__error}>
          {errors?.[inputProps?.register?.name!]?.message}
        </small>
      )}
    </div>
  );
};

export default FormGroup;
