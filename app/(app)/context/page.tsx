'use client';

import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
type pageProps = string
const PageContext = createContext<{ page?: pageProps }>({})

type PageProps = {
	children: ReactNode
}

export const ThemeContextProvider = ({ children }: PageProps) => {
	const page = usePathname()


	return (
		<PageContext.Provider value={{ page }}>
			{children}
		</PageContext.Provider>
	)
};

export const usePageContext = () => useContext(PageContext);