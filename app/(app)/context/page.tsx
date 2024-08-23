'use client';

import { usePathname } from "next/navigation";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext } from "react";

type pageProps = string

const PageContext = createContext<{ page?: pageProps, setActive?: Dispatch<SetStateAction<pageProps>> }>({})

type PageProps = {
	children: ReactNode
}

export const PageContextProvider = ({ children }: PageProps) => {
	const page = usePathname()

	return (
		<PageContext.Provider value={{ page }}>
			{children}
		</PageContext.Provider>
	)
};

export const usePageContext = () => useContext(PageContext);