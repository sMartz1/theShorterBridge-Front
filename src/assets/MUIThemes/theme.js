import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5D1A5C",
        },
        secondary: {
            main: "#22172b",
        },
        background: {
            paper: "#5D1A5C",
        },
        error: {
            main: "#ff9800"
        }
    },
    typography: {
        fontSize: 16,
    },
});
export default theme;