import {GET_CATEGORIES, GET_SUBCATEGORIES} from "../constants/actionTypes.constant";

export const getCategories = () => {
    return {
        type: GET_CATEGORIES,
        categories: [
            {
                id: 3,
                title: "ima3"
            },
            {
                id: 4,
                title: "ima4"
            },
            {
                id: 5,
                title: "ima5"
            }
        ]
    };
};
export const getSubCategories = (id) => {
    return {
        type: GET_SUBCATEGORIES,
        subcategories: fetch('/sadf/asdf?'+ id)
    };
};