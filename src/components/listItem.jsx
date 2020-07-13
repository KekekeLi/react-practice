import React, { Component } from 'react';
import style from './listItem.module.css'
import classnames from 'classnames/bind';
import cn from 'classnames';

let count = 0
const cls = classnames.bind(style);
class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    //     this.handleDecrease = this.handleDecrease.bind(this)
    // }


    doSomethingWithCount() {
        if (count < 0) {
            count = 0
        }
    }

    handleDecrease = () => {
        count--;
        this.doSomethingWithCount()
    }

    handleIncrease = (id, ev) => {
        console.log(id, ev);
        count++;
    }

    // doHandle = () => {
    //     this.handleIncrease(this.props.data.id)
    // }

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
                    <span className={cls('title', 'list-title')}>
                        {this.props.data.name}
                    </span>
                </div>
                <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
                {/* <div className={`col-2 themed-grid-col${count ? '' : '-s'}`}>{count ? "" : <span>零</span>}</div> */}
                <div className={`col-2 themed-grid-col ` + _cn}>
                    <button onClick={this.handleDecrease} type='button' className='btn btn-primary'>-</button>
                    {/* {count ? "" : <span>零</span>} */}
                    <span className={cls('digital')}>{count}</span>
                    <button onClick={(ev) => { this.handleIncrease(this.props.data.id, ev) }} type='button' className='btn btn-primary'>+</button>
                </div>
                <div className="col-1 themed-grid-col">
                    <button onClick={() => { this.props.onDelete(this.props.data.id) }} className="btn btn-danger btn-sm" type="button">删除</button>
                </div>
            </div>
        );
    }
}



export default ListItem;