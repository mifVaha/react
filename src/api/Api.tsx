import {eventChannel, END} from 'redux-saga';
export interface IitemTree {
    id: number;
    parent: number;
    title: string;
}

const itemsGenerator = (size: number) => {
    const items = [];

    for (let i = 1; i <= size; i++) {
        const item: IitemTree = {
            parent: 0,
            id: i,
            title: "item" + i
        };
        items.push(item);
    }
    return items;
};

const getItems = (size: number, parentarray: IitemTree[] ) => {
    let id = 1;
    let items: IitemTree[] = [];
    parentarray.map((cat: any) => {
        for (let i = 1; i <= size; i++) {
            const item: IitemTree = {
                parent: cat.id,
                id: id,
                title: "item" + i
            };
            items.push(item);
            id++;
        }
    });

    return items;
};

const getItemsById = (id: number, parentarray: IitemTree[]) => {
    return parentarray.filter((item: IitemTree) => item.parent == id);
};

export default class Api {
    static getCategories() {
        return itemsGenerator(10);
    }
    static getSubCategories(id: number) {
        let parentarray: IitemTree[] = itemsGenerator(10);
        let inheritarray:  IitemTree[] =  getItems(10, parentarray);
        return getItemsById(id, inheritarray);
    }
}
