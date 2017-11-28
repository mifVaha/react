import * as React from "react";
import { getSubCategories } from '../actions/subcategories.action'

export class CategoryItem extends React.Component<any> {
    render() {
        const cat = this.props;
        return (
            <div className="CategoryItem col-sm-6 col-md-6 col-lg-6">
                <button onClick={cat.onClick}>{cat.title}</button>
            </div>
        );
    }
}