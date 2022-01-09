import styles from "./styles.scss";

interface DividerProps {
    children: string;
}

function Divider({ children }: DividerProps) {
    return (
        <div className={styles.divider}>
            <span>{children}</span>
            <hr />
        </div>
    );
}

export default Divider;
