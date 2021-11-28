import { createElement } from "preact";
import {
    IconPrefix,
    IconName,
    IconLookup,
    icon as factory,
} from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    icon: [IconPrefix, IconName];
}

export function Icon(props: IconProps) {
    const lookup: IconLookup = {
        prefix: props.icon[0],
        iconName: props.icon[1],
    };

    const icon = factory(lookup);

    if (icon) {
        const element = icon.abstract[0];
        const children = element.children?.map((child) =>
            createElement(child.tag, child.attributes)
        );

        return createElement(element.tag, element.attributes, children);
    } else {
        console.error(`Icon "${lookup.iconName}" not found in library.`);
    }
}
