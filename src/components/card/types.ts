import React from "react";

export type CardProps = {
    children:React.ReactNode
    headerButton:React.ReactNode;
    data: { [key: string]: string };
}