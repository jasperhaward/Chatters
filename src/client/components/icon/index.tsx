import { createElement } from "preact";
import {
    IconPrefix,
    IconName,
    icon as factory,
} from "@fortawesome/fontawesome-svg-core";

export type IconProps = {
    icon: [IconPrefix, IconName];
}

export function Icon(props: IconProps) {
    const [prefix, iconName] = props.icon;

    const icon = factory({ prefix, iconName });

    if (icon) {
        const element = icon.abstract[0];
        const children = element.children?.map((child) =>
            createElement(child.tag, child.attributes)
        );

        return createElement(element.tag, element.attributes, children);
    } else {
        console.error(`Icon "${iconName}" not found in library.`);
    }
}
