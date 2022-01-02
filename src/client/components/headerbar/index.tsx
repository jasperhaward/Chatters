import type { VNode } from "preact";
import { Link, LinkProps } from "@components";
import styles from "./styles.scss";

export type HeaderbarProps = {
    children: VNode | VNode[];
}

export function Headerbar({ children }: HeaderbarProps) {
    return <header className={styles.headerbar}>{children}</header>;
}

export type HeaderbarLinkProps = Omit<LinkProps, "className" | "activeClassName">;

export function HeaderbarLink(props: HeaderbarLinkProps) {
    return (
        <Link
            className={styles.headerbarLink}
            activeClassName={styles.active}
            {...props}
        />
    );
}
