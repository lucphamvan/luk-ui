import React, { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ButtonProps, Size } from "./index.type";

const fontSize = (size: "sm" | "md" | "lg" | undefined) => {
    switch (size) {
        case "sm":
            return "0.875rem";
        case "md":
            return "1rem";
        case "lg":
            return "1.125rem";
        default:
            return "1rem";
    }
};

const paddingSize = (size?: Size) => {
    switch (size) {
        case "sm":
            return "0.875rem 1.25rem";
        case "md":
            return "1rem 1.5rem";
        case "lg":
            return "1.125rem 1.625rem";
        default:
            return "1rem 1.5rem";
    }
};

const StyledButton = styled.button(({ primary, size }: ButtonProps) => {
    const background = primary ? "blue" : "green";
    const textSize = fontSize(size);
    const padding = paddingSize(size);
    return css`
        background: ${background};
        font-size: ${textSize};
        padding: ${padding};
    `;
});

export const Button: FC<ButtonProps> = ({ disabled, onClick, primary, size, children, ...props }) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick} primary={primary} {...props}>
            {children}
        </StyledButton>
    );
};
