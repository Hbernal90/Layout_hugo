import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IBoard, IAppState, ILayoutElement, IDraggableElement } from '../../../types/AppInterfaces'
import { removeChairFromLayout } from '../../../redux/layout/layout.action';
import LayoutChair from '../layout-elements/layout-chair';
import { LayoutTypes } from '../layout-elements/layout-types/layout-types';

const LayoutBlock : React.FunctionComponent<ILayoutElement> =  ({ row = -1, column = -1, board, display, removeChairFromLayout, type, control }) => {

    const [{ isDragging }, drag] = useDrag({
        item: { type: LayoutTypes.CHAIR, row, column },
        end(item: IDraggableElement | undefined, monitor: DragSourceMonitor) {
            if (item && monitor.didDrop()) {
                if (item.column !== -1 && item.row !== -1) {
                    const newBoard = board ? [...board] : null;
                    if (!!newBoard) {
                        newBoard[item.row][item.column].display = false;
                        newBoard[item.row][item.column].type = null;
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

    const displayComponent = () => {
        switch(type){
            case LayoutTypes.CHAIR:
                return <LayoutChair/>
            default:
                return null
        }
    } 

    return (
        <span ref={drag} style={{ opacity: isDragging ? 0.5 : 1, }}>
            { display || control ? displayComponent() : null }
        </span>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    removeChairFromLayout: (board: Array<IBoard>) => dispatch(removeChairFromLayout(board))
})

const mapStateToProps = (state: IAppState) => ({
    board: state.layout.board
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBlock);