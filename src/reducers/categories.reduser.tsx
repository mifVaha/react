import {GET_CATEGORIES_SUCCEEDED, GET_SUBCATEGORIES_SUCCEEDED} from '../constants/actionTypes.constant';

const initialState = {
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

const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCEEDED:
            return {
                ...state,
                categories: action.categories
            };
        case GET_SUBCATEGORIES_SUCCEEDED:
            return {
                ...state,
                subcategories: action.subcategories
            };
        default:
            return state;
    }
};

export default categoriesReducer;