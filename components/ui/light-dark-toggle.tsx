"use client"

import { SunIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

type Props = {
   className?: string;
}

export function LightDarkToggle({ className }: Props) {
   const [isDarkMode, setIsDarkMode] = useState(true);
   return (
      <TooltipProvider >
         <Tooltip>
            <TooltipTrigger className={className} onClick={() => {
               setIsDarkMode((prevValue) => !prevValue);
               document.body.classList.toggle("dark");
            }}>
               {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </TooltipTrigger>
            <TooltipContent>
               {isDarkMode ? "Enable light mode" : "Enable dark mode"}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}