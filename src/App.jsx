// Context
import { StateProvider } from "./common/context/StateContext";
import { PlayerProvider } from './common/context/PlayerContext';

// Notistack
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

// Theme
import theme from "./common/utils/theme";

// Components
import Schedule from './common/components/Schedule';
import Players from './common/components/Players';
import Results from './common/components/Results';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <StateProvider>
          <PlayerProvider>
            <h1>Sports App</h1>
            <Schedule />
            <Players />
            <Results />
          </PlayerProvider>
        </StateProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
