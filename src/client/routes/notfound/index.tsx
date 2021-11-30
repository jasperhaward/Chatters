import { Link } from "@components";
import styles from "./styles.scss";

function NotFoundPage() {
    return (
        <div className={styles.page}>
            <div>We couldn't find the page you were looking for.</div>
            <div>
                Try returning to the <Link href="/">homepage</Link>.
            </div>
        </div>
    );
}

export default NotFoundPage;
