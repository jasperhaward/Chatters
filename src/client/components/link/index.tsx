import type { VNode } from "preact";

export interface LinkProps {
    href: string;
    children: string | VNode | VNode[];
    activeClass?: string;
}

export function Link({ href, children, activeClass }: LinkProps) {
    const onClick = (event: MouseEvent) => {
        event.preventDefault();
        history.pushState(null, null, href);
    };

    return (
        <a
            href={href}
            class={location.pathname === href ? activeClass : undefined}
            onClick={onClick}
        >
            {children}
        </a>
    );
}
