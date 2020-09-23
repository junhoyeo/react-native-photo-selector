import React from 'react';
export interface FolderListProps {
    folderList?: FolderProps[];
}
export interface FolderProps {
    index: number;
    title: string;
    groupName?: string;
    mainImageUrl: string;
    count: number | string;
}
declare const FolderList: ({ folderList, setGroupName, setShowFolderList, }: FolderListProps & {
    setGroupName: React.Dispatch<React.SetStateAction<string | undefined>>;
    setShowFolderList: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element;
export default FolderList;
