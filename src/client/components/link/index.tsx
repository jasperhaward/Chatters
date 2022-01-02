import type { VNode } from "preact";
import styles from "./styles.scss";

export type LinkProps = {
    href: string;
    className?: string;
    activeClassName?: string;
    external?: boolean;
    children: string | VNode | VNode[];
}

export function Link({
    href,
    className = styles.link,
    activeClassName = "",
    external,
    children,
}: LinkProps) {
    const onClick = (event: MouseEvent) => {
        if (!external) {
            event.preventDefault();
            history.pushState(null, null, href);
        }
    };

    const props = external && {
        target: "_blank",
        rel: "noreferrer nofollow",
    };

    return (
        <a
            className={
                location.pathname === href
                    ? className + " " + activeClassName
                    : className
            }
            {...props}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    );
}
