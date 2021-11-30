import type { VNode } from "preact";
import { Link, LinkProps } from "@components";
import styles from "./styles.scss";

export interface NavbarProps {
    children: VNode | VNode[];
}

export function Navbar({ children }: NavbarProps) {
    return <nav className={styles.navbar}>{children}</nav>;
}

export function NavLink(props: LinkProps) {
    return (
        <Link
            className={styles.navlink}
            activeClassName={styles.active}
            {...props}
        />
    );
}
