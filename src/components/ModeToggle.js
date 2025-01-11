import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from "react/jsx-runtime";
import { useAppDispatch } from "@/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { setTheme } from "@/features/theme/themeSlice";
function ModeToggle() {
  const dispatch = useAppDispatch();
  return _jsx(_Fragment, {
    children: _jsxs(DropdownMenu, {
      children: [
        _jsx(DropdownMenuTrigger, {
          asChild: true,
          children: _jsxs(Button, {
            variant: "outline",
            size: "icon",
            children: [
              _jsx(Sun, {
                className:
                  "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              }),
              _jsx(Moon, {
                className:
                  "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100",
              }),
              _jsx("span", { className: "sr-only", children: "Toggle theme" }),
            ],
          }),
        }),
        _jsxs(DropdownMenuContent, {
          align: "end",
          children: [
            _jsx(DropdownMenuItem, {
              onClick: () => dispatch(setTheme("light")),
              children: "Light",
            }),
            _jsx(DropdownMenuItem, {
              onClick: () => dispatch(setTheme("dark")),
              children: "Dark",
            }),
            _jsx(DropdownMenuItem, {
              onClick: () => dispatch(setTheme("system")),
              children: "System",
            }),
          ],
        }),
      ],
    }),
  });
}
export default ModeToggle;
