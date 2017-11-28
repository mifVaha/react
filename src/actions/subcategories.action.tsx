import {GET_SUBCATEGORIES} from "../constants/actionTypes.constant";

export const getSubCategories = (id: number) => {
    return {
        type: GET_SUBCATEGORIES,
        id: id
    };
};