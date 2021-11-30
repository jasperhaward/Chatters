import type { VNode } from "preact";
import styles from "./styles.scss";

export interface ContainerProps {
    children: VNode | VNode[];
}

export function Container({ children }: ContainerProps) {
    return <section className={styles.container}>{children}</section>;
}
