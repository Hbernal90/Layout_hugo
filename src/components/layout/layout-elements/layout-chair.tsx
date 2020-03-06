import React from 'react';
import { useDrag, DragSourceMonitor, DragSource } from 'react-dnd';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IBoard, IAppState, ILayoutChair } from '../../../types/AppInterfaces'
import { removeChairFromLayout } from '../../../redux/layout/layout.action';

import { LayoutTypes } from './layout-types/layout-types';
import './layout-chair.scss';

const LayoutChair = ({ row = -1, column = -1, board, removeChairFromLayout }: ILayoutChair) => {

  interface a {
    row: number | undefined,
    column: number | undefined
  }

  const [{ isDragging }, drag] = useDrag({
    item: { type: LayoutTypes.CHAIR, row, column},
    end(item: a | undefined, monitor: DragSourceMonitor) {
      if (item && monitor.didDrop()) {
        if(item.column !== -1 && item.row !== -1) {
          const newBoard = board ? [...board] : null;
          if(!!newBoard && item.row !== undefined && item.column !== undefined) {
            newBoard[item.row][item.column].chair = false;
            if (removeChairFromLayout)
                removeChairFromLayout(newBoard);
          }
        }
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
  })

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, }} className="chair"></div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeChairFromLayout: (board: Array<IBoard>) => dispatch(removeChairFromLayout(board))
})

const mapStateToProps = (state: IAppState) => ({
  board: state.layout.board
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutChair);