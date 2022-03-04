import styles from "./index.scss";

type AvatarProps = {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    src: string | string[];
};

function Avatar({ sm, md, lg, src }: AvatarProps) {
    var className = styles.avatar;

    if (sm) className += " " + styles.sm;
    if (md) className += " " + styles.md;
    if (lg) className += " " + styles.lg;

    if (typeof src !== "string") {
        if (src.length === 2) className += " " + styles.two;
        else className += " " + styles.three;
    }

    return (
        <figure className={className}>
            {typeof src === "string" ? (
                <img alt="avatar" src={src} />
            ) : (
                src.map((src) => <img alt="avatar" src={src} />)
            )}
        </figure>
    );
}

export default Avatar;
