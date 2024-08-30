'use client';

import { usePathname } from "next/navigation";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext } from "react";

const PageContext = createContext<{ page?: string }>({ page: '/' })

type PageProps = {
	children: ReactNode
}

const PageContextProvider = ({ children }: PageProps) => {
	const page = usePathname()

	return (
		<PageContext.Provider value={{ page }}>
			{children}
		</PageContext.Provider>
	)
};

const usePageContext = () => useContext(PageContext);

export { PageContextProvider, usePageContext }