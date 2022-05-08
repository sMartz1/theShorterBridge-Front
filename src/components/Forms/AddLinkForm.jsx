import React from "react";
import { useForm } from "react-hook-form";
import TextFieldCustom from "./SubComponents/TextFieldCustom";
import ButtonCustom from "./SubComponents/ButtonCustom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./scss/AddLinkForm.scss";
//Definition of schame validation
const schema = yup.object().shape({
  link: yup
    .string()
    .url("Debe introducir un URL valido")
    .required("Introduzca una URL"),
});
export default function AddLink() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
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
