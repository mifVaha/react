import * as React from "react";
import {SubCategoryItem} from "./SubCategoryItem.component";

export class SubCategoryList extends React.Component<any> {
    render() {
        const title = "Categories";
        let subCategoriesNodes = this.props.subcategories.map((c: any) => {
            return (
                <SubCategoryItem title={c.title} key={c.id}>
                    {c.title}
                </SubCategoryItem>
            );
        });
        return (
            <div className="СategoryList">
                <h5 className="card-header title_box border_fix">{title}</h5>
                <div className="card-body underline_links">
                    <div className="row">
                        {subCategoriesNodes}
                    </div>
                </div>
            </div>
        );
    }
}