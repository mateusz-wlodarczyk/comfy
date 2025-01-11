import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/hooks";

function LinksDropdown() {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((el) => {
          const restrictedRoutes =
            el.href === "checkout" || el.href === "orders";
          if (restrictedRoutes && !user) {
            return null;
          }
          return (
            <DropdownMenuItem key={el.label}>
              <NavLink
                to={el.href}
                className={(isActive) => {
                  return `capitalize w-full ${isActive ? "text-primary" : ""}`;
                }}
              >
                {el.label}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
