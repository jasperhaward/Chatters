import { Link, Icon, IconProps } from "@components";
import styles from "./styles.scss";


export interface IconLinkProps extends IconProps {
    href: string;
    external?: boolean;
}

export function IconLink({ href, external, icon }: IconLinkProps) {
    return (
        <Link className={styles.iconLink} external={external} href={href}>
            <Icon icon={icon} />
        </Link>
    );
}
