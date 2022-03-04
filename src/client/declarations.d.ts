import { JSX } from "preact"

declare module "*.scss" {
    const styles: Record<string, string>;
    export default styles;
}

declare namespace React {
    type MouseEventHandler<Target extends EventTarget> = JSX.MouseEventHandler<Target>
}