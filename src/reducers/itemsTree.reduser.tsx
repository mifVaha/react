import {GET_ITEMS_SUCCEEDED, GET_ROOTITEMS_SUCCEEDED} from '../constants/actionTypes.constant';
import {IItem, ITreeState} from '../interfaces/interfaces'

const initialState: ITreeState = {
    itemsTree: [
        {
            id: 0,
            parent_id: 0,
            title: ""
        }
    ]
};
const itemsTreeReducer = (state = initialState, action: any): ITreeState => {
    switch (action.type) {
        case GET_ROOTITEMS_SUCCEEDED:
            return {
                ...state,
                itemsTree: action.rootitems
            };
        case GET_ITEMS_SUCCEEDED:
            let newItemsTree =  state.itemsTree.map((item: IItem) => {
                if(item.id == action.node.id) {
                    item = {
                        ...item,
                        children: action.items
                    };
                } else {
                    item = {
                        ...item
                    };
                }
                return item;
            });

            return {
                itemsTree: newItemsTree
            };
        default:
            return state;
    }
};
export default itemsTreeReducer;