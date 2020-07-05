import React, { Component } from 'react';
import style from './listItem.module.css'
import classnames from 'classnames/bind';
import cn from 'classnames';

let count = 0
const cls = classnames.bind(style);
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      }
    
    manageCount() {
        return count + '个'
    }
    render() {
        const _cn = cn({
            'themed-grid-col-s': !count
        })
        return (
            <div className="row mb-3">
                <div className="col-6 themed-grid-col">
                    <span  className={cls('title','list-title')}>
                        {this.props.data.name}
                    </span>
                </div>
                <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
                {/* <div className={`col-2 themed-grid-col${count ? '' : '-s'}`}>{count ? "" : <span>零</span>}</div> */}
                <div className={`col-2 themed-grid-col ` + _cn}>{count ? "" : <span>零</span>}</div>
            </div>
        );
    }
}



export default ListItem;