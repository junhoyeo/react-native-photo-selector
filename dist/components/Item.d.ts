import React from 'react';
import { PhotoProps } from '../index';
export interface ItemProps {
    item: PhotoProps;
    selectedMarker: (index: number) => JSX.Element;
    imageMargin: number;
    imageSize: number;
    onClick: (item: PhotoProps) => void;
    isZoomEnabled?: boolean;
    setZoomImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}
declare const Item: ({ item, selectedMarker, imageMargin, imageSize, onClick, isZoomEnabled, setZoomImage, }: ItemProps) => JSX.Element;
export default Item;
