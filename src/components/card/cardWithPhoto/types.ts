import React from "react";

export type CardWithPhotoProps = {
    data: ImageFile[],
    header: string;
    headerButton: React.ReactNode;
}

export type ImageFile = {
    name: string;
    filepath: string;
    thumbpath: string;
    createdAt: string;
};
