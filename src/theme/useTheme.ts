import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';
import { Theme, Themes } from './types';

export const useTheme = () => {
  const themes: Themes = getFromLocalStorage('themes');
  const [theme, setTheme] = useState<Theme>(themes.plain.darkPlain);
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

  const setMode = (mode: Theme) => {
    setToLocalStorage('selectedTheme', mode)
    setTheme(mode);
  };

  useEffect(() =>{
    const localTheme = getFromLocalStorage('selectedTheme');
    localTheme ? setTheme(localTheme) : setTheme(themes.plain.darkPlain);
    setThemeLoaded(true);
  }, []);

  return { themes, theme, themeLoaded, setMode };
};