import {connect} from "react-redux";
import CategoryList from "../components/CategoryList.component";
import {getCategories} from "../actions/categories.action";

const mapStateToProps = (state: any) => {
    return {
        categories: state.categoriesReducer.categories
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCategories: () => {
            dispatch(getCategories());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);