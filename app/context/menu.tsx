'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
type menuProps = number
const MenuContext = createContext<{ active?: menuProps, setActive?: Dispatch<SetStateAction<menuProps>> }>({})

type MenuProps = {
	children: ReactNode
}

export const MenuContextProvider = ({ children }: MenuProps) => {
	const [active, setActive] = useState<menuProps>(0);

	return (
		<MenuContext.Provider value={{ active, setActive }}>
			{children}
		</MenuContext.Provider>
	)
};

export const useMenuContext = () => useContext(MenuContext);