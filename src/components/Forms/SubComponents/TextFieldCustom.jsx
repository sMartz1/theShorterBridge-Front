import React from "react";
import { Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
export default function TextFieldCustom({
  name,
  control,
  label,
  id,
  errors,
  type,
  setValue,
  ...props
}) {

  const pasteContent = async()=>{
    const text = await navigator.clipboard.readText();
    setValue(name,text);
  }
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          id={id}
          label={label}
          variant="standard"
          error={!!errors}
          type={type ? type : "text"}
          helperText={errors ? errors?.message : ""}
          InputProps={{
            endAdornment: (

              <InputAdornment position="start">
                <IconButton aria-label="Paste" onClick={pasteContent}>
                <ContentPasteIcon fontSize="small" />
                </IconButton>
                
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
