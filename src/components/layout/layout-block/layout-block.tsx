import React from 'react';
/* import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ILayoutBlockProps, IBoard, IAppState } from '../../../types/AppInterfaces'
import { addChairToLayout } from '../../../redux/layout/layout.action'; */
import LayoutChair from '../layout-elements/layout-chair';
import './layout-block.scss'

interface option {
    chair : boolean,
    row: number,
    column: number
}

const LayoutBlock = (props : option) => {
    
    const { chair, row, column } = props;

    return (
        <div className="layout-block">
            {chair ? <LayoutChair row={row} column={column}/> : null}
        </div>
    )
}

export default LayoutBlock;