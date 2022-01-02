import type { VNode } from "preact";
import styles from "./styles.scss";

export type ContainerProps = {
    children: VNode | VNode[];
}

export function Container({ children }: ContainerProps) {
    return <main className={styles.container}>{children}</main>;
}
