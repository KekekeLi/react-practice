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
                <div className="col-6 themed-grid-col">{this.props.data.name}</div>
                <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
                <div className={`col-2 themed-grid-col${count ? '': '-s'}`}>{count? "":<span>零</span>}</div>
            </div>
        );
    }
}



export default ListItem;