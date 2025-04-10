import React from "react";
import {Photo} from "../../../types/types";

export type CardWithPhotoProps = {
    photos: Photo[];
    children: React.ReactNode;
    onDeletePhoto: ()=>{};
}

