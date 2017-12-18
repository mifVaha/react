import * as React from "react";
import { SingleItem } from "./SingleItem.component";
import {IItem} from "../interfaces/interfaces"

class ItemList extends React.Component<any, any>{
    componentDidMount() {
        const {getRootItems} = this.props;
        getRootItems();
    }
    getItems(node: IItem) {
        const {getItems} = this.props;
        getItems(node);
    }
    render() {
        let items = this.props.itemsTree;
        let nodes = items.map((item: IItem) => <TreeNode key={item.id} node={item} childrenArray={item.children} onClick={(item: IItem) => this.getItems(item)}/>)

        return (
            <ul>{nodes}</ul>
        );
    }
}

class TreeNode extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isVisible: false
        }
    }
    toggle(e: any) {
        this.props.onClick(this.props.node);
        this.setState({isVisible: !this.state.isVisible});
    }
    render() {
        let nodes: any;
        if (typeof this.props.childrenArray !== "undefined" && this.state.isVisible) {
            nodes = this.props.childrenArray.map((item: IItem) => <TreeNode key={item.id} node={item} childrenArray={item.children} onClick={this.props.onClick}/>);
        }
        return (
            <li>
                <span onClick={this.toggle}>{this.props.node.title}</span>
                <ul>{nodes}</ul>
            </li>
        );
    }
}
export default ItemList;