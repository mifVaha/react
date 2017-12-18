export interface IItem {
    parent_id: number;
    id: number;
    title: string;
    children?: IItem[];
}

export interface ITreeState {
    itemsTree: IItem[];
}