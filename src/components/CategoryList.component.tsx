import * as React from "react";
import { CategoryItem } from "./CategoryItem.component";
import { SubCategoryList } from "./SubCategoryList.component";

class СategoryList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        const {getCategories, getSubCategories} = this.props;
        getCategories();
    }
    categoryClick(id: number) {
        const {getSubCategories} = this.props;
        getSubCategories(id);
    }
    buidTree(list: any) {
        return (list || []).map((c: any) => {
            return (
                <CategoryItem title={c.title} key={c.id} onClick={() => this.categoryClick(c.id)}>
                    {typeof c.children !== "undefined" && c.active == true && this.buidTree(c.children)}
                </CategoryItem>
            );
        });
    }
    render() {
        const title = "Categories";
        return (
            <div className="СategoryList">
                <h5 className="card-header title_box border_fix">{title}</h5>
                <div className="card-body underline_links">
                    <div className="row">
                        {this.buidTree(this.props.categoriesTree)}
                    </div>
                </div>
            </div>
        );
    }
}
export default СategoryList;