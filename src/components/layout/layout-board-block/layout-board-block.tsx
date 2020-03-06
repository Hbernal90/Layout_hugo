import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd'

import { ILayoutBlockProps, IBoard, IAppState } from '../../../types/AppInterfaces'
import LayoutBlock from '../layout-block/layout-block'
import { LayoutTypes } from '../layout-elements/layout-types/layout-types'
import { addChairToLayout, removeChairFromLayout } from '../../../redux/layout/layout.action'

const LayoutBoardBlock = (props : ILayoutBlockProps) => {

  const { row, column, addChairToLayout, board, removeChairFromLayout } = props;

    const setChair = () => {
        let newBoard = [...board];
        if( newBoard[row][column].chair === false ) {
          newBoard[row][column].chair =  true;
        }
        addChairToLayout(newBoard);
    }

    const removeChair = () => {
      let newBoard = [...board];
      newBoard[row][column].chair =  false;
      removeChairFromLayout(newBoard);
    }

    const isDroppable = () => {
        return !board[row][column].chair;
    }

    const [{ isOver }, drop] = useDrop({
        accept: LayoutTypes.CHAIR,
        drop: () => setChair(),
        canDrop: () => isDroppable(),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        })
    })

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
            onDoubleClick={removeChair}
        >
            <LayoutBlock chair = {board[row][column].chair} row={row} column={column}/>
            {/* {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />} */}
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