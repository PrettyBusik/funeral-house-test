import React from "react";

export type CardProps = {
    header: string;
    headerButton:React.ReactNode;
    data: { [key: string]: string };
}