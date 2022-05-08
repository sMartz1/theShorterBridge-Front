import React from "react";
import { Button } from "@mui/material";
export default function ButtonCustom({ type, variant, children }) {
  return (
    <Button
      sx={{
        marginTop: "3rem",
        borderRadius : "2rem"
      }}
      variant={variant}
      type={type}
    >
      {children}
    </Button>
  );
}
