import styles from "./styles.scss";

interface DividerProps {
    letter: string;
}

function Divider({ letter }: DividerProps) {
    return (
        <div className={styles.divider}>
            <span>{letter}</span>
            <hr />
        </div>
    );
}

export default Divider;
