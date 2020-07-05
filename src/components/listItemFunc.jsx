import React from 'react';
import style from './listItem.module.css'
import classnames from 'classnames/bind'
import cn from 'classnames';

let count = 0;
const cls = classnames.bind(style);

const ListItem = (props) => {
    const _cn = cn({
        'themed-grid-col-s': !count
    })
    return (
        <div className="row mb-3" style={{ color: '#710000', fontSize: '20' }}>
            <div className="col-6 themed-grid-col">
                <span className={cls('title','list-title')}>
                    {props.data.name}
                </span>
            </div>
            <div className="col-1 themed-grid-col">￥{props.data.price}</div>
            <div className={`col-2 themed-grid-col ` + _cn}>{count ? "" : <span>零</span>}</div>
        </div>
    );
}

export default ListItem;