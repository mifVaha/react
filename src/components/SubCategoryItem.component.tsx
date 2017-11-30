import * as React from "react";

export class SubCategoryItem extends React.Component<any> {
    render() {
        const subcat = this.props;
        return (
            <div className="CategoryItem col-sm-6 col-md-6 col-lg-6">
                <button>{subcat.title}</button>
            </div>
        );
    }
}