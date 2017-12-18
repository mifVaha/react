import {connect} from "react-redux";
import ItemList from "../components/ItemList.component";
import {getItems} from "../actions/getitems.action";
import {getRootItems} from "../actions/getrootitems.action";
import {IItem, ITreeState} from "../interfaces/interfaces"

const mapStateToProps = (state: any) => {
    return {
        itemsTree: state.itemsTreeReducer.itemsTree
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getRootItems: () => {
            dispatch(getRootItems());
        },
        getItems: (node: IItem) => {
            dispatch(getItems(node));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);