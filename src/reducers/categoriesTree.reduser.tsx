import {GET_CATEGORIES_SUCCEEDED, GET_SUBCATEGORIES_SUCCEEDED} from '../constants/actionTypes.constant';

interface ITreeItem {
    id: number;
    parent: number;
    active: boolean;
    title: string;
    children?: ITreeItem[]
}

interface IState {
    categoriesTree: ITreeItem[];
}

const initialState: IState = {
    categoriesTree: [
        {
            id: 0,
            parent: 0,
            active: false,
            title: ""
        }
    ]
};

const categoriesTreeReducer = (state = initialState, action: any): IState => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCEEDED:

            return {
                ...state,
                categoriesTree: action.categories
            };
        case GET_SUBCATEGORIES_SUCCEEDED:
            let newcategoriesTree =  state.categoriesTree.map((cat: ITreeItem) => {
                if(cat.id == action.id) {
                    cat = {
                        ...cat,
                        active: true,
                        children: action.subcategories
                    };
                } else {
                    cat = {
                        ...cat,
                        active: false
                    };
                }
                return cat;
            });
            return {
                categoriesTree: newcategoriesTree
            };
        default:
            return state;
    }
};
export default categoriesTreeReducer;