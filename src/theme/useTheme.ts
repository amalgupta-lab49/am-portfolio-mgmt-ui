import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';
import { Theme } from './types';

export const useTheme = () => {
  const themes: { [key:string]: Theme } = getFromLocalStorage('themes');
  const [theme, setTheme] = useState<Theme>(themes.blue);
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

  const setMode = (mode: Theme) => {
    setToLocalStorage('selectedTheme', mode)
    setTheme(mode);
  };

  useEffect(() =>{
    const localTheme = getFromLocalStorage('selectedTheme');
    localTheme ? setTheme(localTheme) : setTheme(themes.blue);
    setThemeLoaded(true);
  }, []);

  return { themes, theme, themeLoaded, setMode };
};