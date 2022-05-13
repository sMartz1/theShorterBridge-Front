import React from "react";
import * as yup from "yup";
import {useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldCustom from "./SubComponents/TextFieldCustom";
import ButtonCustom from "./SubComponents/ButtonCustom";
import GoogleButton from "react-google-button";
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import "./scss/LoginForm.scss";
import { useAuth } from '../../context/authContext';
const schema = yup.object().shape({
  email: yup.string().required(),
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
  const navigate = useNavigate();
  const {login,loginWithGoogle} = useAuth();

  const onSubmit = async(data) => {
    try {
      await login(data.email,data.password);
      navigate('/my-links')

    } catch (error) {
      
    }
    
  };

  const loginGoogle = async()=>{
    await loginWithGoogle();
    navigate('/my-links')
  }
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldCustom
          name="email"
          control={control}
          label={"Email"}
          id="username-input"
          errors={errors.email}
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
      
      <GoogleButton label='Conectate con Google' type="light" onClick={loginGoogle} />
        <h3>¿No tienes cuenta?</h3>
      <Divider ><Link href="/register">Registrate</Link></Divider>
      
    </div>
  );
}
