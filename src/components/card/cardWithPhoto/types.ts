import React from "react";
import {Photo} from "../../../types/types";

export type CardWithPhotoProps = {
    photos: Photo[],
    header: string;
    headerButton: React.ReactNode;
    onDeletePhoto: ()=>{}
}

