/// <reference types="react" />
import { ViewStyle } from 'react-native';
export interface HeaderProps {
    headerContainerStyle?: ViewStyle;
    headerLeftStyle?: ViewStyle;
    headerLeftComponent?: JSX.Element;
    headerCenterStyle?: ViewStyle;
    headerCenterComponent?: JSX.Element;
    headerRightStyle?: ViewStyle;
    headerRightComponent?: JSX.Element;
}
declare const Header: (props: HeaderProps) => JSX.Element;
export default Header;
