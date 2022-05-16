import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextFieldCustom from "./SubComponents/TextFieldCustom";
import ButtonCustom from "./SubComponents/ButtonCustom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import createUrl from "../../utils/createUrl";
import Link from '../Link';
import { useAuth } from "../../context/authContext";
import Loading from "../Loading";

import "./scss/AddLinkForm.scss";
//Definition of schame validation
const schema = yup.object().shape({
  link: yup
    .string()
    .url("Debe introducir un URL valido")
    .required("Introduzca una URL"),
});
export default function AddLinkForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {user} = useAuth();
  const [linkAdded, setLinkAdded] = useState(null);
  const [loading,setLoading] = useState(false)
  console.log("user",user)
  const onSubmit = async (data) => {
    setLoading(true);
    const response = user ? await createUrl({ url: data.link , user:user.uid }) :await createUrl({ url: data.link })  ;
    
    setLinkAdded(response.data)
    setLoading(false);
    
  };
  if(loading)return<Loading />
  if (linkAdded === null){
    return (
      <div className="form-container-add-link">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFieldCustom
            name="link"
            control={control}
            label={"Url"}
            id="url-input"
            errors={errors.link}
            setValue={setValue}
          />
          <ButtonCustom type={"submit"} variant={"contained"}>
            Acortar Url
          </ButtonCustom>
        </form>
      </div>
    );
  }
    if(linkAdded) return<Link currentLink={linkAdded} />
}
