import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useDrop, DragObjectWithType } from 'react-dnd'

import { ILayoutBlockProps, IBoard, IAppState } from '../../../types/AppInterfaces'
import LayoutBlock from '../layout-block/layout-block'
import { LayoutTypes } from '../layout-elements/layout-types/layout-types'
import { addChairToLayout, removeChairFromLayout } from '../../../redux/layout/layout.action'

import './layout-board-block.scss';

const LayoutBoardBlock = (props: ILayoutBlockProps) => {

    const { row, column, addChairToLayout, board, removeChairFromLayout } = props;

    const setChair = (obj : DragObjectWithType) => {
        let newBoard = [...board];
        if (newBoard[row][column].display === false) {
            newBoard[row][column].display = true;
            newBoard[row][column].type = (obj.type).toString();
        }
        addChairToLayout(newBoard);
    }

    const removeChair = () => {
        let newBoard = [...board];
        newBoard[row][column].display = false;
        newBoard[row][column].type = null;
        removeChairFromLayout(newBoard);
    }

    const isDroppable = () => {
        return !board[row][column].display;
    }

    const [, drop] = useDrop({
        accept: LayoutTypes.CHAIR,
        drop: (obj) => setChair(obj),
        canDrop: () => isDroppable(),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    })

    return (
        <div ref={drop} onDoubleClick={removeChair} className="layout-block">
            <LayoutBlock display={board[row][column].display} type={board[row][column].type} row={row} column={column} />
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addChairToLayout: (board: Array<IBoard>) => dispatch(addChairToLayout(board)),
    removeChairFromLayout: (board: Array<IBoard>) => dispatch(removeChairFromLayout(board))
})

const mapStateToProps = (state: IAppState) => ({
    board: state.layout.board
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBoardBlock);