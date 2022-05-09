import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldCustom from "./SubComponents/TextFieldCustom";
import ButtonCustom from "./SubComponents/ButtonCustom";
import GoogleButton from "react-google-button";
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import "./scss/LoginForm.scss";
const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldCustom
          name="username"
          control={control}
          label={"Usuario"}
          id="username-input"
          errors={errors.username}
          hasIcon={false}
        />
        <TextFieldCustom
          name="password"
          control={control}
          label={"Contraseña"}
          id="password-input"
          errors={errors.password}
          type={"password"}
          hasIcon={false}
        />
        <ButtonCustom type={"submit"} variant={"contained"}>
          Iniciar sesion
        </ButtonCustom>
      </form>
      
      <GoogleButton label='Conectate con Google' type="light" />
        <h3>No tienes cuenta?</h3>
      <Divider ><Link href="/register">Registrate</Link></Divider>
      
    </div>
  );
}
