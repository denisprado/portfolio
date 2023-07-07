'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
type menuProps = number
const MenuContext = createContext<{ active?: menuProps, setActive?: Dispatch<SetStateAction<menuProps>>, before?: menuProps, setBefore?: Dispatch<SetStateAction<menuProps>> }>({})

type MenuProps = {
	children: ReactNode
}

export const MenuContextProvider = ({ children }: MenuProps) => {
	const [active, setActive] = useState<menuProps>(0);
	const [before, setBefore] = useState<menuProps>(0);

	return (
		<MenuContext.Provider value={{ active, setActive, before, setBefore }}>
			{children}
		</MenuContext.Provider>
	)
};

export const useMenuContext = () => useContext(MenuContext);