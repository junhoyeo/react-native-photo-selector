/// <reference types="react" />
import { CameraScreenProps } from './CameraScreen';
export interface CameraProps extends CameraScreenProps {
    cameraButtonIcon?: JSX.Element;
}
declare const CameraButton: ({ takePhoto, cameraButtonIcon, cameraPreviewProps, cameraPreviewStyle, cameraFlipIcon, cameraCaptureIcon, }: CameraProps & {
    takePhoto: () => void;
}) => JSX.Element;
export default CameraButton;
