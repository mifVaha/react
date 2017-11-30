import {connect} from "react-redux";
import CategoryList from "../components/CategoryList.component";
import {getCategories} from "../actions/categories.action";
import {getSubCategories} from "../actions/subcategories.action";

const mapStateToProps = (state: any) => {
    return {
        categoriesTree: state.categoriesReducer.categoriesTree
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCategories: () => {
            dispatch(getCategories());
        },
        getSubCategories: (id: number) => {
            dispatch(getSubCategories(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);