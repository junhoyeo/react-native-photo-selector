/// <reference types="react" />
import { ViewStyle, StyleProp } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import { HeaderProps } from './components/Header';
import { CameraProps } from './components/CameraButton';
export interface PhotoProps {
    filename: string | null;
    uri: string;
    height: number;
    width: number;
    fileSize: number | null;
    playableDuration: number | null;
}
interface ImageListProps {
    initialNumToRender?: number;
    containerWidth?: number;
    containerStyle?: StyleProp<ViewStyle>;
    ListEmptyComponent?: JSX.Element;
    imagesPerRow?: number;
    imageMargin?: number;
}
interface ZoomImageProps {
    closeButton?: JSX.Element;
    closeContainerStyle?: ViewStyle;
}
interface LoadingProps {
    initialLoader?: JSX.Element;
}
export interface PhotoSelectorProps {
    maximum?: number;
    assetType?: CameraRoll.AssetType;
    selectSingleItem?: boolean;
    callback: (selectedImages: PhotoProps[], currentImage: PhotoProps) => void;
    selectedImagesUri?: string[];
    selectedMarker?: ((index: number) => JSX.Element) | JSX.Element;
    loadingOption?: LoadingProps;
    zoomImageOption?: ZoomImageProps;
    imageListOption?: ImageListProps;
    cameraOption?: CameraProps;
    headerOption?: HeaderProps;
}
declare const PhotoSelector: (props: PhotoSelectorProps) => JSX.Element;
export default PhotoSelector;
