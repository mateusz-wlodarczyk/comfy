import { useAppSelector } from "@/hooks";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((el) => {
        const restrictedRoutes = el.href === "checkout" || el.href === "orders";
        if (restrictedRoutes && !user) {
          return null;
        }
        return (
          <NavLink
            to={el.href}
            key={el.label}
            className={(isActice) => {
              return `capitalize font-light tracking-wide ${
                isActice ? "text-primary" : ""
              }`;
            }}
          >
            {el.label}
          </NavLink>
        );
      })}
    </div>
  );
}
export default NavLinks;
