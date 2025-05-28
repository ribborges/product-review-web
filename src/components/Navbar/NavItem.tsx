import { type ReactNode } from "react";
import { NavLink } from "react-router";
import clsx from "clsx";

interface NavItemProps {
    to: string;
    children?: ReactNode;
}

export default function NavItem(props: NavItemProps) {
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) => clsx(`
                w-16 h-16
                flex flex-col items-center justify-center gap-1
                text-xs
                p-2
                rounded-2xl
                transition duration-200
            `,
                isActive ? "bg-emerald-900 hover:bg-emerald-700" : "hover:bg-zinc-200 dark:hover:bg-zinc-900",
            )}
        >
            {props.children}
        </NavLink>
    );
}