import type { VNode } from "preact";
import styles from "./styles.module.scss";

export interface ContainerProps {
    children: VNode | VNode[];
}

export function Container({ children }: ContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
