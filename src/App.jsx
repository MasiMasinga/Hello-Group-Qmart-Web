// Context
import { StateProvider } from "./common/context/StateContext";
import { PlayerProvider } from './common/context/PlayerContext';

// Notistack
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

// Theme
import theme from "./common/utils/theme";

// Components
import Home from "./common/components/Home";


function App() {

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}>
                <StateProvider>
                    <PlayerProvider>
                        <Home />
                    </PlayerProvider>
                </StateProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App
