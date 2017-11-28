import * as React from "react";
import * as ReactDOM from "react-dom";
import { CategoryItem } from "./CategoryItem.component";

class СategoryList extends React.Component<any, any> {
    componentDidMount() {
        const {getCategories} = this.props;
        getCategories();
    }
    render() {
        const title = "Categories";
        let categoriesNodes = this.props.categories.map((c: any) => {
            return (
                <CategoryItem title={c.title} key={c.id}>
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