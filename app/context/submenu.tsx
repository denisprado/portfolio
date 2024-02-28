'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
type menuProps = number
const SubMenuContext = createContext<{ activeSubMenu?: menuProps, setActiveSubMenu?: Dispatch<SetStateAction<menuProps>>, beforeSubMenu?: menuProps, setBeforeSubMenu?: Dispatch<SetStateAction<menuProps>> }>({})

type MenuProps = {
	children: ReactNode
}

export const SubMenuContextProvider = ({ children }: MenuProps) => {
	const [activeSubMenu, setActiveSubMenu] = useState<menuProps>(0);
	const [beforeSubMenu, setBeforeSubMenu] = useState<menuProps>(0);

	return (
		<SubMenuContext.Provider value={{ activeSubMenu, setActiveSubMenu, beforeSubMenu, setBeforeSubMenu }}>
			{children}
		</SubMenuContext.Provider>
	)
};

export const useSubMenuContext = () => useContext(SubMenuContext);