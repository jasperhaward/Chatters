import type { JSX, ComponentChildren } from "preact";
import * as S from "./Button.styles";

export type ButtonProps = {
    onClick?: JSX.HTMLAttributes<HTMLButtonElement>["onClick"];
};

export function Button(props: ButtonProps) {
    return <S.Button {...props} />;
}
