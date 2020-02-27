import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ILayoutBlockProps, IBoard, IAppState } from '../../../types/AppInterfaces'
import { addChairToLayout } from '../../../redux/layout/layout.action';
import './layout-block.scss'

const LayoutBlock = (props : ILayoutBlockProps) => {
    
    const { row, column, addChairToLayout, board } = props;
    
    const setChair = () => {
        let newBoard = [...board];
        newBoard[row][column].chair = !newBoard[row][column].chair;
        addChairToLayout(newBoard);
    }

    return (
        <div className="layout-block" onClick={setChair}>
            {board[row][column].chair ? <div className="chair"></div> : null}
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addChairToLayout: (board: Array<IBoard>) => dispatch(addChairToLayout(board))
})

const mapStateToProps = (state: IAppState) => ({
    board: state.layout.board
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBlock);