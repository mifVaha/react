import * as React from "react";

export class SingleItem extends React.Component<any> {
    render() {
        const item = this.props;
        return (
            <div className="CategoryItem col-sm-6 col-md-6 col-lg-6">
                <button onClick={item.onClick}>{item.title}</button>
                {this.props.children}
            </div>
        );
    }
}