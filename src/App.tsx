import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { SideBar } from './components/sideBar';
import { useTheme } from './theme/useTheme';
import { GlobalStyles } from "./theme/GlobalStyles";
import { ThemeSelector } from "./components/themeSelector";

export function App() {
  const { themes, theme: selectedTheme, themeLoaded, setMode } = useTheme();

  return themeLoaded && (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <div className='app-container' >
        <SideBar>
          <ThemeSelector themes={themes} selectedTheme={selectedTheme} updateTheme={setMode} />
        </SideBar>
        <Outlet context={selectedTheme} />
      </div>
    </ThemeProvider>
  )
}

export default App;
