import {eventChannel, END} from 'redux-saga';
import {IItem} from '../interfaces/interfaces';

const itemsGenerator = (size: number) => {
    const items = [];

    for (let i = 1; i <= size; i++) {
        const item: IItem = {
            parent_id: 0,
            id: i,
            title: "item" + i
        };
        items.push(item);
    }
    return items;
};

const getItems = (size: number, parentarray: IItem[] ) => {
    let id = 1;
    let items: IItem[] = [];
    parentarray.map((cat: any) => {
        for (let i = 1; i <= size; i++) {
            const item: IItem = {
                parent_id: cat.id,
                id: id,
                title: "subitem" + i
            };
            items.push(item);
            id++;
        }
    });

    return items;
};

const getItemsById = (id: number, parentarray: IItem[]) => {
    return parentarray.filter((item: IItem) => item.parent_id == id);
};

export default class Api {
    static getCategories() {
        return itemsGenerator(10);
    }
    static getSubCategories(id: number) {
        let parentarray: IItem[] = itemsGenerator(10);
        let inheritarray:  IItem[] =  getItems(10, parentarray);
        let result = getItemsById(id, inheritarray);
        return result;
    }
}
