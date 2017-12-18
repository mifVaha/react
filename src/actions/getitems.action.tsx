import {GET_ITEMS, GET_ITEMS_SUCCEEDED} from "../constants/actionTypes.constant";
import {IItem} from "../interfaces/interfaces"

export const getItems = (node: IItem) => {
    return {
        type: GET_ITEMS,
        node: node
    };
};