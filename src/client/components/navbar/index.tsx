import type { VNode } from "preact";
import { Link, LinkProps } from "@components";

import styles from "./styles.module.scss";

export interface NavbarProps {
    children: VNode | VNode[];
}

export function Navbar({ children }: NavbarProps) {
    return <nav className={styles.navbar}>{children}</nav>;
}

export function Navlink(props: LinkProps) {
    return (
        <Link
            className={styles.navlink}
            activeClassName={styles.active}
            {...props}
        />
    );
}
