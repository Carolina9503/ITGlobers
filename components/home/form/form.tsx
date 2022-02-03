import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ageRanges } from "../../../utils/ageRanges";
import { Button } from "../../button";
import { FormGroup } from "../../form-group";
import { Select } from "../../select";
import styles from "./form.module.scss";

type FormAttr = {
  name: string;
  email: string;
  phone: string;
  ageRange: string;
};
type FormProps = {
  menuName: string;
};

const initialValue: FormAttr = {
  name: "",
  email: "",
  phone: "",
  ageRange: "",
};

const Form = ({ menuName }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormAttr>();

  console.log({ errors });

  const onSubmit = handleSubmit((data) => {
    console.log({ data });
    toast.success(
      "Tu información fue enviada con éxito, estaremos en contacto contigo"
    );
    reset(initialValue);
  });

  return (
    <form onSubmit={onSubmit} noValidate className={styles.form}>
      <p>
        Hola, bienvenido, sabemos que quieres viajar en un {menuName}, por favor
        diligencia el siguiente formulario:
      </p>
      <Toaster toastOptions={{ duration: 5000 }} />
      <FormGroup
        errors={errors}
        text="Nombre completo"
        inputProps={{
          register: {
            ...register("name", {
              required: "Nombre es requerido",
              pattern: {
                value: /^(\w+|\s*)+$/i,
                message: "Ingrese un nombre valido",
              },
            }),
          },
        }}
      />
      <FormGroup
        errors={errors}
        text="Email"
        inputProps={{
          type: "email",
          register: {
            ...register("email", {
              required: "Email es requerido",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i,
                message: "Ingrese un email valido",
              },
            }),
          },
        }}
      />
      <FormGroup
        errors={errors}
        text="Celular"
        inputProps={{
          register: {
            ...register("phone", {
              required: "Celular es requerido",
              pattern: {
                value: /^(\+|\s|\d*|\(|\))+$/i,
                message: "Ingrese un celular valido",
              },
            }),
          },
        }}
      />
      <FormGroup errors={errors} text="Rango de edad">
        <Select
          register={{
            ...register("ageRange", { required: "Rango de edad es requerido" }),
          }}
          items={ageRanges}
          itemText="text"
        />
      </FormGroup>
      <Button text="Enviar" />
    </form>
  );
};

export default Form;
