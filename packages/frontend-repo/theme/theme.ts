import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#f4f4f4",
        },
    },
    typography: {
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
            fontSize: "32px",
        },
        body1: {
            fontWeight: 500,
        },
    },
});

export default theme;
