import * as utils from "../../utils";
import styles from "./styles.scss";

export interface DividerProps {
    date: string;
}

export default function Divider({ date }: DividerProps) {
    return <div className={styles.divider}>{utils.getTimeStamp(date)}</div>;
}
