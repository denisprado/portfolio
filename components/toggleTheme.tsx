"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Switch } from "./ui/switch"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useThemeContext } from "@/app/context/theme"

export function ModeToggle() {
  const { color, setColor } = useThemeContext()

  return setColor ? (

    <div className="flex gap-2 justify-center items-center">
      {color === 'light' ? <Sun color={"#45464E"} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> :
        <Moon color={'#A1A4A8'} className="h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100" />}
      <Switch
        checked={color === 'dark'}
        onCheckedChange={() => setColor(color === 'dark' ? 'light' : "dark")}
      />
      <span className="sr-only">Toggle theme</span>
    </div>
  ) : <></>
}