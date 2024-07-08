import { createTheme } from "@mui/material/styles";

// Utils
import { Colors } from "./constants";

const ThemeFontFamily = "'Poppins', sans-serif";

const theme = createTheme({
    typography: {
        fontFamily: ThemeFontFamily,
    },
    palette: {
        primary: {
            main: Colors.primary,
            light: Colors.accent,
            dark: Colors.accent,
        },
        secondary: {
            main: Colors.accent,
        },
        neutral: {
            main: Colors.black,
            light: Colors.white,
        },
        info: {
            main: Colors.info,
        },
        success: {
            main: Colors.green,
        },
        error: {
            main: Colors.red,
        },
        warning: {
            main: Colors.yellow,
        },
    },
    shape: {
        borderRadius: 5,
    },
    shadows: {
        0: "",
        1: `${Colors.shadow}`,
        4: `${Colors.shadowBig}`,
        6: "0 6px 20px rgba(255 0 0/ 1)",
        8: `${Colors.shadowBig}`,
        16: `${Colors.shadowBig}`,
        24: `${Colors.shadowBig}`,
    },
});

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

theme.typography = {
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    h1: {
        fontWeight: 700,
        fontSize: "45px",
        color: Colors.black,
        fontFamily: ThemeFontFamily,
        [theme.breakpoints.up("md")]: {
            ineHeight: "85px",
            fontSize: "65px",
        },
    },
    h2: {
        fontWeight: 700,
        fontSize: "50px",
        fontFamily: ThemeFontFamily,
    },
    h3: {
        fontWeight: 700,
        fontSize: "36px",
        fontFamily: ThemeFontFamily,
    },
    h4: {
        fontWeight: 700,
        fontSize: "30px",
        fontFamily: ThemeFontFamily,
    },
    h5: {
        fontWeight: 700,
        fontSize: "20px",
        fontFamily: ThemeFontFamily,
    },
    h6: {
        fontWeight: 700,
        fontSize: "16px",
        fontFamily: ThemeFontFamily,
    },
    subheader: {
        fontWeight: 400,
        fontSize: "18px",
        color: Colors.greyDark,
        fontFamily: ThemeFontFamily,
    },
    paragraph: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "22px",
        color: Colors.greyDark,
        fontFamily: ThemeFontFamily,
    },
};

theme.components = {
    MuiTypography: {
        defaultProps: {
            variantMapping: {
                paragraph: "p", 
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: ({ ownerState }) => ({
                fontFamily: ThemeFontFamily,
                fontWeight: "700",
                height: "fit-contents",
                ...(ownerState.variant === "contained" && {
                    backgroundColor: Colors.accent,
                    color: theme.palette.primary.contrastText,
                    border: `2px solid ${Colors.accent}`,
                    "&:hover": {
                        backgroundColor: Colors.primary,
                        border: `2px solid ${Colors.primary}`,
                    },
                }),
                ...(ownerState.variant === "outlined" && {
                    border: `2px solid ${Colors.accent}`,
                    "&:hover": {
                        backgroundColor: Colors.accent,
                        color: theme.palette.primary.contrastText,
                        border: `2px solid ${Colors.accent}`,
                    },
                }),
                ...(ownerState.disabled && {
                    backgroundColor: `${Colors.greyMed} !important`,
                    color: Colors.greyDark,
                    border: `2px solid ${Colors.greyMed} !important`,
                    ...(ownerState.variant === "plain" && {
                        backgroundColor: `transparent !important`,
                        color: `${Colors.greyMed} !important`,
                        border: `0px solid transparent !important`,
                    }),
                }),
            }),
        },
        variants: [
            {
                props: { variant: "plain" },
                style: {
                    backgroundColor: "transparent",
                    color: Colors.accent,
                },
            },
            {
                props: { variant: "danger" },
                style: {
                    backgroundColor: Colors.red,
                    borderColor: Colors.red,
                    color: Colors.white,
                    "&:hover": {
                        backgroundColor: Colors.red,
                        opacity: 0.9,
                    },
                },
            },
            {
                props: { variant: "success" },
                style: {
                    backgroundColor: Colors.green,
                    borderColor: Colors.green,
                    color: Colors.white,
                    "&:hover": {
                        backgroundColor: Colors.green,
                        opacity: 0.9,
                    },
                },
            },
            {
                props: { variant: "plain-white" },
                style: {
                    fontWeight: 900,
                    fontSize: "12px",
                    color: Colors.white,
                    ".MuiSvgIcon-root": {
                        fontSize: "24px",
                    },
                },
            },
        ],
    },
    MuiTabs: {
        styleOverrides: {
            root: {
                ".MuiTabs-indicator": {
                    backgroundColor: Colors.primary,
                },
            },
        },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                fontFamily: ThemeFontFamily,
                fontWeight: 700,
                "&.Mui-selected": {
                    color: Colors.primary,
                },
            },
        },
    },
    MuiTable: {
        styleOverrides: {
            root: {
                fontFamily: ThemeFontFamily,
                fontSize: "14px",
            },
        },
    },
};

export default theme;
