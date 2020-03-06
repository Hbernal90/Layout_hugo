import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import ElementControls from './element-controls/element-controls';
import { IAppState, IBoard, ILayoutControlsProps } from '../../../types/AppInterfaces';
import { addToLayout, removeFromLayout } from '../../../redux/layout/layout.action';
import { Button } from '@material-ui/core';

import './layout-controls.styles.scss';

const LayoutControls = ({board, addToLayout, removeFromLayout} : ILayoutControlsProps) => {

    const changeDimension = (rowOrColumn : string) : void => {
        const name = rowOrColumn;
        let newBoard = [...board];
        let newElement: IBoard = []
        if (name === "columns") {
            newBoard.map(element => {
                return element.push({ chair: false })
            })
        } else {
            newBoard[0].map(() => {
                return newElement.push({ chair: false })
            })
            newBoard.push(newElement);
        }
        addToLayout(newBoard);
    }

    const decreaseDimension = (rowOrColumn : string): void => {
        const name = rowOrColumn;
        let newBoard = [...board];
        if (name === "columns" && newBoard[0].length - 1 >= 1) {
            newBoard.map(e => e).map(e => {
                return e.pop();
            })
        } else if (name === "rows" && newBoard.length - 1 >= 1) {
            newBoard.pop();
        }
        removeFromLayout(newBoard)
    }

    return (
        <section className="controls__input">
            <div className="input__field">
                <label>Rows: </label>
                <Button size="small" variant="contained" color="primary"
                    name="rows" onClick={(evt) => decreaseDimension("rows")}>
                    -
                </Button>
                <div className="Number">
                    {board.length}
                </div>
                <Button size="small" variant="contained" color="primary"
                    name="rows" onClick={() => changeDimension("rows")}>
                    +
                </Button>
            </div>
            

            <div className="input__field">
                <label>Columns: </label>
                <Button size="small" variant="contained" color="primary"
                    name="columns" onClick={(evt) => decreaseDimension("columns")}>
                    -
                </Button>
                <div className="Number">
                    {board[0].length}
                </div>

                <Button size="small" variant="contained" color="primary"
                    name="columns" onClick={() => changeDimension("columns")}>
                    +
                </Button>
            </div>

            <div className="input__field">
                <div></div>
                <ElementControls />
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addToLayout: (board: Array<IBoard>) => dispatch(addToLayout(board)),
    removeFromLayout: (board: Array<IBoard>) => dispatch(removeFromLayout(board)),
})

const mapStateToProps = (state: IAppState) => ({
    board: state.layout.board
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutControls);