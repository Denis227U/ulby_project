import { FC, useState, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // в value мы передаем объект и по сути на каждый рендер компонента у нас будет этот объект инициализироваться заново и ссылка на него будет каждый раз новая и компонент будет каждый раз перерисовываться. (конкретно здесь это не важно, но можно сделать правльно с помощтю useMemo)
  // useMemo позволяет мемоизировать значение какого-то объекта, массива и каждый раз не создавать новый, а возвращать уже существующий, если в массиве зависимостей ничего не изменилось.
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
