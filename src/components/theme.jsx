import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";


export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#303641",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#2d3748",
        },
        black: {
          100: "#040509",
          200: "#141b2d",
          300: "#0c101b",
          400: "#101624",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
       

        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#171923",
          500: "#1a202c",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccend: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccend: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#f96435",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccend: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#2a3347",
        },
      }
    : {
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#edf0f2",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#f7fafc",
        },
        black: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
       
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f7fafc",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccend: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccend: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#ed8e24",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccend: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e8f0fe",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccend[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccend[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContex = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
