import React  from "react";
import {useNavigate} from 'react-router-dom'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldCustom from "./SubComponents/TextFieldCustom";
import ButtonCustom from "./SubComponents/ButtonCustom";
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import {useAuth} from '../../context/authContext'
import "./scss/RegisterForm.scss";
const schema = yup.object().shape({
    firstname : yup.string().min(3,"El nombre debe tener un minimo de 3 caracteres").required(),
    lastname : yup.string().min(3,"El apellido debe tener un minimo de 3 caracteres").required(),
    password: yup.string().min(5,"La contraseña debe tener un minimo de 5 caracteres").required('Es necesaria una contraseña'),
    confirmPassword : yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir'),
    email:yup.string().email("Introduce un email valido").required('Es necesario un email')
  })
export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {signup,updatename} = useAuth();
  const navigate = useNavigate();

  const onSubmit = async(data) => {
      try {
        const registerUser = await signup(data.email,data.password)
        const updateUser = await updatename(registerUser.user,data.firstname,data.lastname)
        console.log(updateUser);
      } catch (error) {
        console.log(error);
          throw new Error("Error al crear cuenta")
      }
      navigate('/my-links');
    
  };
  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldCustom
          name="firstname"
          control={control}
          label={"Nombre"}
          id="firstname-input"
          errors={errors.firstname}
          hasIcon={false}
        />
          <TextFieldCustom
          name="lastname"
          control={control}
          label={"Apellido"}
          id="lastname-input"
          errors={errors.lastname}
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
        <TextFieldCustom
          name="confirmPassword"
          control={control}
          label={"Repite la contraseña"}
          id="confirmPassword-input"
          errors={errors.confirmPassword}
          type={"password"}
          hasIcon={false}
        />
        <TextFieldCustom
          name="email"
          control={control}
          label={"Correo electronico"}
          id="email-input"
          errors={errors.email}
          hasIcon={false}
        />
        <ButtonCustom type={"submit"} variant={"contained"}>
          Registrarse
        </ButtonCustom>
      </form>
      
        <h3>¿Ya tienes cuenta?</h3>
      <Divider ><Link href="/login">Logueate</Link></Divider>
      
    </div>
  );
}
