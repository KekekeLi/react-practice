import React, { Component } from 'react';

let count = 0
class ListItem extends Component {

    constructor( props ) {
        super(props)
        this.state = {}
    }
    manageCount() {
        return count + '个'
    }
    render() {
        return (
            <div className="row mb-3">
                <div className="col-6 theme-grid-col">{this.props.data.name}</div>
                <div className="col-1 theme-grid-col">￥{this.props.data.price}</div>
                <div className="col-2 theme-grid-col">{count}</div>
            </div>
        );
    }
}



export default ListItem;