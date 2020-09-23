import React from 'react';
import { ViewStyle } from 'react-native';
import { RNCameraProps } from 'react-native-camera';
export interface CameraScreenProps {
    cameraPreviewProps?: RNCameraProps;
    cameraPreviewStyle?: ViewStyle;
    cameraFlipIcon?: JSX.Element;
    cameraCaptureIcon?: JSX.Element;
}
declare const CameraScreen: ({ takePhoto, setShowModal, cameraPreviewProps, cameraPreviewStyle, cameraFlipIcon, cameraCaptureIcon, }: CameraScreenProps & {
    takePhoto: () => void;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element;
export default CameraScreen;
