import React, { MouseEventHandler } from "react";
export interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    size?: Size;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

export type Size = "sm" | "md" | "lg";
