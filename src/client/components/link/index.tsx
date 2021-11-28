import type { VNode } from "preact";

export interface LinkProps {
    href: string;
    className?: string;
    activeClassName?: string;
    external?: boolean;
    children: string | VNode | VNode[];
}

export function Link({
    href,
    className,
    activeClassName,
    external,
    children,
}: LinkProps) {
    const onClick = (event: MouseEvent) => {
        event.preventDefault();
        history.pushState(null, null, href);
    };

    if (location.pathname === href) {
        // prettier-ignore
        className = className 
            ? className + " " + activeClassName 
            : activeClassName;
    }

    const props = external
        ? { target: "_blank", rel: "noreferrer nofollow" }
        : { onClick };

    return (
        <a href={href} className={className} {...props}>
            {children}
        </a>
    );
}
