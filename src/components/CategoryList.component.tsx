import * as React from "react";
import { CategoryItem } from "./CategoryItem.component";
import { SubCategoryList } from "./SubCategoryList.component";

class СategoryList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sowSub: false
        }
    }
    componentDidMount() {
        const {getCategories, getSubCategories} = this.props;
        getCategories();
    }
    categoryClick(id: number) {
        const {getSubCategories} = this.props;
        getSubCategories(id);
        this.setState({
            sowSub: false
        })
    }
    render() {
        const title = "Categories";
        let categoriesNodes = this.props.categoriesTree.map((c: any) => {
            return (
                <CategoryItem title={c.title} key={c.id} onClick={() => this.categoryClick(c.id)}>
                    {c.title}
                </CategoryItem>
            );
        });
        return (
            <div className="СategoryList">
                <h5 className="card-header title_box border_fix">{title}</h5>
                <div className="card-body underline_links">
                    <div className="row">
                        {categoriesNodes}
                    </div>
                </div>
            </div>
        );
    }
}
export default СategoryList;