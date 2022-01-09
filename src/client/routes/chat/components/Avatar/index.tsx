import styles from "./styles.scss";

type AvatarProps = {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    src: string;
    content: string | number;
};

function Avatar({ sm, md, lg, src, content }: AvatarProps) {
    var size;

    if (sm) size = styles.sm;
    if (md) size = styles.md;
    if (lg) size = styles.lg;

    return (
        <div className={styles.avatar + " " + size}>
            {src ? <img alt="avatar" src={src} /> : <div>{content}</div>}
        </div>
    );
}

export default Avatar;
