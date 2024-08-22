'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
type themeProps = 'light' | 'dark'
const ThemeContext = createContext<{ color?: themeProps, setColor?: Dispatch<SetStateAction<themeProps>> }>({})

type ThemeProps = {
	children: ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeProps) => {
	const [color, setColor] = useState<themeProps>('light');

	return (
		<ThemeContext.Provider value={{ color, setColor }}>
			{children}
		</ThemeContext.Provider>
	)
};

export const useThemeContext = () => useContext(ThemeContext);