import React from 'react'

import './layout-block.scss'

const LayoutBlock = (props) => {

    const toggleChair = () => {
        props.setChair(props.row, props.column);
    }

    return (
        <div className="layout-block" onClick={() => toggleChair()}>
            {props.chair? <div className="chair"></div> : null}
        </div>
    )
}

export default LayoutBlock;