import styled from "styled-components";
import { colours, shared, border } from "@styles";
import type { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    transition: opacity 0.3s;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.7;
    }
`;

export const PrimaryButton = styled(Button)`
    padding: ${shared.padding};
    border-radius: ${border.radius.medium};
    color: ${colours.black};
    background-color: ${colours.primary};
    transition: all 0.2s ease-in;
`;
